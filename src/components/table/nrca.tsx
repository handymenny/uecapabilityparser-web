import { component$ } from '@builder.io/qwik';
import type { ComboNr } from '~/@types/uecapabilityparser';

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
  combos?: ComboNr[];
  title?: string;
}

export default component$((props: Props) => {
  const { combos, title } = props;

  if (combos === undefined || combos.length == 0) {
    return <></>;
  }

  const headers = [
    'NR DL',
    'MIMO DL',
    'MOD DL (QAM)',
    'SCS DL (kHz)',
    'BW DL (MHz)',
    'NR UL',
    'MIMO UL',
    'MOD UL (QAM)',
    'SCS UL (kHz)',
    'BW UL (MHz)',
    'BCS',
  ];

  const data: string[][] = [];
  for (let i = 0; i < headers.length; i++) {
    data.push([]);
  }

  combos.forEach(({ components, bcs }) => {
    let i = 0;
    data[i++].push(componentsDlToStr(components, true));
    data[i++].push(componentsMimoDlToStr(components, true));
    data[i++].push(componentsModDlToStr(components, true));
    data[i++].push(componentsScsDlToStr(components));
    data[i++].push(componentsBwDlToStr(components));
    data[i++].push(componentsUlToStr(components, true));
    data[i++].push(componentsMimoUlToStr(components, true));
    data[i++].push(componentsModUlToStr(components, true));
    data[i++].push(componentsScsUlToStr(components));
    data[i++].push(componentsBwUlToStr(components));
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
