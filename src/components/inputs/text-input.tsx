import { component$, useId } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';

interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onInput?: PropFunction<(value: string) => void>;
  name?: string;
  disabled?: boolean;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { label, placeholder, value, onInput, name, disabled, hidden } = props;
  const randId = useId();
  const id = `text-input-${randId}`;
  const hiddenCssClass = hidden ? 'hidden' : '';

  return (
    <div class="relative flex flex-col">
      <label for={id} aria-label={label} class={`my-2 ${hiddenCssClass}`}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        oninput$={(_, currentTarget) => {
          onInput && onInput(currentTarget.value);
        }}
        class={`appearance-none border-2 border-solid border-gray-500 bg-white p-2 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-gray-400 disabled:bg-gray-300 disabled:opacity-70 ${hiddenCssClass}`}
        name={name}
        disabled={disabled}
      />
    </div>
  );
});
