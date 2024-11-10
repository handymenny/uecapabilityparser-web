import {
  component$,
  useSignal,
  useComputed$,
  useStore,
} from '@builder.io/qwik';
import Pagination from './pagination';
import Button from '../inputs/button';
interface Props {
  title?: string;
  headers: string[];
  data: string[][];
  hideEmpty: boolean;
  noSpoiler?: boolean;
  pagination?: boolean;
  coloredBands?: boolean;
  noSearch?: boolean;
}

export default component$((props: Props) => {
  const getEmptyColumns = () => {
    return data.map((col) =>
      col.every((cell) => cell === '' || cell === undefined),
    );
  };
  const { title, headers, data, hideEmpty, noSpoiler, pagination, noSearch } =
    props;
  const emptyColumns = hideEmpty ? getEmptyColumns() : [];

  const columnsIds = [...data.keys()];
  const filters = useStore<string[]>(columnsIds.map(() => ''));
  const validIds = useComputed$(() => {
    const filterArray = filters;
    const validIds = [...data[0].keys()].map((rowId) => {
      const res = columnsIds.every((colId) => {
        const valueToSearch = filterArray[colId];
        if (valueToSearch == '') {
          return true;
        } else {
          const value = data[colId][rowId].replace(
            /(?:<span .*?>)|(?:<\/span>)|\s/g,
            '',
          );
          return value.toUpperCase().includes(valueToSearch);
        }
      });
      if (res) return rowId;
    });
    return validIds.filter((it) => it !== undefined) as number[];
  });

  const totalCombos = useComputed$(() => validIds.value.length);
  const combosPerPage = useSignal<number>(50);
  const selectedPage = useSignal<number>(1);

  const totalPages = useComputed$(() => {
    const total = Math.max(
      1,
      Math.ceil(totalCombos.value / combosPerPage.value),
    );
    selectedPage.value = 1;
    return total;
  });

  const range = useComputed$(() => {
    const selPage = selectedPage.value;
    const totalcomb = totalCombos.value;
    const combPage =
      !pagination || combosPerPage.value == -1
        ? totalcomb
        : combosPerPage.value;

    return {
      start: Math.max(0, Math.min(totalcomb, (selPage - 1) * combPage)),
      end: Math.min(totalcomb, selPage * combPage),
    };
  });

  const monoChrome = useSignal<boolean>(props.coloredBands == false);
  const monoChromeCss = monoChrome.value ? ' monochrome-bands' : '';

  const table = (
    <>
      <div class="flex max-w-full flex-wrap justify-around gap-x-5 sm:justify-between">
        {props.coloredBands && (
          <div class={'min-w-full px-2 lg:min-w-52' + monoChromeCss}>
            <Button
              type="button"
              label={monoChrome.value ? 'Colored bands' : 'Monochrome bands'}
              onClick$={async () => {
                monoChrome.value = !monoChrome.value;
              }}
            />
          </div>
        )}
        {pagination && (
          <Pagination
            totalPages={totalPages}
            selectedPage={selectedPage}
            combosPerPage={combosPerPage}
            onPageChange$={async (page: number) => {
              if (page > 0 && page <= totalPages.value) {
                selectedPage.value = page;
              } else {
                selectedPage.value = 1;
              }
            }}
            onCombosPerPageChange$={async (combos: number) => {
              combosPerPage.value = combos;
              selectedPage.value = 1;
            }}
          />
        )}
      </div>
      <table
        class={
          'w-full table-auto border-collapse border border-gray-500 text-left' +
          monoChromeCss
        }
      >
        <thead>
          <tr>
            {headers.map(
              (header, columnIndex) =>
                !emptyColumns[columnIndex] && (
                  <th
                    class="min-w-[5rem] border-collapse border border-gray-500 p-1.5 align-bottom"
                    key={columnIndex}
                  >
                    {header}
                    {!noSearch && (
                      <input
                        onKeyUp$={(_, ex) => {
                          filters[columnIndex] = ex.value
                            .replace(/\s/g, '')
                            .toUpperCase()
                            .trim();
                        }}
                        class="float-bottom mt-1 w-full appearance-none border border-solid border-gray-500 bg-white font-normal placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                      />
                    )}
                  </th>
                ),
            )}
          </tr>
        </thead>
        <tbody class="whitespace-pre align-text-top">
          {validIds.value
            .slice(range.value.start, range.value.end)
            .map((rowIndex) => (
              <tr key={rowIndex}>
                {data.map(
                  (column, columnIndex) =>
                    !emptyColumns[columnIndex] && (
                      <td
                        class="border-collapse border border-gray-500 p-1.5"
                        key={rowIndex + '-' + columnIndex}
                        dangerouslySetInnerHTML={column[rowIndex]}
                      />
                    ),
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );

  if (noSpoiler) {
    return table;
  } else {
    return (
      <details open={false}>
        <summary class="mt-10 text-xl font-bold">{title}</summary>
        {table}
      </details>
    );
  }
});
