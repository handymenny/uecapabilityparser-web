// Automatically generated. Don't edit.
// Run gradlew genTsTypes to update this file.
export interface Capabilities {
  lteca?: ComboLte[];
  lteBands?: BandLteDetails[];
  nrNsaBandsEutra?: BandNrDetails[];
  nrSaBandsEutra?: BandNrDetails[];
  nrBands?: BandNrDetails[];
  lteCategoryDl?: number;
  lteCategoryUl?: number;
  endc?: ComboEnDc[];
  nrca?: ComboNr[];
  nrdc?: ComboNrDc[];
  logType: string;
  ueCapFilters?: IUeCapabilityFilter[];
  parserVersion: string;
  timestamp: number;
  metadata: { [key: string]: string };
  id?: string;
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
    lteBands?: BandFilterLte[];
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
  qpsk = 'qpsk',
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
  maxBw?: number;
  bw90mhzSupported?: boolean;
  maxScs?: number;
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
