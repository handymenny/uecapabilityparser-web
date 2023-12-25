import {
  $,
  component$,
  useSignal,
  useOnDocument,
  useOnWindow,
  useVisibleTask$,
} from '@builder.io/qwik';
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

  const filteredData = useSignal<(IndexLine | MultiIndexLine)[]>(data);
  const total = data.length;
  const count = useSignal<number>(Math.min(total, 60));
  const scrollData = useSignal<{
    scrollHeigth: number;
    clientHeigth: number;
    clientWidth: number;
  }>();

  const bumpCount = $((doc: Document) => {
    const el = doc.scrollingElement;
    if (el == null) return;

    const newScrollData = {
      scrollHeigth: el.scrollHeight,
      clientHeigth: el.clientHeight,
      clientWidth: el.clientWidth,
    };

    if (newScrollData == scrollData.value) return;

    const scrollAbs = el.clientHeight + el.scrollTop;
    const scrollRel = scrollAbs / el.scrollHeight;
    if (scrollRel > 0.85) {
      scrollData.value = newScrollData;
      count.value = Math.min(total, count.value + 60);
    }
  });

  useOnDocument(
    'scroll',
    $((e) => {
      const doc = e.target as Document;
      bumpCount(doc);
    }),
  );

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    bumpCount(document);
  });

  useOnWindow(
    'resize',
    $(() => {
      bumpCount(document);
    }),
  );

  return (
    <div class={'mx-auto w-full max-w-7xl'}>
      <Search
        placeholder={'Search logs'}
        hidden={false}
        disabled={false}
        fuzzy={{ id: searchId, keys: ['description', 'timestamp'], data: data }}
        onKeyUp$={(value: string) => {
          if (value.trim().length == 0) {
            filteredData.value = data;
          } else {
            filteredData.value = searchFuzzyLibrary(searchId, value) ?? data;
          }
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
        {filteredData.value
          .slice(0, count.value)
          ?.map((item) => (
            <Cell
              key={item.id}
              multilineLabel={item.description}
              label={new Date(item.timestamp)
                .toLocaleString()
                .replace(', ', ' ')}
              url={getUrl(item)}
            />
          ))}
      </div>
    </div>
  );
});
