import type {
  BwsNr,
  Mimo,
  Modulation,
  PowerClass,
} from '~/@types/uecapabilityparser';

export function modulationToStr(modulation?: Modulation) {
  if (modulation === undefined || modulation.type === 'empty') {
    return '';
  }
  let modOrder;
  if (modulation.type === 'mixed') {
    modOrder = modulation.value[0];
  } else {
    modOrder = modulation.value;
  }
  switch (modOrder) {
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
  if (mimo === undefined || mimo.type === 'empty') {
    return '';
  } else if (mimo.type === 'mixed') {
    return mimo.value[0].toString();
  } else {
    return mimo.value.toString();
  }
}

export function bwsDlToStr(bwsNr?: BwsNr[]) {
  const result = bwsNr?.map((bwsNr) => {
    if (bwsNr.bandwidthsDl.length > 0) {
      return `${bwsNr.scs}kHz: ${bwsNr.bandwidthsDl.join(', ')}`;
    } else {
      return '';
    }
  });
  return result ?? [];
}

export function bwsUlToStr(bwsNr?: BwsNr[]) {
  const result = bwsNr?.map((bwsNr) => {
    if (bwsNr.bandwidthsUl.length > 0) {
      return `${bwsNr.scs}kHz: ${bwsNr.bandwidthsUl.join(', ')}`;
    } else {
      return '';
    }
  });
  return result ?? [];
}

export function powerClassToStr(powerclass?: PowerClass) {
  switch (powerclass) {
    case 'pc1':
      return '1';
    case 'pc1dot5':
      return '1.5';
    case 'pc2':
      return '2';
    case 'pc3':
      return '3';
    case 'pc4':
      return '4';
    case 'pc5':
      return '5';
    case 'pc6':
      return '6';
    case 'pc7':
      return '7';
    default:
      return '';
  }
}
