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
    'Group Description',
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
  const groupDescription = cap.metadata.groupDescription;
  const data = [
    // don't show same description two times
    description == groupDescription ? undefined : groupDescription,
    description,
    logType,
    timestamp,
    parserVersion,
    processingTime,
  ];

  const exclude = [
    'description',
    'processingTime',
    'defaultNR',
    'groupDescription',
  ];
  Object.keys(cap.metadata).forEach(function (key) {
    const value = cap.metadata[key];
    if (!exclude.includes(key)) {
      header.push(keyTostring(key));
      data.push(value);
    }
  });

  const ltecaLength = cap.lteca?.length ?? 0;
  const endcLength = cap.endc?.length ?? 0;
  const nrcaLength = cap.nrca?.length ?? 0;
  const nrdcLength = cap.nrdc?.length ?? 0;

  if (ltecaLength > 0) {
    header.push('Total LTE CA Combos');
    data.push(ltecaLength.toString());
  }

  if (endcLength > 0) {
    header.push('Total ENDC Combos');
    data.push(endcLength.toString());
  }

  if (nrcaLength > 0) {
    header.push('Total NR CA Combos');
    data.push(nrcaLength.toString());
  }

  if (nrdcLength > 0) {
    header.push('Total NRDC Combos');
    data.push(nrdcLength.toString());
  }

  return (
    <details open={true}>
      <summary class="mt-10 text-xl font-bold">{title}</summary>
      <table class="w-full table-auto border-collapse border border-gray-500 text-left">
        <tbody class="whitespace-pre align-text-top">
          {data.map(
            (value, index) =>
              value != undefined &&
              value.length > 0 && (
                <tr key={index}>
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
