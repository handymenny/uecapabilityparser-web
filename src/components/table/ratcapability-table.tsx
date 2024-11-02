import { component$ } from '@builder.io/qwik';
import type {
  Capabilities,
  IRatCapabilities,
} from '~/@types/uecapabilityparser';

interface Props {
  ratCapability: IRatCapabilities;
  fullCap: Capabilities;
}

export default component$(({ ratCapability, fullCap }: Props) => {
  const rat = ratCapability.rat.replace('_', ' ');
  let data: any[];
  let header: string[];

  let segmentationStatus;
  if (ratCapability.ueCapSegmentationSupported) {
    segmentationStatus = 'Supported';
  } else if (ratCapability.release === 16) {
    segmentationStatus = 'Supported or Not Supported';
  } else if (ratCapability.release === undefined) {
    segmentationStatus = 'Unknown';
  } else {
    segmentationStatus = 'Not Supported';
  }

  if (ratCapability.type == 'RatCapabilitiesLte') {
    const {
      lteCategoryDl,
      lteCategoryUl,
      nrNsaBandsEutra,
      nrSaBandsEutra,
      altTbsIndexes,
    } = fullCap;

    header = [
      'RRC Release',
      'LTE Category (DL/UL)',
      'Alternative TBS Indexes',
      'NR NSA Bands (I-RAT)',
      'NR SA Bands (I-RAT)',
      'UE Cap Segmentation',
    ];
    data = [
      ratCapability.release ?? 'Unknown',
      `${lteCategoryDl} / ${lteCategoryUl}`,
      altTbsIndexes?.join(', ')?.replace('33b', '33b/256qam+') ?? 'None',
      nrNsaBandsEutra?.map((x) => x.band).join(', ') ?? 'None',
      nrSaBandsEutra?.map((x) => x.band).join(', ') ?? 'None',
      segmentationStatus,
    ];
  } else {
    header = ['RRC Release', 'UE Type', 'UE Cap Segmentation'];
    data = [
      ratCapability.release ?? 'Unknown',
      ratCapability.ueType?.replace('_', ' ') ?? 'eMBB',
      segmentationStatus,
    ];
  }

  return (
    <details open={true} class="ml-3">
      <summary class="mt-5 text-[1.2rem]/7 font-bold">Rat: {rat}</summary>
      <table class="w-full table-auto border-collapse border border-gray-500 text-left">
        <tbody class="whitespace-pre align-text-top">
          {data.map(
            (value, index) =>
              value != undefined && (
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
