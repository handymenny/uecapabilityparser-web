import {
  $,
  component$,
  useComputed$,
  useSignal,
  useStore,
} from '@builder.io/qwik';
import type { IndexLine, Capabilities } from '~/@types/uecapabilityparser';
import CapabilityView from './capability-view';
import SelectInput from '../inputs/select-input';
import axios from 'axios';

interface Props {
  capabilitiesList?: Capabilities[];
  hidden?: boolean;
}

export default component$(({ capabilitiesList, hidden }: Props) => {
  const currentIndex = useSignal(0);
  const currentCapabilities = useComputed$(
    () => capabilitiesList?.[currentIndex.value],
  );
  const items: { value: { [key: string]: IndexLine } } = useStore({
    value: {},
  });

  const downloadItem = $(async (id: string) => {
    try {
      const itemUrl = import.meta.env.PUBLIC_STORE_ENDPOINT + 'getItem';
      const result = await axios.get(itemUrl, { params: { id: id } });
      const indexLine = result.data as IndexLine;
      items.value[id] = indexLine;
    } catch (ignored) {
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
  capabilitiesList?.map((value, index) => {
    capabilitiesSelector.push({
      label: value.id,
      value: index,
    });
  });

  return (
    <>
      <h1
        class={
          'mb-2 text-center text-4xl font-semibold' + (hidden ? ' hidden' : '')
        }
      >
        View
      </h1>
      <div
        class={
          'mb-4 flex flex-col ' +
          (hidden || capabilitiesSelector.length < 2 ? ' hidden' : '')
        }
      >
        <div class="mx-auto w-full max-w-7xl">
          <SelectInput
            label="Select log"
            options={capabilitiesSelector}
            onInput$={(value) => {
              const index = Number.parseInt(value);
              currentIndex.value = index;
            }}
          />
        </div>
      </div>
      <CapabilityView
        capabilities={currentCapabilities.value}
        inputs={inputs.value}
        hideTitle={true}
        hidden={hidden}
      />
    </>
  );
});
