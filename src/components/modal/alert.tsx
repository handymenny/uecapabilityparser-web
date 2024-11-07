import { component$, Slot, type Signal } from '@builder.io/qwik';
import { Modal } from '@qwik-ui/headless';
import { XIcon } from 'qwik-feather-icons';

interface Props {
  title?: string;
  show: Signal<boolean>;
}

export default component$((props: Props) => {
  return (
    <Modal.Root bind:show={props.show} alert={true} class="p-2">
      <Modal.Panel class="max-w-sm p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 sm:max-w-md lg:max-w-lg">
        <header>
          <div class="flex justify-between">
            <h2 class="text-xl font-bold">{props.title}</h2>
            <Modal.Close>
              <XIcon strokeWidth={3} />
            </Modal.Close>
          </div>
        </header>
        <div class="mb-2 pt-2">
          <Slot />
        </div>
      </Modal.Panel>
    </Modal.Root>
  );
});
