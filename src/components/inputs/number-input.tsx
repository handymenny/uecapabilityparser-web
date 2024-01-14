import { component$, useId } from '@builder.io/qwik';

interface Props {
  label?: string;
  placeholder?: string;
  value?: number;
  name?: string;
  disabled?: boolean;
  hidden?: boolean;
  min?: number;
}

export default component$((props: Props) => {
  const { label, placeholder, value, name, disabled, hidden, min } = props;
  const randId = useId();
  const id = `number-input-${randId}`;
  const hiddenCssClass = hidden ? 'hidden' : '';

  return (
    <div class="relative flex flex-col">
      <label for={id} aria-label={label} class={`my-2 ${hiddenCssClass}`}>
        {label}
      </label>
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        value={value}
        class={`appearance-none border-2 border-solid border-gray-500 bg-white p-2 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-gray-400 disabled:bg-gray-300 disabled:opacity-70 ${hiddenCssClass}`}
        name={name}
        disabled={disabled}
        min={min}
      />
    </div>
  );
});
