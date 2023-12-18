import { component$, Slot, useOnWindow, $, useSignal } from '@builder.io/qwik';
import Header from '~/components/header/header';
import Alert from '~/components/modal/alert';
import { AlertException, markdownToHtml } from '~/helpers/alert';

export default component$(() => {
  const showAlert = useSignal<boolean>(false);
  const alertMessage = useSignal<string>('');
  useOnWindow(
    'unhandledrejection',
    $((e) => {
      const reason = e.reason;
      if (reason instanceof AlertException) {
        const message = reason.message;
        alertMessage.value = markdownToHtml(message);
        showAlert.value = true;
      }
    }),
  );

  return (
    <div class="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main class="flex flex-1 flex-col justify-center px-10 py-4 sm:px-12">
        <Slot />
        <Alert title="Error" show={showAlert}>
          <p dangerouslySetInnerHTML={alertMessage.value} />
        </Alert>
      </main>
    </div>
  );
});
