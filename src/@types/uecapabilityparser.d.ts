// Automatically generated. Don't edit.
// Run gradlew genTsTypes to update this file.
export interface Capabilities {
  lteca?: ComboLte[];
  lteBands?: BandLteDetails[];
  nrNsaBandsEutra?: BandBoxed[];
  nrSaBandsEutra?: BandBoxed[];
  nrBands?: BandNrDetails[];
  lteCategoryDl?: number;
  lteCategoryUl?: number;
  altTbsIndexes?: string[];
  endc?: ComboEnDc[];
  nrca?: ComboNr[];
  nrdc?: ComboNrDc[];
  logType: LogType;
  ueCapFilters?: IUeCapabilityFilter[];
  ratCapabilities?: IRatCapabilities[];
  metadata: { [key: string]: string };
  id?: string;
  parserVersion: string;
  timestamp: number;
}

export enum LogType {
  INVALID = '',
  H = 'H',
  W = 'W',
  N = 'N',
  C = 'C',
  CNR = 'CNR',
  E = 'E',
  Q = 'Q',
  QLTE = 'QLTE',
  QNR = 'QNR',
  M = 'M',
  O = 'O',
  QC = 'QC',
  T = 'T',
  A = 'A',
  RF = 'RF',
  SHLTE = 'SHLTE',
  SHNR = 'SHNR',
  P = 'P',
  NSG = 'NSG',
  DLF = 'DLF',
  QMDL = 'QMDL',
  HDF = 'HDF',
  SDM = 'SDM',
}

export interface ComboLte {
  components: ComponentLte[];
  bcs?: BCS;
}

export interface BandLteDetails {
  band: number;
  mimoDl?: Mimo;
  mimoUl?: Mimo;
  modulationDl?: Modulation;
  modulationUl?: Modulation;
  powerClass?: PowerClass;
}

export interface BandBoxed {
  band: number;
}

export interface BandNrDetails {
  band: number;
  mimoDl?: Mimo;
  mimoUl?: Mimo;
  modulationDl?: Modulation;
  modulationUl?: Modulation;
  maxUplinkDutyCycle?: number;
  powerClass?: PowerClass;
  bandwidths?: BwsNr[];
  rateMatchingLteCrs?: boolean;
}

export interface ComboEnDc {
  componentsLte: ComponentLte[];
  componentsNr: ComponentNr[];
  bcsNr?: BCS;
  bcsEutra?: BCS;
  bcsIntraEndc?: BCS;
}

export interface ComboNr {
  components: ComponentNr[];
  bcs?: BCS;
}

export interface ComboNrDc {
  componentsFr1: ComponentNr[];
  componentsFr2: ComponentNr[];
  bcs?: BCS;
}

export type IUeCapabilityFilter =
  | IUeCapabilityFilter.UeCapabilityFilterLte
  | IUeCapabilityFilter.UeCapabilityFilterNr;

export namespace IUeCapabilityFilter {
  export enum Type {
    UeCapabilityFilterLte = 'UeCapabilityFilterLte',
    UeCapabilityFilterNr = 'UeCapabilityFilterNr',
  }

  export interface UeCapabilityFilterLte {
    type: IUeCapabilityFilter.Type.UeCapabilityFilterLte;
    rat: Rat;
    lteBands?: BandBoxed[];
    reducedFormat?: boolean;
    reducedIntNonContComb?: boolean;
    skipFallbackCombRequested?: boolean;
    diffFallbackCombList?: ComboLte[];
    maxCCsDl?: number;
    maxCCsUl?: number;
    includeNrDc?: boolean;
    includeNeDc?: boolean;
    omitEnDc?: boolean;
    uplinkTxSwitchRequest?: boolean;
    segAllowed?: boolean;
  }

  export interface UeCapabilityFilterNr {
    type: IUeCapabilityFilter.Type.UeCapabilityFilterNr;
    rat: Rat;
    lteBands?: BandFilterLte[];
    nrBands?: BandFilterNr[];
    eutraNrOnly?: boolean;
    includeNrDc?: boolean;
    includeNeDc?: boolean;
    omitEnDc?: boolean;
    uplinkTxSwitchRequest?: boolean;
    segAllowed?: boolean;
  }
}

