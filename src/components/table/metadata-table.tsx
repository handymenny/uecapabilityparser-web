import { component$ } from '@builder.io/qwik';
import type { Capabilities } from '~/@types/uecapabilityparser';
import { keyTostring, logTypeToString } from '~/helpers/metadata';

interface Props {
  cap?: Capabilities;
  title?: string;
}

export default component$(({ cap, title }: Props) => {
  if (cap === undefined || cap.parserVersion === undefined) {
    return <></>;
  }

  const header = [
    'Description',
    'Log Type',
    'Upload Date',
    'Parser Version',
    'Processing time',
  ];
  const logType = logTypeToString(cap.logType);
  const parserVersion = cap.parserVersion;
  const timestamp = new Date(cap.timestamp).toLocaleString().replace(', ', ' ');
  const description = cap.metadata.description;
  const processingTime = cap.metadata.processingTime;
  const data = [description, logType, timestamp, parserVersion, processingTime];

  Object.keys(cap.metadata).forEach(function (key) {
    const value = cap.metadata[key];
    if (key != 'description' && key != 'processingTime') {
      header.push(keyTostring(key));
      data.push(value);
    }
  });

  return (
    <details open={true}>
      <summary class="mt-10 text-xl font-bold">{title}</summary>
      <table class="w-full table-auto border-collapse border border-gray-500 text-left">
        <tbody class="whitespace-pre align-text-top">
          {data.map(
            (value, index) =>
              value != undefined && (
                <tr key="index">
                  <th class="border-collapse border border-gray-500 p-1.5">
                    {header[index]}
                  </th>
                  <td class="border-collapse border border-gray-500 p-1.5">
                    {value}
                  </td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </details>
  );
});
