import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SubmitForm from '~/components/form/submit-form';

export default component$(() => {
  return (
    <>
      <SubmitForm />
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
