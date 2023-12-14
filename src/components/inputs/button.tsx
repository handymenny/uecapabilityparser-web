import { component$ } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';
interface Props {
  label?: string;
  type: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  hidden?: boolean;
  onClick$?: PropFunction<() => void>;
}

export default component$((props: Props) => {
  const { label, type, disabled, onClick$, hidden } = props;
  return (
    <div class={'flex flex-grow basis-0 flex-col' + (hidden ? ' hidden' : '')}>
      <button
        type={type}
        class="my-2 w-full flex-grow bg-black p-2 text-lg text-white focus:outline-none focus:ring focus:ring-gray-400 disabled:bg-gray-300 disabled:text-gray-400 disabled:opacity-70"
        disabled={disabled}
        // eslint-disable-next-line qwik/valid-lexical-scope
        onClick$={onClick$}
        preventdefault:click={onClick$ != null}
      >
        {label}
      </button>
    </div>
  );
});
