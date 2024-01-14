import {
  $,
  Resource,
  component$,
  useResource$,
  useSignal,
  useStore,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { isServer } from '@builder.io/qwik/build';
import axios from 'axios';
import type {
  Comparator,
  Criteria,
  IComboValue,
  IComponentValue,
  LibraryIndex,
  Query,
} from '~/@types/uecapabilityparser';
import LibraryGrid from '~/components/grid/libraryGrid';
import Title from '~/components/header/title';
import Button from '~/components/inputs/button';
import Alert from '~/components/modal/alert';
import Advancedsearch from '~/components/search/advancedsearch';
import CircleSpinner from '~/components/spinner/circle-spinner';
import {
  isDate,
  isListBand,
  isListCombos,
  isListString,
  isLogType,
  isLteBands,
  isNumber,
  isText,
} from '~/helpers/advancedsearch';
import { AlertException, markdownToHtml } from '~/helpers/alert';
import { Endpoints } from '~/helpers/endpoints';

export default component$(() => {
  const query = useStore<Query>({ criteriaList: [] });

  const getList = $(async (query: Query) => {
    const url = Endpoints.STORE + 'list/filtered';

    try {
      const response = await axios.post(url, query);
      const library = response.data as LibraryIndex;
      const items = library.items;
      const multiItems = library.multiItems ?? [];

      const multiItemsToShow = multiItems.filter((multiItem) => {
        const idsFound = multiItem.indexLineIds.filter((id) => {
          return items.find((it) => it.id == id);
        });
        return idsFound.length > 0;
      });

      const idsToRemove = multiItemsToShow.flatMap(
        (multiItem) => multiItem.indexLineIds,
      );
      const itemsToShow = items.filter(
        (item) => !idsToRemove.includes(item.id),
      );

      const itemsMerged = [...itemsToShow, ...multiItemsToShow];
      itemsMerged.sort((a, b) => b.timestamp - a.timestamp);

      return itemsMerged;
    } catch (err: any) {
      throw new AlertException(err);
    }
  });

  const resultData = useResource$(({ track }) => {
    track(() => {
      query.criteriaList;
    });
    if (isServer) return;
    return getList(query);
  });

  const spinner = <CircleSpinner centered={true} />;
  const count = useSignal(1);

  const showAlert = useSignal<boolean>(false);
  const alertMessage = useSignal<string>('');

  const submitFun = $((_: any, currentTarget: HTMLFormElement) => {
    try {
      const queryLen = count.value;
      const form = currentTarget;
      const formData = new FormData(form);
      const requests = [];

      for (let index = 0; index < queryLen; index++) {
        const field = formData.get(`field-${index}`) as string;
        const comparator = formData.get(`comparator-${index}`) as Comparator;
        const value = formData.get(`value-${index}`) as string;

        let request: Criteria;

        if (isDate(field)) {
          request = {
            type: 'number',
            field: field,
            comparator: comparator,
            value: new Date(value).getTime(),
          } as Criteria.number;
        } else if (isNumber(field)) {
          request = {
            type: 'number',
            field: field,
            comparator: comparator,
            value: parseInt(value),
          } as Criteria.number;
        } else if (isText(field) || isLogType(field)) {
          request = {
            type: 'string',
            field: field,
            comparator: comparator,
            value: value,
          } as Criteria.string;
        } else if (isListString(field)) {
          request = {
            type: 'strings',
            field: field,
            comparator: comparator,
            value: value.split(',').map((it) => it.trim()),
          } as Criteria.strings;
        } else if (isListBand(field)) {
          const lte = isLteBands(field);
          request = {
            type: 'bands',
            field: field,
            comparator: comparator,
            value: value.split(',').map((it) => {
              return {
                type: lte ? 'lte' : 'nr',
                band: parseInt(it),
              };
            }),
          } as Criteria.bands;
        } else if (isListCombos(field)) {
          const valueLength = parseInt(value);
          const values = [];

          for (let comboIndex = 0; comboIndex < valueLength; comboIndex++) {
            const components = {
              lteDl: [],
              lteUl: [],
              nrDl: [],
              nrUl: [],
              nrDcDl: [],
              nrDcUl: [],
            };
            const currentIndex = `-${index}-${comboIndex}`;
            const comboValueId = `combo-value${currentIndex}`;
            const compLength = parseInt(formData.get(comboValueId) as string);

            for (let compIndex = 0; compIndex < compLength; compIndex++) {
              const currentIndex = `-${index}-${comboIndex}-${compIndex}`;
              const type = formData.get(`type${currentIndex}`) as string;
              const band = parseInt(
                formData.get(`band${currentIndex}`) as string,
              );
              const mimo = parseInt(
                formData.get(`mimo${currentIndex}`) as string,
              );
              const bwClass = formData.get(`class${currentIndex}`) as string;
              const bw = parseInt(formData.get(`bw${currentIndex}`) as string);

              const value = {} as IComponentValue;
              value.type = type.replace('Dc', '') as IComponentValue.Type;
              value.band = band;

              if (bwClass != null && bwClass.length > 0) {
                value.minBwClass = bwClass;
              }

              if (value.type != 'lteUl' && !isNaN(mimo)) {
                value.minMimo = mimo;
              }

              if (
                !isNaN(bw) &&
                (value.type == 'nrDl' || value.type == 'nrUl')
              ) {
                value.minMaxBwPerCC = bw;
              }
              (components as any)[type].push(value);
            }
            values.push(components);
          }

          const combos = [] as IComboValue[];

          for (let i = 0; i < values.length; i++) {
            const combo = {} as IComboValue;

            const comboCriteria = values[i];
            if (field == 'LTE_COMBOS' || field == 'NR_COMBOS') {
              combo.type = 'simple' as IComboValue.Type;
              if (combo.type == 'simple') {
                if (field == 'LTE_COMBOS') {
                  combo.dl = comboCriteria.lteDl;
                  combo.ul = comboCriteria.lteUl;
                } else {
                  combo.dl = comboCriteria.nrDl;
                  combo.ul = comboCriteria.nrUl;
                }
              }
            } else {
              combo.type = 'mrdc' as IComboValue.Type;
              if (combo.type == 'mrdc') {
                if (field == 'ENDC_COMBOS') {
                  combo.dlMaster = comboCriteria.lteDl;
                  combo.ulMaster = comboCriteria.lteUl;
                  combo.dlSecondary = comboCriteria.nrDl;
                  combo.ulSecondary = comboCriteria.nrUl;
                } else {
                  combo.dlMaster = comboCriteria.nrDl;
                  combo.ulMaster = comboCriteria.nrUl;
                  combo.dlSecondary = comboCriteria.nrDcDl;
                  combo.ulSecondary = comboCriteria.nrDcUl;
                }
              }
            }
            combos.push(combo);
          }

          request = {
            type: 'combos',
            field: field,
            comparator: comparator,
            value: combos,
          } as Criteria.combos;
        } else {
          throw 'Not supported by this demo';
        }
        requests.push(request);
      }
      query.criteriaList = requests;
    } catch (error: any) {
      throw new AlertException(error);
    }
  });

  return (
    <>
      <Title text="Advanced Search" />
      <div class={'flex flex-1 flex-col'}>
        <form
          class={'mx-auto w-full max-w-7xl'}
          autocomplete="off"
          preventdefault:submit
          onSubmit$={submitFun}
        >
          {[...Array(count.value).keys()].map((value) => (
            <div key={`search-${value}`}>
              <Advancedsearch suffix={value + ''} />
            </div>
          ))}
          <div class="flex flex-wrap gap-x-4">
            <Button
              type="button"
              label="Remove"
              hidden={count.value < 2}
              onClick$={() => {
                if (count.value > 1) {
                  count.value--;
                }
              }}
            />
            <Button
              type="button"
              label="Add"
              onClick$={() => {
                count.value++;
              }}
            />
            <div class={(count.value > 1 && 'min-w-full') || 'flex-1'}>
              <Button type="submit" label="Submit" />
            </div>
          </div>
        </form>
        <Alert title="Error" show={showAlert}>
          <p dangerouslySetInnerHTML={alertMessage.value} />
        </Alert>
        <Resource
          value={resultData}
          onPending={() => spinner}
          onResolved={(data) => {
            if (data == null) {
              return <></>;
            } else {
              return (
                <LibraryGrid
                  data={data}
                  hideAddNew={true}
                  searchId="advancedSearch"
                />
              );
            }
          }}
          onRejected={(error) => {
            showAlert.value = true;
            alertMessage.value = markdownToHtml(error.message);
            return <></>;
          }}
        />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'AdvancedSearch - UE Capability Parser Web',
  meta: [
    {
      name: 'description',
      content: 'AdvancedSearch - UE Capability Parser Web',
    },
  ],
};