export type IRatCapabilities =
  | IRatCapabilities.RatCapabilitiesLte
  | IRatCapabilities.RatCapabilitiesNr;

export namespace IRatCapabilities {
  export enum Type {
    RatCapabilitiesLte = 'RatCapabilitiesLte',
    RatCapabilitiesNr = 'RatCapabilitiesNr',
  }

  export interface RatCapabilitiesLte {
    type: IRatCapabilities.Type.RatCapabilitiesLte;
    release?: number | null;
    ueCapSegmentationSupported?: boolean | null;
    rat: Rat;
  }

  export interface RatCapabilitiesNr {
    type: IRatCapabilities.Type.RatCapabilitiesNr;
    release?: number | null;
    ueCapSegmentationSupported?: boolean | null;
    ueType?: UeType;
    rat: Rat;
  }
}

export type BCS = BCS.all | BCS.empty | BCS.multi | BCS.single;

export namespace BCS {
  export enum Type {
    all = 'all',
    empty = 'empty',
    multi = 'multi',
    single = 'single',
  }

  export interface all {
    type: BCS.Type.all;
  }

  export interface empty {
    type: BCS.Type.empty;
  }

  export interface multi {
    type: BCS.Type.multi;
    value: number[];
  }

  export interface single {
    type: BCS.Type.single;
    value: number;
  }
}

export type Mimo = Mimo.empty | Mimo.mixed | Mimo.single;

export namespace Mimo {
  export enum Type {
    empty = 'empty',
    mixed = 'mixed',
    single = 'single',
  }

  export interface empty {
    type: Mimo.Type.empty;
  }

  export interface mixed {
    type: Mimo.Type.mixed;
    value: number[];
  }

  export interface single {
    type: Mimo.Type.single;
    value: number;
  }
}

export type Modulation =
  | Modulation.empty
  | Modulation.mixed
  | Modulation.single;

export namespace Modulation {
  export enum Type {
    empty = 'empty',
    mixed = 'mixed',
    single = 'single',
  }

  export interface empty {
    type: Modulation.Type.empty;
  }

  export interface mixed {
    type: Modulation.Type.mixed;
    value: ModulationOrder[];
  }

  export interface single {
    type: Modulation.Type.single;
    value: ModulationOrder;
  }
}

export enum PowerClass {
  none = 'none',
  pc1 = 'pc1',
  pc1dot5 = 'pc1dot5',
  pc2 = 'pc2',
  pc3 = 'pc3',
  pc4 = 'pc4',
  pc5 = 'pc5',
  pc6 = 'pc6',
  pc7 = 'pc7',
}

export enum Rat {
  EUTRA = 'EUTRA',
  UTRA = 'UTRA',
  GERAN_CS = 'GERAN_CS',
  GERAN_PS = 'GERAN_PS',
  CDMA2000_1XRTT = 'CDMA2000_1XRTT',
  NR = 'NR',
  EUTRA_NR = 'EUTRA_NR',
  SPARE1 = 'SPARE1',
}

export enum UeType {
  eMBB = 'eMBB',
  RedCap_R17 = 'RedCap_R17',
}

export interface ComponentLte {
  band: number;
  bwClassDl?: BwClass;
  bwClassUl?: BwClass;
  mimoDl?: Mimo;
  mimoUl?: Mimo;
  modulationDl?: Modulation;
  modulationUl?: Modulation;
}

export enum ModulationOrder {
  none = 'none',
  qam16 = 'qam16',
  qam64 = 'qam64',
  qam256 = 'qam256',
  qam1024 = 'qam1024',
}

export interface BwsNr {
  scs: number;
  bandwidthsDl: number[];
  bandwidthsUl: number[];
}

