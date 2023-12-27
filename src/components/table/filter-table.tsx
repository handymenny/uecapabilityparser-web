import { component$ } from '@builder.io/qwik';
import BandFilterLte from './band-filter-lte';
import BandFilterNr from './band-filter-nr';
import type { IUeCapabilityFilter } from '~/@types/uecapabilityparser';
import Lteca from './lteca';

interface Props {
  filter: IUeCapabilityFilter;
}

export default component$(({ filter }: Props) => {
  if (filter === undefined) {
    return <></>;
  }

  const rat = filter.rat.replace('_', ' ');

  let data: any[];
  let header: string[];
  if (filter.type == 'UeCapabilityFilterLte') {
    header = [
      'Requested LTE bands',
      'Reduced Format',
      'Reduce intra-band\nnon-contiguous combos',
      'Skip fallback combos',
      'Diff fallback combos',
      'Max CCs DL',
      'Max CCs UL',
      'Include NR-DC',
      'Include NE-DC',
      'Omit EN-DC',
      'Include UL Tx switching',
      'Segmentation Allowed',
    ];
    data = [
      filter.lteBands?.map((x) => x.band).join(', '),
      filter.reducedFormat ? 'True' : undefined,
      filter.reducedIntNonContComb ? 'True' : undefined,
      filter.skipFallbackCombRequested ? 'True' : undefined,
      filter.diffFallbackCombList ? (
        <Lteca
          noPagination={true}
          noSpoiler={true}
          combos={filter.diffFallbackCombList}
        />
      ) : undefined,
      filter.maxCCsDl?.toString(),
      filter.maxCCsUl?.toString(),
      filter.includeNrDc ? 'True' : undefined,
      filter.includeNeDc ? 'True' : undefined,
      filter.omitEnDc ? 'True' : undefined,
      filter.uplinkTxSwitchRequest ? 'True' : undefined,
      filter.segAllowed ? 'True' : undefined,
    ];
  } else {
    header = [
      'Requested LTE bands',
      'Requested NR bands',
      'Eutra NR only',
      'Include NR-DC',
      'Include NE-DC',
      'Omit EN-DC',
      'Include UL Tx switching',
      'Segmentation Allowed',
    ];
    data = [
      filter.lteBands ? (
        <BandFilterLte lteBands={filter.lteBands} />
      ) : undefined,
      filter.nrBands ? <BandFilterNr nrBands={filter.nrBands} /> : undefined,
      filter.eutraNrOnly ? 'True' : undefined,
      filter.includeNrDc ? 'True' : undefined,
      filter.includeNeDc ? 'True' : undefined,
      filter.omitEnDc ? 'True' : undefined,
      filter.uplinkTxSwitchRequest ? 'True' : undefined,
      filter.segAllowed ? 'True' : undefined,
    ];
  }

  if (data.every((x) => x == undefined)) {
    return (
      <details open={true} class="ml-3">
        <summary class="mt-5 text-[1.2rem]/7 font-bold">Rat: {rat}</summary>
        <span>No known filter present.</span>
      </details>
    );
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
