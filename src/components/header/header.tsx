import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header class="flex justify-between bg-black px-5 py-2">
      <a class="text-xl text-white" href="/" title="UE Capability Parser">
        UE Capability Parser
      </a>
      <a
        class="text-xl text-white"
        href="https://github.com/HandyMenny"
        target="_blank"
      >
        by handymenny
      </a>
    </header>
  );
});