export interface ComponentNr {
  band: number;
  bwClassDl?: BwClass;
  bwClassUl?: BwClass;
  mimoDl?: Mimo;
  mimoUl?: Mimo;
  modulationDl?: Modulation;
  modulationUl?: Modulation;
  bw90mhzSupported?: boolean;
  maxScs?: number;
  maxBwDl?: Bandwidth;
  maxBwUl?: Bandwidth;
}

export interface BandFilterLte {
  band: number;
  bwClassDl?: BwClass;
  bwClassUl?: BwClass;
}

export interface BandFilterNr {
  band: number;
  maxBwDl?: number;
  maxBwUl?: number;
  maxCCsDl?: number;
  maxCCsUl?: number;
}

export type BwClass = string;

export type Bandwidth =
  | Bandwidth.empty
  | Bandwidth.invalid
  | Bandwidth.mixed
  | Bandwidth.single;

export namespace Bandwidth {
  export enum Type {
    empty = 'empty',
    invalid = 'invalid',
    mixed = 'mixed',
    single = 'single',
  }

  export interface empty {
    type: Bandwidth.Type.empty;
  }

  export interface invalid {
    type: Bandwidth.Type.invalid;
  }

  export interface mixed {
    type: Bandwidth.Type.mixed;
    value: number[];
  }

  export interface single {
    type: Bandwidth.Type.single;
    value: number;
  }
}

export interface LibraryIndex {
  items: IndexLine[];
  multiItems?: MultiIndexLine[];
}

export interface IndexLine {
  id: string;
  timestamp: number;
  description?: string;
  inputs?: string[];
  compressed?: boolean;
  defaultNR?: boolean;
  parserVersion: string;
  metadata?: { [key: string]: string } | null;
}

export interface MultiIndexLine {
  id: string;
  timestamp: number;
  description: string;
  indexLineIds: string[];
  compressed?: boolean;
}

export interface MultiCapabilities {
  capabilitiesList?: Capabilities[];
  description?: string;
  id: string;
}

export interface ServerStatus {
  version: string;
  endpoints: string[];
  logTypes: LogType[];
  maxRequestSize: number;
  searchableFields: SearchableField[];
}

export interface SearchableField {
  name: string;
  type: FieldType;
}

export enum FieldType {
  number = 'number',
  string = 'string',
  strings = 'strings',
  bandDetails = 'bandDetails',
  combos = 'combos',
}

export type RequestCsv =
  | RequestCsv.endc
  | RequestCsv.lteca
  | RequestCsv.nrca
  | RequestCsv.nrdc;

export namespace RequestCsv {
  export enum Type {
    endc = 'endc',
    lteca = 'lteca',
    nrca = 'nrca',
    nrdc = 'nrdc',
  }

  export interface endc {
    type: RequestCsv.Type.endc;
    input: ComboEnDc[];
  }

  export interface lteca {
    type: RequestCsv.Type.lteca;
    input: ComboLte[];
    newCsvFormat?: boolean;
  }

  export interface nrca {
    type: RequestCsv.Type.nrca;
    input: ComboNr[];
  }

  export interface nrdc {
    type: RequestCsv.Type.nrdc;
    input: ComboNrDc[];
  }
}

export interface RequestMultiPart {
  inputIndexes: number[];
  type: LogType;
  subTypes?: string[];
  description?: string;
}

export interface Query {
  criteriaList: Criteria[];
}

export type Criteria =
  | Criteria.bands
  | Criteria.combos
  | Criteria.number
  | Criteria.string
  | Criteria.strings;

export namespace Criteria {
  export enum Type {
    bands = 'bands',
    combos = 'combos',
    number = 'number',
    string = 'string',
    strings = 'strings',
  }

  export interface bands {
    type: Criteria.Type.bands;
    field: FieldBandsDetails;
    comparator: Comparator;
    value?: IBandDetailsValue[] | null;
  }

  export interface combos {
    type: Criteria.Type.combos;
    field: FieldCombos;
    comparator: Comparator;
    value?: IComboValue[] | null;
  }

  export interface number {
    type: Criteria.Type.number;
    field: FieldNumber;
    comparator: Comparator;
    value: number;
  }

