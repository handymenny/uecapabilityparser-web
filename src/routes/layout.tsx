import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header/header';

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main class="flex flex-1 flex-col justify-center p-10 py-5 sm:p-12 sm:py-6">
        <Slot />
      </main>
    </div>
  );
});
