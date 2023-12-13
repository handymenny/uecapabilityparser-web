import {
  $,
  Resource,
  component$,
  useResource$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { isServer } from '@builder.io/qwik/build';
import axios from 'axios';
import type { LibraryIndex } from '~/@types/uecapabilityparser';
import LibraryGrid from '~/components/grid/libraryGrid';
import Title from '~/components/header/title';
import CircleSpinner from '~/components/spinner/circle-spinner';

export default component$(() => {
  const documentReady = useSignal(false);

  const getList = $(async () => {
    const url = import.meta.env.PUBLIC_STORE_ENDPOINT + 'list';

    try {
      const response = await axios.get(url);
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
    } catch (err) {
      console.error(err);
      alert(err);
      throw err;
    }
  });

  const resultData = useResource$(({ track }) => {
    track(() => {
      documentReady.value;
    });
    if (isServer) return;
    return getList();
  });

  useVisibleTask$(
    () => {
      documentReady.value = true;
    },
    { strategy: 'document-ready' },
  );

  const spinner = <CircleSpinner centered={true} />;

  return (
    <>
      <Title text="Library" />
      <div class={'flex flex-1 flex-col'}>
        <Resource
          value={resultData}
          onPending={() => spinner}
          onResolved={(data) => {
            if (data == null) {
              return spinner;
            } else {
              return <LibraryGrid data={data} />;
            }
          }}
        />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Library - UE Capability Parser Web',
  meta: [
    {
      name: 'description',
      content: 'Library - UE Capability Parser Web',
    },
  ],
};
