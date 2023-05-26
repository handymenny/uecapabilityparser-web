import { $, component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CircleSpinner from '~/components/spinner/circle-spinner';
import axios from 'axios';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
  const nav = useNavigate();

  const getList = $(async () => {
    const url = import.meta.env.PUBLIC_STORE_ENDPOINT + 'status';

    try {
      const response = await axios.get(url);
      if (response.data.enabled) {
        nav('/library');
      } else {
        nav('/parser');
      }
    } catch (err) {
      console.error(err);
      nav('/parser');
    }
  });

  useVisibleTask$(() => {
    getList();
  });

  return (
    <>
      <h1 class="mb-4 text-center text-4xl font-semibold opacity-0">
        Loading...
      </h1>
      <div class="flex flex-1 flex-col items-center justify-center">
        <CircleSpinner />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'UE Capability Parser Web',
  meta: [
    {
      name: 'description',
      content: 'UE Capability Parser Web',
    },
  ],
};
