import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import axios from 'axios';
import Cell from '~/components/grid/cell';
import { PlusCircleIcon } from 'qwik-feather-icons';
import CircleSpinner from '~/components/spinner/circle-spinner';
import type {
  IndexLine,
  LibraryIndex,
  MultiIndexLine,
} from '~/@types/uecapabilityparser';

export default component$(() => {
  const resultData: { value: (IndexLine | MultiIndexLine)[] | undefined } =
    useStore({
      value: undefined,
    });

  const getList = $(async () => {
    const url = import.meta.env.PUBLIC_STORE_ENDPOINT + 'list';

    try {
      const response = await axios.get(url);
      const library = response.data as LibraryIndex;
      const items = library.items;
      const multiItems = library.multiItems ?? [];

      const multiItemsToShow = multiItems.filter(
        (multiItem) => multiItem.indexLineIds.length > 1,
      );
      const idsToRemove = multiItemsToShow.flatMap(
        (multiItem) => multiItem.indexLineIds,
      );
      const itemsToShow = items.filter(
        (item) => !idsToRemove.includes(item.id),
      );

      const itemsMerged = [...itemsToShow, ...multiItemsToShow];
      itemsMerged.sort((a, b) => b.timestamp - a.timestamp);

      resultData.value = itemsMerged;
    } catch (err) {
      resultData.value = [];
      console.error(err);
      alert(err);
    }
  });

  const getUrl = (item: MultiIndexLine | IndexLine) => {
    const multi = (item as MultiIndexLine).indexLineIds != null;
    const path = multi ? '/view/multi/' : '/view/';
    return `${path}?id=${item.id}`;
  };

  useVisibleTask$(() => {
    getList();
  });

  return (
    <div class="flex flex-1 flex-col">
      <h1 class="mb-4 text-center text-4xl font-semibold">Library</h1>
      {resultData.value === undefined && (
        <div class="flex flex-1 flex-col items-center justify-center">
          <CircleSpinner />
        </div>
      )}
      <div
        class={
          'mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' +
          (resultData.value === undefined ? ' hidden' : '')
        }
      >
        {resultData.value !== undefined && (
          <Cell
            label={'Add New'}
            url={'/parser'}
            Icon={PlusCircleIcon}
            inverted={true}
          />
        )}
        {resultData.value?.map((item) => (
          <Cell
            key={item.id}
            multilineLabel={item.description}
            label={new Date(item.timestamp).toLocaleString().replace(', ', ' ')}
            url={getUrl(item)}
          />
        ))}
      </div>
    </div>
  );
});
