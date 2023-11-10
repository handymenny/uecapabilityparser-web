import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Button from '~/components/inputs/button';
import { encode, fromUint8Array } from 'js-base64';
import axios from 'axios';
import type {
  Capabilities,
  MultiCapabilities,
} from '~/@types/uecapabilityparser';
import { isServer } from '@builder.io/qwik/build';
import FormInput from './form-input';
import MulticapabilityView from '../viewer/multicapability-view';
import CircleSpinner from '../spinner/circle-spinner';
import Title from '../header/title';

export default component$(() => {
  const resultData = useSignal<Capabilities[] | undefined>(undefined);
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

  const count = useSignal(1);
  const multiParseSupported = useSignal(false);

  const checkMultiParse = $(async () => {
    const url = import.meta.env.PUBLIC_PARSEMULTI_ENDPOINT;
    console.log(url);
    try {
      const response = await axios.get(url, { validateStatus: () => true });
      multiParseSupported.value =
        response.status !== 404 && response.status < 500;
    } catch (ignored) {
      multiParseSupported.value = false;
    }
  });

  useVisibleTask$(
    () => {
      checkMultiParse();
    },
    { strategy: 'document-ready' },
  );

  if (!submitting.value && resultData.value == undefined) {
    return (
      <>
        <Title text="Parser" addClasses="mb-4" />
        <div class="my-[-1rem] flex flex-1 flex-col">
          <form
            class={'m-auto w-full max-w-2xl'}
            autoComplete="off"
            preventdefault:submit
            onSubmit$={async (_, currentTarget) => {
              resultData.value = undefined;
              submitting.value = true;
              try {
                const formData = new FormData(currentTarget);
                const capSize = count.value;
                const requests: any[] = [];
                for (let index = 0; index < capSize; index++) {
                  const type = formData.get(`${index}-type`) as string;
                  const inputTextBase64 = await textToBase64(
                    type,
                    formData.get(`${index}-inputText`) as string,
                  );

                  const attachedFiles = formData.getAll(
                    `${index}-inputFile`,
                  ) as File[];
                  let inputFileBase64 = '';
                  if (attachedFiles.length > 1) {
                    // Combine files as text
                    const inputFilesBase64 = await Promise.all(
                      attachedFiles.map(async (file) => await file.text()),
                    );
                    inputFileBase64 = encode(
                      inputFilesBase64.reduce(
                        (prev, curr) => prev + '\n\n' + curr,
                      ),
                    );
                  } else if (attachedFiles.length != 0) {
                    // Single file as binary
                    inputFileBase64 = await fileToBase64(attachedFiles[0]);
                  }

                  const input =
                    inputFileBase64.length > 0
                      ? inputFileBase64
                      : inputTextBase64;

                  let inputEnDc = '';
                  let inputNr = '';
                  if (type == 'H') {
                    const endcBase64 = encode(
                      formData.get(`${index}-inputENDCText`) as string,
                    );
                    const endcFileBase64 = await fileToBase64(
                      formData.get(`${index}-inputENDCFile`) as File,
                    );
                    inputEnDc =
                      endcFileBase64.length > 0 ? endcFileBase64 : endcBase64;

                    const nrBase64 = encode(
                      formData.get(`${index}-inputNRText`) as string,
                    );
                    const nrFileBase64 = await fileToBase64(
                      formData.get(`${index}-inputNRFile`) as File,
                    );
                    inputNr = nrFileBase64.length > 0 ? nrFileBase64 : nrBase64;
                  }
                  const description = formData.get(`${index}-description`);
                  if (!multiParseSupported) {
                    requests.push({
                      type: type,
                      input: input,
                      inputENDC: inputEnDc,
                      inputNR: inputNr,
                      multiple0xB826: true,
                      description: description,
                    });
                  } else {
                    requests.push({
                      type: type,
                      inputs: [input, inputEnDc, inputNr],
                      subTypes: ['LTE', 'ENDC', 'NR'],
                      description: description,
                    });
                  }
                }
                if (!multiParseSupported) {
                  const url = import.meta.env.PUBLIC_PARSE_ENDPOINT;
                  const result = await axios.post(url, requests[0]);

                  if (!isServer) {
                    window.history.pushState(
                      [],
                      '',
                      '/view/?id=' + result.data.id,
                    );
                    window.addEventListener(
                      'popstate',
                      () => {
                        resultData.value = undefined;
                      },
                      { once: true },
                    );
                  }
                  const cap = result.data as Capabilities;
                  submitting.value = false;
                  resultData.value = [cap];
                } else {
                  const url = import.meta.env.PUBLIC_PARSEMULTI_ENDPOINT;
                  const result = await axios.post(url, requests);

                  if (!isServer) {
                    window.history.pushState(
                      [],
                      '',
                      '/view/multi?id=' + result.data.id,
                    );
                    window.addEventListener(
                      'popstate',
                      () => {
                        resultData.value = undefined;
                      },
                      { once: true },
                    );
                  }
                  const multi = result.data as MultiCapabilities;
                  submitting.value = false;
                  resultData.value = multi.capabilitiesList;
                }
              } catch (error) {
                console.error(error);
                submitting.value = false;
                alert(error);
              }
            }}
          >
            {[...Array(count.value).keys()].map((value) => (
              <FormInput
                key={value}
                prefix={`${value}-`}
                submitting={submitting}
              />
            ))}

            <div class="flex flex-wrap gap-x-4">
              <Button
                type="button"
                label="Remove"
                hidden={!multiParseSupported.value || count.value < 2}
                onClick$={() => {
                  if (count.value > 1) {
                    count.value--;
                  }
                }}
              />
              <Button
                type="button"
                label="Add"
                hidden={!multiParseSupported.value}
                onClick$={() => {
                  count.value++;
                }}
              />
              <div class={(count.value > 1 && 'min-w-full') || 'flex-1'}>
                <Button type="submit" label="Submit" />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  } else if (resultData.value === undefined) {
    return (
      <div class="flex flex-1 flex-col">
        <CircleSpinner centered={true} />
      </div>
    );
  } else {
    return (
      <>
        <Title text="View" />
        <MulticapabilityView capabilitiesList={resultData.value} />
      </>
    );
  }
});
