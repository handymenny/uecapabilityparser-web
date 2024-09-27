import { component$, useId } from '@builder.io/qwik';
import { ChevronDownIcon } from 'qwik-feather-icons';
import type { PropFunction } from '@builder.io/qwik';

interface Option {
  label: string;
  value: string;
}
interface Props {
  label?: string;
  options: Option[];
  onInput$?: PropFunction<(value: string) => void>;
  name?: string;
  disabled?: boolean;
  hidden?: boolean;
  selectedValue?: string;
  class?: string;
  selectClass?: string;
  labelClass?: string;
}

export default component$((props: Props) => {
  const { label, options, onInput$, name, disabled, hidden, selectedValue } =
    props;
  const randId = useId();
  const id = `text-input-${randId}`;

  return (
    <div
      class={
        'relative flex flex-col ' +
        (hidden ? 'hidden' : '') +
        (props.class ? ` ${props.class}` : '')
      }
      aria-hidden={hidden}
    >
      <label
        for={id}
        aria-label={label}
        aria-hidden={hidden}
        class={'my-2' + (props.labelClass ? ` ${props.labelClass}` : '')}
      >
        {label}
      </label>
      <select
        id={id}
        onInput$={(_, currentTarget) => {
          onInput$ && onInput$(currentTarget.value);
        }}
        class={
          'appearance-none border-2 border-solid border-gray-500 bg-white p-2 px-2.5 pr-[40px] focus:outline-none focus:ring focus:ring-gray-400 disabled:border-gray-500 disabled:bg-gray-300' +
          (props.selectClass ? ` ${props.selectClass}` : '')
        }
        name={name}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={selectedValue == option.value ? true : undefined}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        size={28}
        strokeWidth={1.3}
        color={disabled ? 'rgb(106, 112, 129)' : undefined}
        class="pointer-events-none absolute bottom-[0.4em] right-[0.5em]"
      />
    </div>
  );
});
