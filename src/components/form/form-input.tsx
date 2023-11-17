import { component$, useSignal } from '@builder.io/qwik';
import SelectInput from '~/components/inputs/select-input';
import TextArea from '~/components/inputs/text-area';
import InputFile from '~/components/inputs/input-file';
import TextInput from '~/components/inputs/text-input';
import type { Signal } from '@builder.io/qwik';

interface Props {
  submitting: Signal<boolean>;
  prefix: string;
}

export default component$((props: Props) => {
  const prefix = props.prefix;
  const submitting = props.submitting;
  const defaultType = 'H';
  const type = useSignal(defaultType);
  const options = [
    { label: 'UE Capability Information Hex Dump', value: 'H' },
    { label: 'Wireshark UE Capability Information', value: 'W' },
    { label: 'NSG UE Capability Information', value: 'N' },
    { label: 'LTE Carrier policy', value: 'C' },
    { label: 'NR Cap Prune', value: 'CNR' },
    { label: '28874 nvitem binary', value: 'E' },
    { label: '0xB0CD (LTE RRC Supported CA Combos)', value: 'Q' },
    { label: '0xB0CD (LTE RRC Supported CA Combos) hexdump', value: 'QLTE' },
    { label: '0xB826 (NR5G RRC Supported CA Combos) hexdump', value: 'QNR' },
    { label: 'Mediatek CA_COMB_INFO as text', value: 'M' },
    { label: 'Osix UE Capability Information', value: 'O' },
    { label: 'Qcat UE Capability Information', value: 'QC' },
    { label: 'Qct Modem Capabilities', value: 'RF' },
    { label: 'Shannon NR UE cap config', value: 'SHNR' },
  ];

  return (
    <>
      <SelectInput
        label="Log Type"
        placeholder="log-type"
        options={options}
        name={`${prefix}type`}
        disabled={submitting.value}
        onInput$={(value) => {
          type.value = value;
        }}
      />
      <TextInput
        label="Description"
        placeholder="Enter a description. The description will be saved if store is enabled"
        name={`${prefix}description`}
      />
      <InputFile
        label={(() => {
          switch (type.value) {
            case 'C':
              return 'Attach files containing LTE carrier policy combos';
            case 'CNR':
              return 'Attach files containing NR Cap prune combos';
            case 'E':
              return 'Attach an NVItem 28874';
            case 'Q':
              return 'Attach files containing 0xB0CD items as text';
            case 'QLTE':
              return 'Attach files containing 0xB0CD hexdumps';
            case 'QNR':
              return 'Attach files containing 0xB826 hexdumps';
            case 'M':
              return 'Attach files containing CA_COMB_INFO logs as text';
            case 'H':
              return 'Attach a file containing the UE Capability Information or UE EUTRA Capability hexdump';
            case 'RF':
              return 'Attach a file containing CA COMBOS from Qct Modem Capabilities';
            case 'SHNR':
              return 'Attach a Shannon NR UE cap config protobuf (.binarypb)';
            default:
              return 'Attach files representing a unique set of UE Capability Information';
          }
        })()}
        name={`${prefix}inputFile`}
        multiple={!['E', 'H', 'SHNR'].includes(type.value)}
        disabled={submitting.value}
      />
      <TextArea
        label={(() => {
          switch (type.value) {
            case 'C':
            case 'CNR':
            case 'Q':
            case 'QNR':
            case 'QLTE':
            case 'M':
              return 'Or paste them below';
            case 'E':
            case 'SHNR':
              return 'Or paste its hexdump below';
            default:
              return 'Or paste it below';
          }
        })()}
        placeholder="Paste the log content"
        name={`${prefix}inputText`}
        halfHeight={type.value == 'H'}
        disabled={submitting.value}
      />
      <InputFile
        label="Attach a file containing the UE MRDC Capability hexdump"
        name={`${prefix}inputENDCFile`}
        disabled={submitting.value}
        hidden={type.value != 'H'}
      />
      <TextArea
        label="Or paste it below"
        placeholder="Paste the log content"
        name={`${prefix}inputENDCText`}
        disabled={submitting.value}
        halfHeight={true}
        hidden={type.value != 'H'}
      />
      <InputFile
        label="Attach a file containing the UE NR Capability hexdump"
        name={`${prefix}inputNRFile`}
        disabled={submitting.value}
        hidden={type.value != 'H'}
      />
      <TextArea
        label="Or paste it below"
        placeholder="Paste the log content"
        name={`${prefix}inputNRText`}
        disabled={submitting.value}
        halfHeight={true}
        hidden={type.value != 'H'}
      />
    </>
  );
});
