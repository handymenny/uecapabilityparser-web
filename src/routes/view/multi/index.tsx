import {
  $,
  Resource,
  component$,
  useResource$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
import type { MultiCapabilities } from '~/@types/uecapabilityparser';
import axios from 'axios';
import MulticapabilityView from '~/components/viewer/multicapability-view';
import CircleSpinner from '~/components/spinner/circle-spinner';
import Title from '~/components/header/title';

export default component$(() => {
  const location = useLocation();
  const id = useSignal<string | undefined>(undefined);

  const getCapabilities = $(async (id: string) => {
    const url = import.meta.env.PUBLIC_STORE_ENDPOINT;
    const outputUrl = url + 'getMultiOutput';
    try {
      const result = await axios.get(outputUrl, { params: { id: id } });
      const multiCap = result.data as MultiCapabilities;
      return multiCap;
    } catch (err) {
      console.error(err);
      alert(err);
      throw err;
    }
  });

  const resultData = useResource$(({ track }) => {
    const capId = track(() => id.value);
    if (capId == undefined) {
      return undefined;
    } else {
      return getCapabilities(capId);
    }
  });

  useVisibleTask$(
    () => {
      id.value =
        location.url.searchParams.get('id') ??
        new URLSearchParams(window?.location.search).get('id') ??
        '';
    },
    { strategy: 'document-ready' },
  );

  const spinner = <CircleSpinner centered={true} />;

  return (
    <>
      <Title text="View" />
      <div class={'flex flex-1 flex-col'}>
        <Resource
          value={resultData}
          onPending={() => spinner}
          onResolved={(data) => {
            if (data == null) {
              return spinner;
            } else {
              return (
                <MulticapabilityView
                  capabilitiesList={data.capabilitiesList ?? []}
                />
              );
            }
          }}
        />
      </div>
    </>
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
