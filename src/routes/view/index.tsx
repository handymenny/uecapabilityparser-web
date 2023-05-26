import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import { type Capabilities } from '~/@types/uecapabilityparser';
import axios from 'axios';
import CapabilityView from '~/components/viewer/capability-view';

export default component$(() => {
  const location = useLocation();
  const resultData: { value?: Capabilities } = useStore({
    value: undefined,
  });
  const inputData: { value: string[] } = useStore({ value: [] });

  const getCapabilities = $(async (id: string) => {
    const url = import.meta.env.PUBLIC_STORE_ENDPOINT;
    const itemUrl = url + 'getItem';
    const outputUrl = url + 'getOutput';
    try {
      const item = await axios.get(itemUrl, { params: { id: id } });
      const outputId = item.data.id;
      const result = await axios.get(outputUrl, { params: { id: outputId } });
      inputData.value = item.data.inputs;
      resultData.value = result.data;
    } catch (err) {
      console.error(err);
      alert(err);
    }
  });

  useVisibleTask$(() => {
    getCapabilities(
      location.url.searchParams.get('id') ??
        new URLSearchParams(window?.location.search).get('id') ??
        ''
    );
  });

  return (
    <CapabilityView capabilities={resultData.value} inputs={inputData.value} />
  );
});

export const head: DocumentHead = {
  title: 'View - UE Capability Parser Web',
  meta: [
    {
      name: 'description',
      content: 'View - UE Capability Parser Web',
    },
  ],
};
