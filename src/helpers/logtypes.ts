interface LogTypeOptions {
  value: string;
  label: string;
  type: 'hex' | 'binary' | 'text';
  help?: string;
  multiInput?: boolean;
  multiOutput?: boolean;
}

const LogTypeOptions: LogTypeOptions[] = [
  { value: 'H', label: 'UE Capability Info hexdump', type: 'hex' },
  {
    value: 'W',
    label: 'UE Capability Info from Wireshark',
    multiInput: true,
    type: 'text',
  },
  {
    value: 'N',
    label: 'UE Capability Info from Qtrun NSG/Airscreen',
    type: 'text',
    multiInput: true,
  },
  {
    value: 'O',
    label: 'UE Capability Info from Osix',
    multiInput: true,
    type: 'text',
  },
  {
    value: 'QC',
    label: 'UE Capability Info from Qualcomm Tools',
    type: 'text',
    multiInput: true,
  },
  {
    value: 'T',
    label: 'UE Capability Info from TEMS',
    type: 'text',
    multiInput: true,
  },
  {
    value: 'A',
    label: 'UE Capability Info from Amarisoft',
    type: 'text',
    multiInput: true,
  },
  {
    value: 'QLTE',
    label: '0xB0CD - LTE RRC Supported CA Combos hexdump',
    type: 'hex',
    multiInput: true,
  },
  {
    value: 'QNR',
    label: '0xB826 - NR5G RRC Supported CA Combos hexdump',
    type: 'hex',
    multiInput: true,
  },
  {
    value: 'Q',
    label: '0xB0CD - LTE RRC Supported CA Combos (text)',
    type: 'text',
    multiInput: true,
  },
  {
    value: 'RF',
    label: 'Qct Modem Capabilities (LTE CA Combos)',
    type: 'text',
    multiInput: true,
  },
  {
    value: 'C',
    label: 'Qualcomm LTE Carrier policy',
    type: 'text',
    multiInput: true,
  },
  {
    value: 'CNR',
    label: 'Qualcomm NR Cap Prune',
    type: 'text',
    multiInput: true,
  },
  { value: 'E', label: '28874 nvitem binary', type: 'binary' },
  {
    value: 'M',
    label: 'Mediatek CA_COMB_INFO (text)',
    type: 'text',
    multiInput: true,
  },
  { value: 'SHNR', label: 'Shannon NR UE cap config', type: 'binary' },
  {
    value: 'DLF',
    label: 'DLF Baseband Log',
    type: 'binary',
    multiOutput: true,
  },
  {
    value: 'QMDL',
    label: 'QMDL Baseband Log',
    type: 'binary',
    multiOutput: true,
  },
  {
    value: 'HDF',
    label: 'HDF Baseband Log',
    type: 'binary',
    multiOutput: true,
  },
  {
    value: 'SDM',
    label: 'SDM Baseband Log',
    type: 'binary',
    multiOutput: true,
  },
  { value: 'P', label: 'PCAP', type: 'binary', multiOutput: true },
];

export function getSupportedLogTypeOptions(
  multiparse: boolean,
  supportedLogs: string[],
) {
  if (supportedLogs.length > 0) {
    return LogTypeOptions.filter((it) => supportedLogs.includes(it.value));
  } else {
    const unsupLogs = multiparse
      ? ['DLF', 'QMDL', 'HDF', 'SDM']
      : ['SHNR', 'P', 'DLF', 'QMDL', 'HDF', 'SDM'];
    return LogTypeOptions.filter((it) => !unsupLogs.includes(it.value));
  }
}

export function getLogTypeOption(value: string) {
  return LogTypeOptions.find((it) => it.value === value);
}

export function getLogTypeHelpFile(value: string) {
  switch (value) {
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
    case 'P':
      return 'Attach a PCAP file (.pcap)';
    case 'DLF':
    case 'QMDL':
    case 'HDF':
    case 'SDM':
      return 'Attach a diag log';
    default:
      return 'Attach files representing a unique set of UE Capability Information';
  }
}

export function getLogTypeHelpTextArea(value: string) {
  const option = getLogTypeOption(value);
  let help = '';

  switch (option?.type) {
    case 'hex':
    case 'binary':
      if (option?.multiInput) {
        help = 'Or paste their hexdumps below';
      } else {
        help = 'Or paste its hexdump below';
      }
      break;
    case 'text':
      if (option?.multiInput) {
        help = 'Or paste them below';
      } else {
        help = 'Or paste it below';
      }
  }

  return help;
}