  export interface string {
    type: Criteria.Type.string;
    field: FieldString;
    comparator: Comparator;
    value?: string | null;
  }

  export interface strings {
    type: Criteria.Type.strings;
    field: FieldStrings;
    comparator: Comparator;
    value?: string[] | null;
  }
}

export enum FieldBandsDetails {
  LTE_BANDS = 'LTE_BANDS',
  NR_BANDS = 'NR_BANDS',
}

export enum Comparator {
  EQUALS = 'EQUALS',
  NOT_EQUALS = 'NOT_EQUALS',
  GREATER = 'GREATER',
  LESS = 'LESS',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS',
  IS_EMPTY = 'IS_EMPTY',
  IS_NOT_EMPTY = 'IS_NOT_EMPTY',
  HAS_ANY = 'HAS_ANY',
  HAS_ALL = 'HAS_ALL',
  HAS_NONE = 'HAS_NONE',
}

export enum FieldCombos {
  LTE_COMBOS = 'LTE_COMBOS',
  NR_COMBOS = 'NR_COMBOS',
  ENDC_COMBOS = 'ENDC_COMBOS',
  NRDC_COMBOS = 'NRDC_COMBOS',
}

export enum FieldNumber {
  LTE_CATEGORY_DL = 'LTE_CATEGORY_DL',
  LTE_CATEGORY_UL = 'LTE_CATEGORY_UL',
  TIMESTAMP = 'TIMESTAMP',
}

export enum FieldString {
  DESCRIPTION = 'DESCRIPTION',
  LOG_TYPE = 'LOG_TYPE',
}

export enum FieldStrings {
  NSA_BANDS = 'NSA_BANDS',
  SA_BANDS = 'SA_BANDS',
  LTE_ALT_TBS_IND = 'LTE_ALT_TBS_IND',
}

export type IBandDetailsValue = IBandDetailsValue.lte | IBandDetailsValue.nr;

export namespace IBandDetailsValue {
  export enum Type {
    lte = 'lte',
    nr = 'nr',
  }

  export interface lte {
    type: IBandDetailsValue.Type.lte;
    band: number;
    minMimoDl?: number;
    minPowerClass?: PowerClass;
  }

  export interface nr {
    type: IBandDetailsValue.Type.nr;
    band: number;
    minMimoDl?: number;
    minMimoUl?: number;
    minPowerClass?: PowerClass;
    supportedBw?: number;
  }
}

export type IComboValue = IComboValue.mrdc | IComboValue.simple;

export namespace IComboValue {
  export enum Type {
    mrdc = 'mrdc',
    simple = 'simple',
  }

  export interface mrdc {
    type: IComboValue.Type.mrdc;
    dlMaster: IComponentValue[];
    ulMaster: IComponentValue[];
    dlSecondary: IComponentValue[];
    ulSecondary: IComponentValue[];
  }

  export interface simple {
    type: IComboValue.Type.simple;
    dl: IComponentValue[];
    ul: IComponentValue[];
  }
}

export type IComponentValue =
  | IComponentValue.lteDl
  | IComponentValue.lteUl
  | IComponentValue.nrDl
  | IComponentValue.nrUl;

export namespace IComponentValue {
  export enum Type {
    lteDl = 'lteDl',
    lteUl = 'lteUl',
    nrDl = 'nrDl',
    nrUl = 'nrUl',
  }

  export interface lteDl {
    type: IComponentValue.Type.lteDl;
    band: number;
    minBwClass?: BwClass;
    minMimo?: number;
  }

  export interface lteUl {
    type: IComponentValue.Type.lteUl;
    band: number;
    minBwClass?: BwClass;
  }

  export interface nrDl {
    type: IComponentValue.Type.nrDl;
    band: number;
    minBwClass?: BwClass;
    minMimo?: number;
    minMaxBwPerCC?: number;
  }

  export interface nrUl {
    type: IComponentValue.Type.nrUl;
    band: number;
    minBwClass?: BwClass;
    minMimo?: number;
    minMaxBwPerCC?: number;
  }
}
