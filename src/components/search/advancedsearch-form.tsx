import { $, component$, useSignal } from '@builder.io/qwik';
import type {
  Comparator,
  Criteria,
  IComboValue,
  IComponentValue,
  Query,
} from '~/@types/uecapabilityparser';
import Button from '~/components/inputs/button';
import Advancedsearch from '~/components/search/advancedsearch';
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
import { AlertException } from '~/helpers/alert';

interface Props {
  query: Query;
}

export default component$(({ query }: Props) => {
  const count = useSignal(1);

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
          onClick$={async () => {
            if (count.value > 1) {
              count.value--;
            }
          }}
        />
        <Button
          type="button"
          label="Add"
          onClick$={async () => {
            count.value++;
          }}
        />
        <div class={(count.value > 1 && 'min-w-full') || 'flex-1'}>
          <Button type="submit" label="Submit" />
        </div>
      </div>
    </form>
  );
});
