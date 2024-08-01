import { $, component$, useComputed$, useSignal } from '@builder.io/qwik';
import type { IndexLine, Capabilities } from '~/@types/uecapabilityparser';
import CapabilityView from './capability-view';
import SelectInput from '../inputs/select-input';
import axios from 'axios';
import { logTypeToString } from '~/helpers/metadata';
import { Endpoints } from '~/helpers/endpoints';

interface Props {
  capabilitiesList: Capabilities[];
  groupDescription?: string;
}

export default component$(({ capabilitiesList, groupDescription }: Props) => {
  const currentIndex = useSignal(0);
  const currentCapabilities = useComputed$(
    () => capabilitiesList?.[currentIndex.value],
  );
  const items = useSignal<{ [key: string]: IndexLine }>({});

  const downloadItem = $(async (id: string) => {
    try {
      const itemUrl = Endpoints.STORE + 'getItem';
      const result = await axios.get(itemUrl, { params: { id: id } });
      const indexLine = result.data as IndexLine;
      items.value[id] = indexLine;
    } catch (_) {
      /* do nothing */
    }
    return items.value[id];
  });

  const inputs = useComputed$<Promise<string[] | undefined>>(async () => {
    const id = currentCapabilities.value?.id;
    if (id == undefined) return undefined;
    const result = items.value[id] ?? (await downloadItem(id));
    return result?.inputs;
  });

  const capabilitiesSelector: any[] = [];

  const descriptions =
    capabilitiesList
      ?.map((value) => value.metadata.description ?? '')
      .filter((value) => value.length > 0) ?? [];
  const descriptionsAlldifferent =
    new Set(descriptions).size == capabilitiesList?.length;
  const types = capabilitiesList?.map((values) => values.logType) ?? [];
  const typesAlldifferent = new Set(types).size == types.length;

  capabilitiesList?.map((value, index) => {
    capabilitiesSelector.push({
      label: descriptionsAlldifferent
        ? value.metadata.description
        : typesAlldifferent
          ? logTypeToString(value.logType)
          : value.id,
      value: index,
    });
  });

  // set group Description
  capabilitiesList?.forEach(
    (cap) => (cap.metadata.groupDescription = groupDescription ?? ''),
  );

  return (
    <>
      <div
        class={
          'mb-4 flex flex-col ' +
          (capabilitiesSelector.length < 2 ? 'hidden' : '')
        }
      >
        <div class="mx-auto w-full max-w-7xl">
          <SelectInput
            label="Select log"
            options={capabilitiesSelector}
            onInput$={async (value) => {
              const index = Number.parseInt(value);
              currentIndex.value = index;
            }}
          />
        </div>
      </div>
      <CapabilityView
        capabilities={currentCapabilities.value}
        inputs={inputs.value}
      />
    </>
  );
});
