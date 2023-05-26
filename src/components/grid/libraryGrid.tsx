import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import axios from 'axios';
import Cell from '~/components/grid/cell';
import { PlusCircleIcon } from 'qwik-feather-icons';
import CircleSpinner from '~/components/spinner/circle-spinner';

export default component$(() => {
  const resultData: { value: any[] | undefined } = useStore({
    value: undefined,
  });

  const getList = $(async () => {
    const url = import.meta.env.PUBLIC_STORE_ENDPOINT + 'list';

    try {
      const response = await axios.get(url);
      resultData.value = response.data.items.reverse();
    } catch (err) {
      resultData.value = [];
      console.error(err);
      alert(err);
    }
  });

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
        {resultData.value?.map(({ description, id, timestamp }) => (
          <Cell
            key={id}
            multilineLabel={description}
            label={new Date(timestamp).toLocaleString().replace(', ', ' ')}
            url={'/view?id=' + id}
          />
        ))}
      </div>
    </div>
  );
});
