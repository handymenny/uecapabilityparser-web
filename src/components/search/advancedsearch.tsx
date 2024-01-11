import { component$, useComputed$, useSignal } from '@builder.io/qwik';
import SelectInput from '../inputs/select-input';
import TextInput from '../inputs/text-input';
import NumberInput from '../inputs/number-input';
import DateInput from '../inputs/date-input';
import {
  isAltTbsIndex,
  isDate,
  isListBand,
  isListString,
  isLogType,
  isNumber,
  isText,
} from '~/helpers/advancedsearch';
import { AlertException } from '~/helpers/alert';

interface Props {
  suffix: string;
}

export default component$((props: Props) => {
  const { suffix } = props;
  const allComparator = [
    { label: 'EQUALS', value: 'EQUALS' },
    { label: 'NOT EQUALS', value: 'NOT_EQUALS' },
    { label: 'GREATER', value: 'GREATER' },
    { label: 'LESS', value: 'LESS' },
    { label: 'CONTAINS', value: 'CONTAINS' },
    { label: 'NOT CONTAINS', value: 'NOT_CONTAINS' },
    { label: 'IS EMPTY', value: 'IS_EMPTY' },
    { label: 'IS NOT EMPTY', value: 'IS_NOT_EMPTY' },
    { label: 'HAS ANY', value: 'HAS_ANY' },
    { label: 'HAS ALL', value: 'HAS_ALL' },
    { label: 'HAS NONE', value: 'HAS_NONE' },
  ];

  const options = [
    { label: 'LTE CATEGORY DL', value: 'LTE_CATEGORY_DL' },
    { label: 'LTE CATEGORY UL', value: 'LTE_CATEGORY_UL' },
    { label: 'TIMESTAMP', value: 'TIMESTAMP' },
    { label: 'DESCRIPTION', value: 'DESCRIPTION' },
    { label: 'LOG TYPE', value: 'LOG_TYPE' },

    { label: 'LTE BANDS', value: 'LTE_BANDS' },
    { label: 'NR BANDS', value: 'NR_BANDS' },
    { label: 'NSA BANDS (from eutra capability)', value: 'NSA_BANDS' },
    { label: 'SA BANDS (from eutra capability)', value: 'SA_BANDS' },
    { label: 'LTE ALT TBS IND', value: 'LTE_ALT_TBS_IND' },

    { label: 'LTE COMBOS', value: 'LTE_COMBOS' },
    { label: 'NR COMBOS', value: 'NR_COMBOS' },
    { label: 'ENDC COMBOS', value: 'ENDC_COMBOS' },
    { label: 'NRDC COMBOS', value: 'NRDC_COMBOS' },
  ];

  const logTypeOptions = [
    { label: 'UE Capability Info hexdump', value: 'H' },
    { label: 'UE Capability Info from Wireshark', value: 'W' },
    { label: 'UE Capability Info from Qtrun NSG/Airscreen', value: 'N' },
    { label: 'UE Capability Info from Osix', value: 'O' },
    { label: 'UE Capability Info from Qualcomm Tools', value: 'QC' },
    { label: 'UE Capability Info from TEMS', value: 'T' },
    { label: 'UE Capability Info from Amarisoft', value: 'A' },
    { label: '0xB0CD - LTE RRC Supported CA Combos hexdump', value: 'QLTE' },
    { label: '0xB826 - NR5G RRC Supported CA Combos hexdump', value: 'QNR' },
    { label: '0xB0CD - LTE RRC Supported CA Combos (text)', value: 'Q' },
    { label: 'Qct Modem Capabilities (LTE CA Combos)', value: 'RF' },
    { label: 'Qualcomm LTE Carrier policy', value: 'C' },
    { label: 'Qualcomm NR Cap Prune', value: 'CNR' },
    { label: '28874 nvitem binary', value: 'E' },
    { label: 'Mediatek CA_COMB_INFO (text)', value: 'M' },
    { label: 'Shannon NR UE cap config', value: 'SHNR' },
  ];

  const valueType = useSignal('numeric');

  const currentComparator = useComputed$(() => {
    const allowed: string[] = [];
    switch (valueType.value) {
      case 'numeric':
        allowed.push(...['EQUALS', 'GREATER', 'LESS', 'NOT_EQUALS']);
        break;
      case 'text':
        allowed.push(...['EQUALS', 'NOT_EQUALS', 'CONTAINS', 'NOT_CONTAINS']);
        break;
      case 'date':
        allowed.push(...['GREATER', 'LESS']);
        break;
      case 'logType':
        allowed.push(...['EQUALS', 'NOT_EQUALS']);
        break;
      case 'listSimpleBand':
      case 'listSimpleAltTbs':
      case 'notSupported':
        allowed.push(...['HAS_ANY', 'HAS_ALL', 'HAS_NONE']);
        break;
    }
    return allComparator.filter((it) => allowed.includes(it.value));
  });

  return (
    <>
      <SelectInput
        label="Field"
        name={`field-${suffix}`}
        options={options}
        onInput$={async (value) => {
          if (isNumber(value)) {
            valueType.value = 'numeric';
          } else if (isText(value)) {
            valueType.value = 'text';
          } else if (isDate(value)) {
            valueType.value = 'date';
          } else if (isLogType(value)) {
            valueType.value = 'logType';
          } else if (isListString(value)) {
            if (isAltTbsIndex(value)) {
              valueType.value = 'listSimpleAltTbs';
            } else {
              valueType.value = 'listSimpleBand';
            }
          } else if (isListBand(value)) {
            valueType.value = 'listSimpleBand';
          } else {
            valueType.value = 'notSupported';
            throw new AlertException('Not supported by this demo');
          }
        }}
      />
      <SelectInput
        label="Comparator"
        name={`comparator-${suffix}`}
        options={currentComparator.value}
      />
      {['text', 'listSimpleBand', 'listSimpleAltTbs'].includes(
        valueType.value,
      ) && (
        <TextInput
          label={valueType.value == 'text' ? 'Value' : 'Values'}
          name={`value-${suffix}`}
          placeholder={
            valueType.value == 'listSimpleBand'
              ? 'Insert values separated by comma: 7, 8, 20 etc...'
              : valueType.value == 'listSimpleAltTbs'
                ? 'Insert values separated by comma: 26a, 33a, 33b'
                : 'Insert value'
          }
        />
      )}
      {valueType.value == 'numeric' && (
        <NumberInput
          min={0}
          label="Value"
          name={`value-${suffix}`}
          placeholder="Insert value"
        />
      )}
      {valueType.value == 'date' && (
        <DateInput
          label="Value"
          name={`value-${suffix}`}
          placeholder="Insert value"
        />
      )}
      {valueType.value == 'logType' && (
        <SelectInput
          label="Value"
          name={`value-${suffix}`}
          options={logTypeOptions}
        />
      )}
    </>
  );
});
