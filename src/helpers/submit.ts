import type {
  Capabilities,
  LogType,
  MultiCapabilities,
  RequestMultiParse,
  RequestParse,
} from '~/@types/uecapabilityparser';
import { encode, fromUint8Array } from 'js-base64';
import axios from 'axios';
import { Endpoints } from '~/helpers/endpoints';

const fileToBase64 = async (data: File) => {
  const arrayBuffer = await data.arrayBuffer();
  return fromUint8Array(new Uint8Array(arrayBuffer));
};

const textToBase64 = async (type: LogType, data: string) => {
  const binaryTypes = ['E', 'SHNR', 'P', 'DLF', 'QMDL', 'HDF', 'SDM'];
  if (type in binaryTypes) {
    return fromUint8Array(hexToUint8Array(data));
  } else {
    return encode(data);
  }
};

const hexToUint8Array = (hex: string) => {
  const cleanString = hex.replace(/\s|0x|,|;/g, '').toUpperCase();
  const array = cleanString
    .match(/[0-9A-Fa-f]{1,2}/g)
    ?.map((byte) => parseInt(byte, 16));
  return Uint8Array.from(array ?? []);
};

const getInputBase64 = async (
  formData: FormData,
  type: LogType,
  textKey: string,
  filekey: string,
) => {
  const text = formData.get(textKey) as string;
  const inputTextBase64 = await textToBase64(type, text);

  let inputFileBase64 = '';
  const attachedFiles = formData.getAll(filekey) as File[];
  if (attachedFiles.length == 1) {
    // Single binary file
    inputFileBase64 = await fileToBase64(attachedFiles[0]);
  } else if (attachedFiles.length > 1) {
    // Combine files as text
    const promises = attachedFiles.map((file) => file.text());
    const inputFiles = await Promise.all(promises);
    inputFileBase64 = encode(inputFiles.reduce((p, c) => `${p}\n\n${c}`));
  }

  return inputFileBase64.length > 0 ? inputFileBase64 : inputTextBase64;
};

export const submitLegacy = async (currentTarget: HTMLFormElement) => {
  const form = new FormData(currentTarget);
  const type = form.get('0-type') as LogType;
  const description = form.get('0-description') as string;
  const input = await getInputBase64(form, type, '0-inputText', '0-inputFile');

  let inputEnDc: string | null = null;
  let inputNr: string | null = null;
  if (type == 'H') {
    inputEnDc = await getInputBase64(
      form,
      type,
      '0-inputENDCText',
      '0-inputENDCFile',
    );
    inputNr = await getInputBase64(
      form,
      type,
      '0-inputNRText',
      '0-inputNRFile',
    );
  }

  const request: RequestParse = {
    type: type,
    input: input,
    inputENDC: inputEnDc,
    inputNR: inputNr,
    multiple0xB826: true,
    description: description,
  };
  const result = await axios.post(Endpoints.PARSE, request);

  return result.data as Capabilities;
};

export const submitMultiLegacy = async (
  form: HTMLFormElement,
  capSize: number,
) => {
  const formData = new FormData(form);
  const requests: RequestMultiParse[] = [];
  for (let index = 0; index < capSize; index++) {
    const type = form.get(`${index}-type`) as LogType;
    const description = form.get(`${index}-description`) as string;
    const input = await getInputBase64(
      formData,
      type,
      `${index}-inputText`,
      `${index}-inputFile`,
    );

    if (type == 'P' && input.startsWith('Cg0NC')) {
      throw "PcapNg isn't supported, please convert this file to PCAP before submitting.";
    }

    let inputs = [input];
    let subTypes: string[] = [];
    if (type == 'H') {
      const inputEnDc = await getInputBase64(
        formData,
        type,
        `${index}-inputENDCText`,
        `${index}-inputENDCFile`,
      );
      const inputNr = await getInputBase64(
        formData,
        type,
        `${index}-inputNRText`,
        `${index}-inputNRFile`,
      );
      inputs = [input, inputEnDc, inputNr];
      subTypes = ['LTE', 'ENDC', 'NR'];
    }

    const request: RequestMultiParse = {
      type: type,
      inputs: inputs,
      subTypes: subTypes,
      description: description,
    };
    requests.push(request);
  }
  const result = await axios.post(Endpoints.PARSEMULTI, requests);
  const multi = result.data as MultiCapabilities;

  if (multi.capabilitiesList == undefined) {
    throw "Parsing failed. The input is invalid or doesn't contain valid data.";
  }

  return multi;
};
