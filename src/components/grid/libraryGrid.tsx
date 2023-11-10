import { component$ } from '@builder.io/qwik';
import Cell from '~/components/grid/cell';
import { PlusCircleIcon } from 'qwik-feather-icons';
import type { IndexLine, MultiIndexLine } from '~/@types/uecapabilityparser';

interface Props {
  data: (IndexLine | MultiIndexLine)[];
}

export default component$(({ data }: Props) => {
  const getUrl = (item: MultiIndexLine | IndexLine) => {
    const multi = (item as MultiIndexLine).indexLineIds != null;
    const path = multi ? '/view/multi/' : '/view/';
    return `${path}?id=${item.id}`;
  };

  return (
    <div
      class={
        'mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      }
    >
      <Cell
        label={'Add New'}
        url={'/parser'}
        Icon={PlusCircleIcon}
        inverted={true}
      />
      {data?.map((item) => (
        <Cell
          key={item.id}
          multilineLabel={item.description}
          label={new Date(item.timestamp).toLocaleString().replace(', ', ' ')}
          url={getUrl(item)}
        />
      ))}
    </div>
  );
});
