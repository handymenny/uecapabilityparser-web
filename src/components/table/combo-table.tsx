import { component$ } from '@builder.io/qwik';
interface Props {
  title?: string;
  headers: string[];
  data: string[][];
  hideEmpty: boolean;
}

export default component$((props: Props) => {
  const { title, headers, data, hideEmpty } = props;
  const emptyColumns = data.map((column) => {
    return column.every((cell) => cell === '');
  });

  return (
    <details open={true}>
      <summary class="mt-10 text-xl font-bold">{title}</summary>
      <table class="w-full table-auto border-collapse border border-gray-500 text-left">
        <thead>
          <tr>
            {headers.map((header, columnIndex) => (
              <>
                {!(hideEmpty && emptyColumns[columnIndex]) && (
                  <th
                    class="min-w-[5rem] border-collapse border border-gray-500 p-1.5"
                    key={columnIndex}
                  >
                    {header}
                  </th>
                )}
              </>
            ))}
          </tr>
        </thead>
        <tbody class="whitespace-pre-line align-text-top">
          {data[0].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {data.map((column, columnIndex) => (
                <>
                  {!(hideEmpty && emptyColumns[columnIndex]) && (
                    <td
                      class="border-collapse border border-gray-500 p-1.5"
                      key={rowIndex + columnIndex}
                    >
                      {column[rowIndex]}
                    </td>
                  )}
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
});
