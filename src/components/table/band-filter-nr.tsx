import { component$ } from '@builder.io/qwik';
import type { BandFilterNr } from '~/@types/uecapabilityparser';
import ComboTable from './combo-table';

interface Props {
  nrBands: BandFilterNr[];
}

export default component$(({ nrBands }: Props) => {
  const advanced = nrBands.some(
    (it) => it.maxBwDl ?? it.maxBwUl ?? it.maxCCsDl ?? it.maxCCsUl != undefined,
  );

  if (!advanced) {
    return <>{nrBands.map((x) => x.band).join(', ')}</>;
  }

  const headers = ['Band', 'BW DL (MHz)', 'BW UL (MHz)', 'CCs DL', 'CCs UL'];

  const data: string[][] = [];
  for (let i = 0; i < headers.length; i++) {
    data.push([]);
  }

  nrBands.forEach((nrBand) => {
    let i = 0;
    data[i++].push(nrBand.band.toString());
    data[i++].push(nrBand.maxBwDl?.toString() ?? '');
    data[i++].push(nrBand.maxBwUl?.toString() ?? '');
    data[i++].push(nrBand.maxCCsDl?.toString() ?? '');
    data[i++].push(nrBand.maxCCsUl?.toString() ?? '');
  });

  return (
    <ComboTable
      hideEmpty={true}
      headers={headers}
      data={data}
      noSpoiler={true}
      noSearch={true}
    />
  );
});
