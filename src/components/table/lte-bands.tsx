import { component$ } from '@builder.io/qwik';
import type { BandLteDetails } from '~/@types/uecapabilityparser';

import { modulationToStr, mimoToStr } from '~/helpers/bands';
import ComboTable from '~/components/table/combo-table';
interface Props {
  bands?: BandLteDetails[];
  title?: string;
}

export default component$(({ bands, title }: Props) => {
  if (bands === undefined || bands.length == 0) {
    return <></>;
  }

  const headers = ['Band', 'MIMO DL', 'MOD DL', 'MIMO UL', 'MOD UL'];

  const data: string[][] = [];
  for (let i = 0; i < headers.length; i++) {
    data.push([]);
  }

  bands.forEach((band) => {
    let i = 0;
    data[i++].push(band.band.toString());
    data[i++].push(mimoToStr(band.mimoDl));
    data[i++].push(modulationToStr(band.modulationDl));
    data[i++].push(mimoToStr(band.mimoUl));
    data[i++].push(modulationToStr(band.modulationUl));
  });

  return (
    <ComboTable title={title} hideEmpty={true} headers={headers} data={data} />
  );
});
