import { component$, useSignal } from '@builder.io/qwik';
import Cell from '~/components/grid/cell';
import { PlusCircleIcon } from 'qwik-feather-icons';
import type { IndexLine, MultiIndexLine } from '~/@types/uecapabilityparser';
import Search from '../search/search';
import { searchFuzzyLibrary } from '~/helpers/search';

interface Props {
  data: (IndexLine | MultiIndexLine)[];
  searchId: string;
}

export default component$(({ data, searchId }: Props) => {
  const getUrl = (item: MultiIndexLine | IndexLine) => {
    const multi = (item as MultiIndexLine).indexLineIds != null;
    const path = multi ? '/view/multi/' : '/view/';
    return `${path}?id=${item.id}`;
  };

  const filteredData = useSignal<string[]>(data.map((x) => x.id));
  const inFilter = (id: string) => filteredData.value.includes(id);

  return (
    <div class={'mx-auto w-full max-w-7xl'}>
      <Search
        placeholder={'Search logs'}
        hidden={false}
        disabled={false}
        fuzzy={{ id: searchId, keys: ['description', 'timestamp'], data: data }}
        onKeyUp$={(value: string) => {
          let res = null;
          if (value.trim().length != 0) {
            res = searchFuzzyLibrary(searchId, value);
          }
          filteredData.value = res ?? data.map((x) => x.id);
        }}
      />
      <div
        class={
          'grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
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
            hidden={!inFilter(item.id)}
          />
        ))}
      </div>
    </div>
  );
});
