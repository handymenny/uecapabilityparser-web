import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import type { Capabilities } from '~/@types/uecapabilityparser';
import axios from 'axios';
import MulticapabilityView from '~/components/viewer/multicapability-view';

export default component$(() => {
  const location = useLocation();
  const resultData: { value?: Capabilities } = useStore({
    value: undefined,
  });

  const getCapabilities = $(async (id: string) => {
    const url = import.meta.env.PUBLIC_STORE_ENDPOINT;
    const outputUrl = url + 'getOutput';
    try {
      const result = await axios.get(outputUrl, { params: { id: id } });
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
        '',
    );
  });

  return (
    <MulticapabilityView
      capabilitiesList={
        resultData.value != null ? [resultData.value] : undefined
      }
    />
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
