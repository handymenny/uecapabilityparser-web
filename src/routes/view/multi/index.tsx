import { $, component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import type { MultiCapabilities } from '~/@types/uecapabilityparser';
import axios from 'axios';
import MulticapabilityView from '~/components/viewer/multicapability-view';
import { isServer } from '@builder.io/qwik/build';

export default component$(() => {
  const location = useLocation();
  const resultData: { value?: MultiCapabilities } = useStore({
    value: undefined,
  });

  const getCapabilities = $(async (id: string) => {
    const url = import.meta.env.PUBLIC_STORE_ENDPOINT;
    const outputUrl = url + 'getMultiOutput';
    try {
      const result = await axios.get(outputUrl, { params: { id: id } });
      const multiCap = result.data as MultiCapabilities;
      resultData.value = multiCap;
    } catch (err) {
      console.error(err);
      alert(err);
    }
  });

  useVisibleTask$(() => {
    if (isServer) return;
    getCapabilities(
      location.url.searchParams.get('id') ??
        new URLSearchParams(window?.location.search).get('id') ??
        '',
    );
  });

  return (
    <MulticapabilityView
      capabilitiesList={resultData.value?.capabilitiesList}
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
