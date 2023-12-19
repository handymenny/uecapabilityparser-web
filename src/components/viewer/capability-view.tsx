import { $, component$ } from '@builder.io/qwik';
import Button from '~/components/inputs/button';
import Other from '~/components/table/other';
import LteBands from '~/components/table/lte-bands';
import NrBands from '~/components/table/nr-bands';
import Lteca from '~/components/table/lteca';
import Endc from '~/components/table/endc';
import Nrca from '~/components/table/nrca';
import Nrdc from '~/components/table/nrdc';
import { type Capabilities } from '~/@types/uecapabilityparser';
import axios from 'axios';
import Filters from '../table/filters';
import MetadataTable from '../table/metadata-table';
import { Endpoints } from '~/helpers/endpoints';
import { AlertException } from '~/helpers/alert';

interface Props {
  capabilities: Capabilities;
  inputs?: string[];
}

type CombosTypes = 'lteca' | 'endc' | 'nrca' | 'nrdc';

export default component$(({ capabilities, inputs }: Props) => {
  const csvButtons: {
    label: string;
    type: CombosTypes;
  }[] = [
    { label: 'Download LTE CA CSV', type: 'lteca' },
    { label: 'Download EN DC CSV', type: 'endc' },
    { label: 'Download NR CA CSV', type: 'nrca' },
    { label: 'Download NR DC CSV', type: 'nrdc' },
  ];

  const saveAs = $((blob: Blob, name: string) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        const anchor = document.createElementNS(
          'http://www.w3.org/1999/xhtml',
          'a',
        ) as HTMLAnchorElement;
        anchor.download = name;
        anchor.href = base64;
        anchor.dispatchEvent(new MouseEvent('click'));
        resolve(true);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  });

  const downloadCsv = $(async (type: CombosTypes) => {
    const data = {
      type: type,
      input: capabilities?.[type],
      newCsvFormat: true,
    };
    const url = Endpoints.CSV;
    try {
      const response = await axios.post(url, data, { responseType: 'blob' });

      const headers = response.headers;
      const fileName = headers['content-disposition']?.split('filename=')[1];
      await saveAs(response.data, fileName ?? 'unknown');
    } catch (err: any) {
      throw new AlertException(err);
    }
  });

  const downloadInput = $((item: string) => {
    const url = Endpoints.STORE + 'getInput';
    location.href = `${url}/?id=${item}`;
  });

  return (
    <>
      <div class={'flex flex-1 flex-col'}>
        <div
          class={
            'mx-auto grid w-full max-w-7xl grid-cols-3 gap-x-5 gap-y-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7'
          }
        >
          {csvButtons.map(({ label, type }) => (
            <Button
              key={type}
              type="button"
              label={label}
              hidden={capabilities?.[type] == null}
              onClick$={async () => {
                await downloadCsv(type);
              }}
            />
          ))}
          {inputs?.map((s) => (
            <Button
              key={s}
              type="button"
              label={
                'Download Input ' + (parseInt(s.split('-').slice(-1)[0]) + 1)
              }
              onClick$={async () => {
                await downloadInput(s);
              }}
            />
          ))}
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <MetadataTable cap={capabilities ?? undefined} title="Metadata" />
          </div>
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <Other
              cap={capabilities ?? undefined}
              title="Generic Capabilities"
            />
          </div>
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <Filters
              filters={capabilities?.ueCapFilters ?? undefined}
              title="Filters"
            />
          </div>
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <LteBands bands={capabilities?.lteBands} title="LTE Bands" />
          </div>
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <NrBands bands={capabilities?.nrBands} title="NR Bands" />
          </div>
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <Lteca combos={capabilities?.lteca} title="LTE CA Combos" />
          </div>
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <Endc combos={capabilities?.endc} title="EN-DC Combos" />
          </div>
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <Nrca combos={capabilities?.nrca} title="NR CA Combos" />
          </div>
        </div>
        <div class="mx-auto w-full max-w-7xl overflow-x-auto">
          <div class="w-full text-sm sm:w-fit sm:min-w-[32rem] md:min-w-[36rem]">
            <Nrdc combos={capabilities?.nrdc} title="NR DC Combos" />
          </div>
        </div>
      </div>
    </>
  );
});
