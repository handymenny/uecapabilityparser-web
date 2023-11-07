import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import Button from '~/components/inputs/button';
import { encode, fromUint8Array } from 'js-base64';
import axios from 'axios';
import type { Capabilities } from '~/@types/uecapabilityparser';
import CapabilityView from '~/components/viewer/capability-view';
import { isServer } from '@builder.io/qwik/build';
import FormInput from './form-input';

export default component$(() => {
  const resultData: { value?: Capabilities } = useStore({
    value: undefined,
  });
  const inputData: { value: string[] } = useStore({ value: [] });
  const submitting = useSignal(false);
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
                formData.get('inputText') as string,
              );

              const attachedFiles = formData.getAll('inputFile') as File[];
              let inputFileBase64 = '';
              if (attachedFiles.length > 1) {
                // Combine files as text
                const inputFilesBase64 = await Promise.all(
                  attachedFiles.map(async (file) => await file.text()),
                );
                inputFileBase64 = encode(
                  inputFilesBase64.reduce((prev, curr) => prev + '\n\n' + curr),
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
                  formData.get('inputENDCText') as string,
                );
                const endcFileBase64 = await fileToBase64(
                  formData.get('inputENDCFile') as File,
                );
                inputEnDc =
                  endcFileBase64.length > 0 ? endcFileBase64 : endcBase64;

                const nrBase64 = encode(formData.get('inputNRText') as string);
                const nrFileBase64 = await fileToBase64(
                  formData.get('inputNRFile') as File,
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
                  { once: true },
                );
              }
              submitting.value = false;
              resultData.value = result.data;

              // Try getting input, won't work if store is disabled
              try {
                const itemUrl =
                  import.meta.env.PUBLIC_STORE_ENDPOINT + 'getItem';
                // Get input
                const item = await axios.get(itemUrl, {
                  params: { id: resultData.value?.id },
                });
                inputData.value = item.data.inputs;
              } catch (err) {
                console.error(err);
              }
            } catch (error) {
              console.error(error);
              submitting.value = false;
              alert(error);
            }
          }}
        >
          <FormInput prefix="" submitting={submitting} />
          <Button type="submit" label="Submit" disabled={submitting.value} />
        </form>
        <CapabilityView
          capabilities={resultData.value}
          inputs={inputData.value}
          hidden={!submitting.value && resultData.value === undefined}
        />
      </div>
    </>
  );
});
