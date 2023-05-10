import { component$ } from '@builder.io/qwik';
import type { BandNrDetails } from '~/@types/uecapabilityparser';

import {
  modulationToStr,
  bwsDlToStr,
  bwsUlToStr,
  mimoToStr,
} from '~/helpers/bands';
import ComboTable from '~/components/table/combo-table';
interface Props {
  bands?: BandNrDetails[];
  title?: string;
}

export default component$(({ bands, title }: Props) => {
  if (bands === undefined || bands.length == 0) {
    return <></>;
  }

  const headers = [
    'Band',
    'MIMO DL',
    'MOD DL',
    'BWs DL (MHz)',
    'MIMO UL',
    'MOD UL',
    'BWs UL (MHz)',
    'Power Class',
    'DSS',
  ];

  const data: string[][] = [];
  for (let i = 0; i < headers.length; i++) {
    data.push([]);
  }

  bands.map((band) => {
    let i = 0;
    data[i++].push(band.band.toString());
    data[i++].push(mimoToStr(band.mimoDl));
    data[i++].push(modulationToStr(band.modulationDl));
    data[i++].push(bwsDlToStr(band.bandwidths).join('\n'));
    data[i++].push(mimoToStr(band.mimoUl));
    data[i++].push(modulationToStr(band.modulationUl));
    data[i++].push(bwsUlToStr(band.bandwidths).join('\n'));
    data[i++].push(band.powerClass?.toString() ?? '3');
    data[i++].push(band.rateMatchingLteCrs === true ? 'True' : 'False');
  });

  return (
    <ComboTable title={title} hideEmpty={true} headers={headers} data={data} />
  );
});
