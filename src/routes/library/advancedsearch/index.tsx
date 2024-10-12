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
import type { LibraryIndex, Query } from '~/@types/uecapabilityparser';
import LibraryGrid from '~/components/grid/libraryGrid';
import Title from '~/components/header/title';
import Alert from '~/components/modal/alert';
import AdvancedsearchForm from '~/components/search/advancedsearch-form';
import CircleSpinner from '~/components/spinner/circle-spinner';
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

      const itemsIds = new Set<string>();
      items.forEach(({ id }) => itemsIds.add(id));

      const multiItemsToShow = multiItems.filter((multiItem) => {
        return multiItem.indexLineIds.some((id) => itemsIds.has(id));
      });

      const idsToRemove = new Set<string>();
      multiItemsToShow.forEach(({ indexLineIds }) => {
        indexLineIds.forEach((id) => idsToRemove.add(id));
      });

      const itemsToShow = items.filter((item) => !idsToRemove.has(item.id));

      const itemsMerged = [...itemsToShow, ...multiItemsToShow];
      itemsMerged.sort((a, b) => b.timestamp - a.timestamp);

      return itemsMerged;
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        switch (err.response?.status) {
          case 413:
          case 400:
          case 500:
            throw new AlertException('Invalid search');
          default:
            throw new AlertException(err.message);
        }
      }
      throw new AlertException(err);
    }
  });

  const resultData = useResource$(({ track }) => {
    track(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      query.criteriaList;
    });
    if (isServer) return;
    return getList(query);
  });

  const spinner = <CircleSpinner centered={true} />;
  const showAlert = useSignal<boolean>(false);
  const alertMessage = useSignal<string>('');

  return (
    <>
      <Title text="Advanced Search" />
      <div class={'flex flex-1 flex-col'}>
        <AdvancedsearchForm query={query} />
        <Alert title="Error" show={showAlert}>
          <p dangerouslySetInnerHTML={alertMessage.value} />
        </Alert>
        {query.criteriaList.length == 0 || (
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
                    advancedSearchMode={true}
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
        )}
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
