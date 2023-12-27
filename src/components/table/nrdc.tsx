import { component$ } from '@builder.io/qwik';
import type { ComboNrDc } from '~/@types/uecapabilityparser';

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
  combos?: ComboNrDc[];
  title?: string;
}

export default component$((props: Props) => {
  const { combos, title } = props;

  if (combos === undefined || combos.length == 0) {
    return <></>;
  }

  const headers = [
    'FR1 DL',
    'FR1 MIMO DL',
    'FR1 MOD DL (QAM)',
    'FR1 SCS DL (kHz)',
    'FR1 BW DL (MHz)',
    'FR2 DL',
    'FR2 MIMO DL',
    'FR2 MOD DL (QAM)',
    'FR2 SCS DL (kHz)',
    'FR2 BW DL (MHz)',
    'FR1 UL',
    'FR1 MIMO UL',
    'FR1 MOD UL (QAM)',
    'FR1 SCS UL (kHz)',
    'FR1 BW UL (MHz)',
    'FR2 UL',
    'FR2 MIMO UL',
    'FR2 MOD UL (QAM)',
    'FR2 SCS UL (kHz)',
    'FR2 BW UL (MHz)',
    'BCS',
  ];

  const data: string[][] = [];
  for (let i = 0; i < headers.length; i++) {
    data.push([]);
  }

  combos.forEach(({ componentsFr1, componentsFr2, bcs }) => {
    let i = 0;
    const fr1Fr2 = [componentsFr1, componentsFr2];
    fr1Fr2.forEach((components) => {
      data[i++].push(componentsDlToStr(components, true));
      data[i++].push(componentsMimoDlToStr(components, true));
      data[i++].push(componentsModDlToStr(components, true));
      data[i++].push(componentsScsDlToStr(components));
      data[i++].push(componentsBwDlToStr(components));
    });

    fr1Fr2.forEach((components) => {
      data[i++].push(componentsUlToStr(components, true));
      data[i++].push(componentsMimoUlToStr(components, true));
      data[i++].push(componentsModUlToStr(components, true));
      data[i++].push(componentsScsUlToStr(components));
      data[i++].push(componentsBwUlToStr(components));
    });
    data[i++].push(bcsToStr(bcs));
  });

  return (
    <ComboTable
      title={title}
      hideEmpty={true}
      headers={headers}
      data={data}
      pagination={combos && combos.length > 25}
      coloredBands={true}
    />
  );
});
