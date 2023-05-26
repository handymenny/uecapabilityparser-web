import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import SelectInput from '~/components/inputs/select-input';
import TextArea from '~/components/inputs/text-area';
import Button from '~/components/inputs/button';
import { encode, fromUint8Array } from 'js-base64';
import axios from 'axios';
import InputFile from '~/components/inputs/input-file';
import type { Capabilities } from '~/@types/uecapabilityparser';
import CapabilityView from '~/components/viewer/capability-view';
import { isServer } from '@builder.io/qwik/build';
import TextInput from '~/components/inputs/text-input';

export default component$(() => {
  const defaultType = 'H';
  const resultData: { value?: Capabilities } = useStore({
    value: undefined,
  });
  const submitting = useSignal(false);
  const type = useSignal(defaultType);
  const hexToUint8Array = $((hex: string) => {
    const cleanString = hex.replace(/\s|0x|,|;/g, '').toUpperCase();
    const array = cleanString
      .match(/[0-9A-Fa-f]{1,2}/g)
      ?.map((byte) => parseInt(byte, 16));
    return Uint8Array.from(array ?? []);
  });

  const textToBase64 = $(async (type: string, data: string) => {
    if (type == 'E') {
      return fromUint8Array(await hexToUint8Array(data));
    } else {
      return encode(data);
    }
  });

  const fileToBase64 = $(async (data: File) => {
    const arrayBuffer = await data.arrayBuffer();
    return fromUint8Array(new Uint8Array(arrayBuffer));
  });

  const options = [
    { label: 'UE Capability Information Hex Dump', value: 'H' },
    { label: 'Wireshark UE Capability Information', value: 'W' },
    { label: 'NSG UE Capability Information', value: 'N' },
    { label: 'LTE Carrier policy', value: 'C' },
    { label: 'NR Cap Prune', value: 'CNR' },
    { label: '28874 nvitem binary', value: 'E' },
    { label: '0xB0CD (LTE RRC Supported CA Combos)', value: 'Q' },
    { label: '0xB826 (NR5G RRC Supported CA Combos) hexdump', value: 'QNR' },
    { label: 'Mediatek CA_COMB_INFO as text', value: 'M' },
    { label: 'Osix UE Capability Information', value: 'O' },
    { label: 'Qcat UE Capability Information', value: 'QC' },
  ];

  return (
    <>
      <h1
        class={
          'mb-4 text-center text-4xl font-semibold' +
          (submitting.value || resultData.value !== undefined ? ' hidden' : '')
        }
      >
        Parser
      </h1>
      <div class="my-[-1rem] flex flex-1 flex-col">
        <form
          class={
            'm-auto w-full max-w-xl' +
            (submitting.value || resultData.value !== undefined
              ? ' hidden'
              : '')
          }
          autoComplete="off"
          preventdefault:submit
          onSubmit$={async (_, currentTarget) => {
            resultData.value = undefined;
            submitting.value = true;
            try {
              const formData = new FormData(currentTarget);
              const type = formData.get('type') as string;
              const inputTextBase64 = await textToBase64(
                type,
                formData.get('inputText') as string
              );

              const attachedFiles = formData.getAll('inputFile') as File[];
              let inputFileBase64 = '';
              if (attachedFiles.length > 1) {
                // Combine files as text
                const inputFilesBase64 = await Promise.all(
                  attachedFiles.map(async (file) => await file.text())
                );
                inputFileBase64 = encode(
                  inputFilesBase64.reduce((prev, curr) => prev + '\n\n' + curr)
                );
              } else if (attachedFiles.length != 0) {
                // Single file as binary
                inputFileBase64 = await fileToBase64(attachedFiles[0]);
              }

              const input =
                inputFileBase64.length > 0 ? inputFileBase64 : inputTextBase64;

              let inputEnDc = '';
              let inputNr = '';
              if (type == 'H') {
                const endcBase64 = encode(
                  formData.get('inputENDCText') as string
                );
                const endcFileBase64 = await fileToBase64(
                  formData.get('inputENDCFile') as File
                );
                inputEnDc =
                  endcFileBase64.length > 0 ? endcFileBase64 : endcBase64;

                const nrBase64 = encode(formData.get('inputNRText') as string);
                const nrFileBase64 = await fileToBase64(
                  formData.get('inputNRFile') as File
                );
                inputNr = nrFileBase64.length > 0 ? nrFileBase64 : nrBase64;
              }
              const description = formData.get('description');
              const url = import.meta.env.PUBLIC_PARSE_ENDPOINT;
              const result = await axios.post(url, {
                type: type,
                input: input,
                inputENDC: inputEnDc,
                inputNR: inputNr,
                multiple0xB826: true,
                description: description,
              });
              if (!isServer) {
                window.history.pushState([], '', '/view/?id=' + result.data.id);
                window.addEventListener(
                  'popstate',
                  () => {
                    resultData.value = undefined;
                  },
                  { once: true }
                );
              }
              submitting.value = false;
              resultData.value = result.data;
            } catch (error) {
              console.error(error);
              submitting.value = false;
              alert(error);
            }
          }}
        >
          <SelectInput
            label="Log Type"
            placeholder="log-type"
            options={options}
            name="type"
            disabled={submitting.value}
            onInput$={(value) => {
              type.value = value;
            }}
          />
          <TextInput
            label="Description"
            placeholder="Enter a description. The description will be saved if store is enabled"
            name="description"
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
                case 'QNR':
                  return 'Attach files containing 0xB826 hexdumps';
                case 'M':
                  return 'Attach files containing CA_COMB_INFO logs as text';
                case 'H':
                  return 'Attach a file containing the UE Capability Information or UE EUTRA Capability hexdump';
                default:
                  return 'Attach files representing a unique set of UE Capability Information';
              }
            })()}
            name="inputFile"
            multiple={type.value != 'E' && type.value != 'H'}
            disabled={submitting.value}
          />
          <TextArea
            label={(() => {
              switch (type.value) {
                case 'C':
                case 'CNR':
                case 'Q':
                case 'QNR':
                case 'M':
                  return 'Or paste them below';
                case 'E':
                  return 'Or paste its hexdump below';
                default:
                  return 'Or paste it below';
              }
            })()}
            placeholder="Paste the log content"
            name="inputText"
            halfHeight={type.value == 'H'}
            disabled={submitting.value}
          />
          <InputFile
            label="Attach a file containing the UE MRDC Capability hexdump"
            name="inputENDCFile"
            disabled={submitting.value}
            hidden={type.value != 'H'}
          />
          <TextArea
            label="Or paste it below"
            placeholder="Paste the log content"
            name="inputENDCText"
            disabled={submitting.value}
            halfHeight={true}
            hidden={type.value != 'H'}
          />
          <InputFile
            label="Attach a file containing the UE NR Capability hexdump"
            name="inputNRFile"
            disabled={submitting.value}
            hidden={type.value != 'H'}
          />
          <TextArea
            label="Or paste it below"
            placeholder="Paste the log content"
            name="inputNRText"
            disabled={submitting.value}
            halfHeight={true}
            hidden={type.value != 'H'}
          />
          <Button type="submit" label="Submit" disabled={submitting.value} />
        </form>
        <CapabilityView
          capabilities={resultData.value}
          hidden={!submitting.value && resultData.value === undefined}
        />
      </div>
    </>
  );
});
