import { component$ } from '@builder.io/qwik';
import type { Component, PropFunction } from '@builder.io/qwik';
import type { IconProps } from 'qwik-feather-icons';

interface Props {
  label?: string;
  Icon: Component<IconProps>;
  type: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  hidden?: boolean;
  onClick$?: PropFunction<() => void>;
}

export default component$((props: Props) => {
  const { label, type, disabled, onClick$, hidden, Icon } = props;
  return (
    <div
      class={
        'flex flex-grow basis-0 flex-col-reverse' + (hidden ? ' hidden' : '')
      }
    >
      <button
        type={type}
        class={`appearance-none p-[5.6px] focus:outline-none focus:ring focus:ring-gray-400 disabled:bg-gray-300 disabled:opacity-70`}
        disabled={disabled}
        // eslint-disable-next-line qwik/valid-lexical-scope
        onClick$={onClick$}
        aria-label={label}
        aria-hidden={hidden}
        preventdefault:click={onClick$ != null}
      >
        <Icon size={32} strokeWidth={1.2} />
      </button>
    </div>
  );
});
