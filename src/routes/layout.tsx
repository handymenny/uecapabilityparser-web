import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main class="flex flex-1 flex-col justify-center px-10 py-4 sm:px-12">
        <Slot />
      </main>
    </div>
  );
});
