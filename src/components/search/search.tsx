import { type PropFunction, component$, useId } from '@builder.io/qwik';
import { SearchIcon } from 'qwik-feather-icons';
import { initializeFuzzySearcher } from '~/helpers/search';

interface Props {
  label?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  hidden?: boolean;
  onKeyUp$?: PropFunction<(value: string) => void>;
  fuzzy?: { id: string; keys: string[]; data: any };
}

export default component$((props: Props) => {
  const { label, placeholder, name, disabled, hidden, onKeyUp$, fuzzy } = props;
  const randId = useId();
  const id = `text-search-${randId}`;

  const hiddenCssClass = hidden ? 'hidden' : '';

  if (fuzzy) initializeFuzzySearcher(fuzzy.id, fuzzy.keys, fuzzy.data);

  return (
    <div class="flex-basis-0 relative my-2 flex flex-grow flex-col">
      <label for={id} aria-label={label} class={`${hiddenCssClass}`}></label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        class={`h-full appearance-none border-2 border-solid border-black bg-white p-2 pl-[40px] text-lg placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-gray-400 disabled:bg-gray-300 disabled:opacity-70 ${hiddenCssClass}`}
        name={name}
        disabled={disabled}
        onKeyUp$={(_, currentTarget) => {
          onKeyUp$ && onKeyUp$(currentTarget.value);
        }}
      />
      <SearchIcon
        size={28}
        strokeWidth={1.3}
        color={disabled ? 'rgb(106, 112, 129)' : 'rgb(156 163 175)'}
        class="absolute left-[0.5em] h-full"
      />
    </div>
  );
});
