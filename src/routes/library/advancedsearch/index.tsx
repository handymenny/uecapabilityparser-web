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
