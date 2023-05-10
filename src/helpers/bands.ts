import type { BwsNr, Mimo, Modulation } from '~/@types/uecapabilityparser';

export function modulationToStr(modulation?: Modulation) {
  if (modulation === undefined || modulation.type != 'single') {
    return '';
  }
  switch (modulation.value) {
    case 'qpsk':
      return 'QPSK';
    case 'qam16':
      return '16 QAM';
    case 'qam64':
      return '64 QAM';
    case 'qam256':
      return '256 QAM';
    case 'qam1024':
      return '1024 QAM';
    default:
      return '';
  }
}

export function mimoToStr(mimo?: Mimo) {
  if (mimo === undefined || mimo.type != 'single') {
    return '';
  } else {
    return mimo.value.toString();
  }
}

export function bwsDlToStr(bwsNr?: BwsNr[]) {
  const result = bwsNr?.map(
    (bwsNr) => `${bwsNr.scs}kHz: ${bwsNr.bandwidthsDl.join(', ')}`
  );
  return result ?? [];
}

export function bwsUlToStr(bwsNr?: BwsNr[]) {
  const result = bwsNr?.map(
    (bwsNr) => `${bwsNr.scs}kHz: ${bwsNr.bandwidthsUl.join(', ')}`
  );
  return result ?? [];
}
