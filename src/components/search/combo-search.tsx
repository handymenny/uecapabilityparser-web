import { component$, useSignal, useStore } from '@builder.io/qwik';
import ButtonIcon from '../inputs/button-icon';
import ComponentSearch from './component-search';
import NumberInput from '../inputs/number-input';
import { PlusSquareIcon, MinusSquareIcon } from 'qwik-feather-icons';

interface Props {
  label: string;
  suffix: string;
  lte: boolean;
  nr: boolean;
  nrDc: boolean;
}

export default component$((props: Props) => {
  const { suffix, lte, nr, nrDc, label } = props;
  const count = useSignal(1);
  const deleted = useStore<number[]>([]);

  return (
    <div class="flex flex-col">
      <label for={`combo-${suffix}`} aria-label={label} class={`my-2`}>
        {label}
      </label>
      <div
        class={'border-2 border-solid border-gray-500 px-4'}
        id={`combo-${suffix}`}
      >
        <NumberInput
          name={`combo-value-${suffix}`}
          value={count.value}
          hidden={true}
        />
        {[...Array(count.value).keys()]
          .filter((it) => !deleted.includes(it))
          .map((value) => (
            <div
              key={`combo-${suffix}-${value}`}
              class="mb-2 flex flex-row flex-wrap justify-between gap-x-5"
            >
              <ComponentSearch
                suffix={`${suffix}-${value}`}
                lte={lte}
                nr={nr}
                nrDc={nrDc}
              />
              <div class={'mt-2 flex'}>
                <ButtonIcon
                  label="remove"
                  hidden={count.value == value + 1}
                  type="button"
                  onClick$={async () => {
                    deleted.push(value);
                  }}
                  Icon={MinusSquareIcon}
                />
                <ButtonIcon
                  label="add"
                  hidden={count.value != value + 1}
                  type="button"
                  onClick$={async () => {
                    count.value++;
                  }}
                  Icon={PlusSquareIcon}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
