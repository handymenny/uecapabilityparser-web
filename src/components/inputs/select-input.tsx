import { component$, useId } from '@builder.io/qwik';
import { ChevronDownIcon } from 'qwik-feather-icons';
import type { PropFunction } from '@builder.io/qwik';

interface Option {
  label: string;
  value: string;
}
interface Props {
  label?: string;
  placeholder?: string;
  options: Option[];
  onInput$?: PropFunction<(value: string) => void>;
  name?: string;
  disabled?: boolean;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { label, placeholder, options, onInput$, name, disabled, hidden } =
    props;
  const randId = useId();
  const id = `text-input-${randId}`;

  return (
    <div class={'relative flex flex-col' + (hidden ? ' hidden' : '')}>
      <label for={id} aria-label={label} class="my-2">
        {label}
      </label>
      <select
        id={id}
        placeholder={placeholder}
        onInput$={(_, currentTarget) => {
          onInput$ && onInput$(currentTarget.value);
        }}
        class="appearance-none border-2 border-solid border-gray-500 bg-white p-2 px-2.5 focus:outline-none focus:ring focus:ring-gray-400 disabled:border-gray-500 disabled:bg-gray-300"
        name={name}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        size={28}
        strokeWidth={1.3}
        color={disabled ? 'rgb(106, 112, 129)' : undefined}
        class="absolute bottom-[0.4em] right-[0.5em]"
      />
    </div>
  );
});
