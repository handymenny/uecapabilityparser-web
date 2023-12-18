import { component$, Slot, type Signal } from '@builder.io/qwik';
import { Modal, ModalContent, ModalHeader } from '@qwik-ui/headless';
import { XIcon } from 'qwik-feather-icons';

interface Props {
  title?: string;
  show: Signal<boolean>;
}

export default component$((props: Props) => {
  return (
    <>
      <Modal
        bind:show={props.show}
        alert={true}
        class="max-w-[25rem] p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50"
      >
        <ModalHeader>
          <div class="flex justify-between">
            <h2 class="text-xl font-bold">{props.title}</h2>
            <button onClick$={() => (props.show.value = false)} class="">
              <XIcon strokeWidth={3} />
            </button>
          </div>
        </ModalHeader>
        <ModalContent class="mb-2 pt-2">
          <Slot />
        </ModalContent>
      </Modal>
    </>
  );
});
