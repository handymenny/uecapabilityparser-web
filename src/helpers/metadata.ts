export function logTypeToString(type: string) {
  switch (type) {
    case 'H':
      return 'UE Capability hexdump';
    case 'W':
      return 'Wireshark UE Capability';
    case 'N':
      return 'NSG UE Capability';
    case 'C':
      return 'Carrier policy';
    case 'CNR':
      return 'NR Cap Prune';
    case 'E':
      return '28874 nvitem';
    case 'Q':
      return 'QCAT 0xB0CD';
    case 'QLTE':
      return 'QCAT 0xB0CD hexdump';
    case 'QNR':
      return 'QCAT 0xB826 hexdump';
    case 'M':
      return 'MEDIATEK CA_COMB_INFO';
    case 'O':
      return 'OSIX UE Capability';
    case 'QC':
      return 'QCAT UE Capability';
    case 'RF':
      return 'QCT Modem Capabilities';
  }
  return 'Unknown';
}

export function keyTostring(key: string) {
  return key[0].toUpperCase() + key.substring(1).replace(/([A-Z])/g, ' $1');
}
