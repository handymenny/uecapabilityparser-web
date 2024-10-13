import { component$, useSignal } from '@builder.io/qwik';
import SelectInput from '~/components/inputs/select-input';
import TextArea from '~/components/inputs/text-area';
import InputFile from '~/components/inputs/input-file';
import TextInput from '~/components/inputs/text-input';
import type { Signal } from '@builder.io/qwik';
import { type LogType } from '~/@types/uecapabilityparser';
import {
  getLogTypeHelpFile,
  getLogTypeHelpTextArea,
  getLogTypeOption,
  getSupportedLogTypeOptions,
} from '~/helpers/logtypes';

interface Props {
  submitting: Signal<boolean>;
  prefix: string;
  supportedLogs?: LogType[];
}

export default component$((props: Props) => {
  const prefix = props.prefix;
  const submitting = props.submitting;
  const defaultType = 'H';
  const type = useSignal(defaultType);
  const supLogs = props.supportedLogs ?? [];
  const options = getSupportedLogTypeOptions(supLogs);

  return (
    <>
      <SelectInput
        label="Log Type"
        options={options}
        name={`${prefix}type`}
        disabled={submitting.value}
        onInput$={async (value) => {
          type.value = value;
        }}
      />
      <TextInput
        label="Description"
        placeholder="Enter a description. The description will be saved if store is enabled"
        name={`${prefix}description`}
      />
      <InputFile
        label={getLogTypeHelpFile(type.value)}
        name={`${prefix}inputFile`}
        multiple={getLogTypeOption(type.value)?.multiInput ?? false}
        disabled={submitting.value}
      />
      <TextArea
        label={getLogTypeHelpTextArea(type.value)}
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
        label={getLogTypeHelpTextArea(type.value)}
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
        label={getLogTypeHelpTextArea(type.value)}
        placeholder="Paste the log content"
        name={`${prefix}inputNRText`}
        disabled={submitting.value}
        halfHeight={true}
        hidden={type.value != 'H'}
      />
    </>
  );
});
