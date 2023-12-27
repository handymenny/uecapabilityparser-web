import { component$ } from '@builder.io/qwik';
import type { ComboLte } from '~/@types/uecapabilityparser';

import {
  componentsDlToStr,
  componentsUlToStr,
  componentsMimoDlToStr,
  componentsMimoUlToStr,
  componentsModDlToStr,
  componentsModUlToStr,
  bcsToStr,
} from '~/helpers/combos';
import ComboTable from '~/components/table/combo-table';
interface Props {
  combos?: ComboLte[];
  title?: string;
  noSpoiler?: boolean;
}

export default component$((props: Props) => {
  const { combos, title, noSpoiler } = props;

  if (combos === undefined || combos.length == 0) {
    return <></>;
  }

  const headers = [
    'LTE DL',
    'MIMO DL',
    'Mod DL (QAM)',
    'LTE UL',
    'MIMO UL',
    'Mod UL (QAM)',
    'BCS',
  ];

  const data: string[][] = [];
  for (let i = 0; i < headers.length; i++) {
    data.push([]);
  }

  combos.forEach(({ components, bcs }) => {
    let i = 0;
    data[i++].push(componentsDlToStr(components));
    data[i++].push(componentsMimoDlToStr(components));
    data[i++].push(componentsModDlToStr(components));
    data[i++].push(componentsUlToStr(components));
    data[i++].push(componentsMimoUlToStr(components));
    data[i++].push(componentsModUlToStr(components));
    data[i++].push(bcsToStr(bcs));
  });

  return (
    <ComboTable
      title={title}
      hideEmpty={true}
      headers={headers}
      data={data}
      noSpoiler={noSpoiler}
      pagination={combos && combos.length > 25}
    />
  );
});
