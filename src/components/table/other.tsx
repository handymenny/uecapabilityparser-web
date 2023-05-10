import { component$ } from '@builder.io/qwik';
import type { Capabilities } from '~/@types/uecapabilityparser';

interface Props {
  cap?: Capabilities;
  title?: string;
}

export default component$(({ cap, title }: Props) => {
  if (cap === undefined || cap.lteCategoryDl === undefined) {
    return <></>;
  }

  const { lteCategoryDl, lteCategoryUl, nrNsaBandsEutra, nrSaBandsEutra } = cap;

  return (
    <details open={true}>
      <summary class="mt-10 text-xl font-bold">{title}</summary>
      <table class="w-full table-auto border-collapse border border-gray-500 text-left">
        <tbody class="whitespace-pre align-text-top">
          <tr>
            <th class="border-collapse border border-gray-500 p-1.5">
              LTE Category (DL/UL)
            </th>
            <td class="border-collapse border border-gray-500 p-1.5">
              {lteCategoryDl} / {lteCategoryUl}
            </td>
          </tr>
          <tr>
            <th class="border-collapse border border-gray-500 p-1.5">
              NR NSA Bands (from EUTRA)
            </th>
            <td class="border-collapse border border-gray-500 p-1.5">
              {nrNsaBandsEutra !== undefined
                ? nrNsaBandsEutra?.map((x) => x.band).join(', ')
                : 'None'}
            </td>
          </tr>
          <tr>
            <th class="border-collapse border border-gray-500 p-1.5">
              NR SA Bands (from EUTRA)
            </th>
            <td class="border-collapse border border-gray-500 p-1.5">
              {nrSaBandsEutra !== undefined
                ? nrSaBandsEutra?.map((x) => x.band).join(', ')
                : 'None'}
            </td>
          </tr>
        </tbody>
      </table>
    </details>
  );
});
