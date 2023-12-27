import { component$, useSignal, useComputed$ } from '@builder.io/qwik';
import Pagination from './pagination';
interface Props {
  title?: string;
  headers: string[];
  data: string[][];
  hideEmpty: boolean;
  noSpoiler?: boolean;
}

export default component$((props: Props) => {
  const getEmptyColumns = () => {
    return data.map((col) =>
      col.every((cell) => cell === '' || cell === undefined),
    );
  };
  const { title, headers, data, hideEmpty, noSpoiler } = props;
  const emptyColumns = hideEmpty ? getEmptyColumns() : [];
  const totalCombos = useComputed$(() => data[0].length);
  const combosPerPage = useSignal<number>(50);
  const selectedPage = useSignal<number>(1);
  const totalPages = useComputed$(() =>
    Math.ceil(totalCombos.value / combosPerPage.value),
  );

  const range = useComputed$(() => {
    const selPage = selectedPage.value;
    const combPage = combosPerPage.value;
    const totalcomb = totalCombos.value;
    return {
      start: (selPage - 1) * combPage,
      end: Math.min(totalcomb, selPage * combPage),
    };
  });

  const table = (
    <>
      <Pagination
        totalPages={totalPages}
        selectedPage={selectedPage}
        combosPerPage={combosPerPage}
        onPageChange$={(page: number) => {
          selectedPage.value = page;
        }}
        onCombosPerPageChange$={(combos: number) => {
          combosPerPage.value = combos == -1 ? totalCombos.value : combos;
          selectedPage.value = 1;
        }}
      />
      <table class="w-full table-auto border-collapse border border-gray-500 text-left">
        <thead>
          <tr>
            {headers.map(
              (header, columnIndex) =>
                !emptyColumns[columnIndex] && (
                  <th
                    class="min-w-[5rem] border-collapse border border-gray-500 p-1.5"
                    key={columnIndex}
                  >
                    {header}
                  </th>
                ),
            )}
          </tr>
        </thead>
        <tbody class="whitespace-pre align-text-top">
          {[...Array(range.value.end - range.value.start).keys()].map(
            (rowIndex) => (
              <tr key={rowIndex + range.value.start}>
                {data.map(
                  (column, columnIndex) =>
                    !emptyColumns[columnIndex] && (
                      <td
                        class="border-collapse border border-gray-500 p-1.5"
                        key={rowIndex + range.value.start + '-' + columnIndex}
                      >
                        {column[rowIndex + range.value.start]}
                      </td>
                    ),
                )}
              </tr>
            ),
          )}
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
