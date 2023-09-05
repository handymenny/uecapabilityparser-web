import { component$ } from '@builder.io/qwik';
import type { ComboEnDc } from '~/@types/uecapabilityparser';

import {
  componentsDlToStr,
  componentsUlToStr,
  componentsMimoDlToStr,
  componentsMimoUlToStr,
  componentsModDlToStr,
  componentsModUlToStr,
  componentsBwDlToStr,
  componentsBwUlToStr,
  componentsScsDlToStr,
  componentsScsUlToStr,
  bcsToStr,
} from '~/helpers/combos';
import ComboTable from '~/components/table/combo-table';
interface Props {
  combos?: ComboEnDc[];
  title?: string;
}

export default component$((props: Props) => {
  const { combos, title } = props;

  if (combos === undefined || combos.length == 0) {
    return <></>;
  }

  const headers = [
    'LTE DL',
    'LTE MIMO DL',
    'LTE MOD DL (QAM)',
    'NR DL',
    'NR MIMO DL',
    'NR MOD DL (QAM)',
    'NR SCS DL (kHz)',
    'NR BW DL (MHz)',
    'LTE UL',
    'LTE MIMO UL',
    'LTE Mod UL (QAM)',
    'NR UL',
    'NR MIMO UL',
    'NR MOD UL (QAM)',
    'NR SCS UL (kHz)',
    'NR BW UL (MHz)',
    'BCS LTE',
    'BCS NR',
    'BCS INTRA ENDC',
  ];

  const data: string[][] = [];
  for (let i = 0; i < headers.length; i++) {
    data.push([]);
  }

  combos.forEach(
    ({ componentsLte, componentsNr, bcsEutra, bcsNr, bcsIntraEndc }) => {
      let i = 0;
      data[i++].push(componentsDlToStr(componentsLte));
      data[i++].push(componentsMimoDlToStr(componentsLte));
      data[i++].push(componentsModDlToStr(componentsLte));
      data[i++].push(componentsDlToStr(componentsNr, true));
      data[i++].push(componentsMimoDlToStr(componentsNr, true));
      data[i++].push(componentsModDlToStr(componentsNr, true));
      data[i++].push(componentsScsDlToStr(componentsNr));
      data[i++].push(componentsBwDlToStr(componentsNr));
      data[i++].push(componentsUlToStr(componentsLte));
      data[i++].push(componentsMimoUlToStr(componentsLte));
      data[i++].push(componentsModUlToStr(componentsLte));
      data[i++].push(componentsUlToStr(componentsNr, true));
      data[i++].push(componentsMimoUlToStr(componentsNr, true));
      data[i++].push(componentsModUlToStr(componentsNr, true));
      data[i++].push(componentsScsUlToStr(componentsNr));
      data[i++].push(componentsBwUlToStr(componentsNr));
      data[i++].push(bcsToStr(bcsEutra));
      data[i++].push(bcsToStr(bcsNr));
      data[i++].push(bcsToStr(bcsIntraEndc));
    },
  );

  return (
    <ComboTable title={title} hideEmpty={true} headers={headers} data={data} />
  );
});
