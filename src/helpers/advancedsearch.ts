enum FieldNumber {
  LTE_CATEGORY_DL = 'LTE_CATEGORY_DL',
  LTE_CATEGORY_UL = 'LTE_CATEGORY_UL',
  TIMESTAMP = 'TIMESTAMP',
}

enum FieldString {
  DESCRIPTION = 'DESCRIPTION',
  LOG_TYPE = 'LOG_TYPE',
}

enum FieldStrings {
  NSA_BANDS = 'NSA_BANDS',
  SA_BANDS = 'SA_BANDS',
  LTE_ALT_TBS_IND = 'LTE_ALT_TBS_IND',
}

enum FieldCombos {
  LTE_COMBOS = 'LTE_COMBOS',
  NR_COMBOS = 'NR_COMBOS',
  ENDC_COMBOS = 'ENDC_COMBOS',
  NRDC_COMBOS = 'NRDC_COMBOS',
}

enum FieldBandsDetails {
  LTE_BANDS = 'LTE_BANDS',
  NR_BANDS = 'NR_BANDS',
}

export const isLogType = (input: string) => input == FieldString.LOG_TYPE;

export const isLteBands = (input: string) =>
  input == FieldBandsDetails.LTE_BANDS;

export const isAltTbsIndex = (input: string) =>
  input == FieldStrings.LTE_ALT_TBS_IND;

export const isNumber = (input: string) =>
  !isDate(input) && Object.values(FieldNumber).includes(input as FieldNumber);

export const isDate = (input: string) => input == FieldNumber.TIMESTAMP;

export const isText = (input: string) =>
  !isLogType(input) &&
  Object.values(FieldString).includes(input as FieldString);

export const isListString = (input: string) =>
  Object.values(FieldStrings).includes(input as FieldStrings);

export const isListBand = (input: string) =>
  Object.values(FieldBandsDetails).includes(input as FieldBandsDetails);

export const isListCombos = (input: string) =>
  Object.values(FieldCombos).includes(input as FieldCombos);
