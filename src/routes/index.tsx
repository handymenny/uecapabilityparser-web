import { $, component$, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import CircleSpinner from '~/components/spinner/circle-spinner';
import { useNavigate } from '@builder.io/qwik-city';
import { StatusHelper } from '~/helpers/status';

export default component$(() => {
  const nav = useNavigate();

  const getList = $(async () => {
    try {
      const storeSupported = await StatusHelper.isStoreSuported();
      if (storeSupported) {
        nav('/library');
      } else {
        nav('/parser');
      }
    } catch (err) {
      console.error(err);
      nav('/parser');
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      getList();
    },
    { strategy: 'document-ready' },
  );

  return (
    <>
      <h1 class={'mb-2 text-center text-4xl font-semibold opacity-0'}>
        Loading...
      </h1>
      <div class={'flex flex-1 flex-col'}>
        <CircleSpinner centered={true} />
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
