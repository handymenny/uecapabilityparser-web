import { component$ } from '@builder.io/qwik';
import type { BandFilterLte } from '~/@types/uecapabilityparser';
import ComboTable from './combo-table';

interface Props {
  lteBands: BandFilterLte[];
}

export default component$(({ lteBands }: Props) => {
  const advanced = lteBands.some(
    (it) => it.bwClassDl ?? it.bwClassUl != undefined,
  );

  if (!advanced) {
    return <>{lteBands.map((x) => x.band).join(', ')}</>;
  }

  const headers = ['Band', 'Class DL', 'Class UL'];

  const data: string[][] = [];
  for (let i = 0; i < headers.length; i++) {
    data.push([]);
  }

  lteBands.forEach((lteBand) => {
    let i = 0;
    data[i++].push(lteBand.band.toString());
    data[i++].push(lteBand.bwClassDl ?? '');
    data[i++].push(lteBand.bwClassUl ?? '');
  });

  return (
    <ComboTable
      hideEmpty={true}
      headers={headers}
      data={data}
      noSpoiler={true}
    />
  );
});
