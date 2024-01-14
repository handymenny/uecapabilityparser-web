import { component$, useComputed$, useSignal } from '@builder.io/qwik';
import SelectInput from '../inputs/select-input';
import TextInput from '../inputs/text-input';
import NumberInput from '../inputs/number-input';

interface Props {
  suffix: string;
  lte: boolean;
  nr: boolean;
  nrDc: boolean;
}

export default component$((props: Props) => {
  const { suffix, lte, nr, nrDc } = props;

  const componentOptions = [
    { label: 'LTE DL', value: 'lteDl' },
    { label: 'LTE UL', value: 'lteUl' },
    { label: 'NR DL', value: 'nrDl' },
    { label: 'NR UL', value: 'nrUl' },
    { label: 'NR DC DL', value: 'nrDcDl' },
    { label: 'NR DC UL', value: 'nrDcUl' },
  ];

  const currentOptions = useComputed$(() => {
    let options = componentOptions;
    if (lte == false) {
      options = options.filter((it) => !it.value.startsWith('lte'));
    }
    if (nr == false) {
      options = options.filter((it) => !it.value.startsWith('nr'));
    }
    if (nrDc == false) {
      options = options.filter((it) => !it.value.startsWith('nrDc'));
    }
    return options;
  });

  const componentType = useSignal(lte ? 'lteDl' : 'nrDl');

  return (
    <>
      <div class="flex-1">
        <SelectInput
          label="Type"
          name={`type-${suffix}`}
          options={currentOptions.value}
          onInput$={(value) => {
            componentType.value = value;
          }}
        />
      </div>
      <div class="flex-1">
        <NumberInput
          min={0}
          label="Band"
          name={`band-${suffix}`}
          placeholder="Insert value"
        />
      </div>
      <div class="flex-1">
        <TextInput
          label="BW Class"
          name={`class-${suffix}`}
          placeholder="Insert value"
        />
      </div>
      {componentType.value != 'lteUl' && (
        <div class="flex-1">
          <NumberInput
            min={0}
            label="MIMO"
            name={`mimo-${suffix}`}
            placeholder="Insert value"
          />
        </div>
      )}
      {componentType.value.startsWith('nr') && (
        <div class="flex-1">
          <NumberInput
            min={0}
            label="BW per CC"
            name={`bw-${suffix}`}
            placeholder="Insert value"
          />
        </div>
      )}
    </>
  );
});
