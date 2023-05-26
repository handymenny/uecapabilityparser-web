import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import LibraryGrid from '~/components/grid/libraryGrid';

export default component$(() => {
  return <LibraryGrid />;
});

export const head: DocumentHead = {
  title: 'Library - UE Capability Parser Web',
  meta: [
    {
      name: 'description',
      content: 'Library - UE Capability Parser Web',
    },
  ],
};
