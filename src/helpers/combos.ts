import type {
  ComponentLte,
  ComponentNr,
  Mimo,
  BCS,
  Modulation,
  ModulationOrder,
  Bandwidth,
} from '~/@types/uecapabilityparser';

type Component = ComponentLte | ComponentNr;
const minMultiplier = 4;

interface featureWithMultiplier {
  basicFeature: string[];
  multiplier: number;
}

export function bcsToStr(bcs?: BCS): string {
  switch (bcs?.type) {
    case 'all':
      return 'All';
    case 'single':
      return (bcs as BCS.single).value.toString();
    case 'multi':
      return (bcs as BCS.multi).value.join(', ');
    default:
      return '';
  }
}

function equalsArray<T>(a: T[], b: T[]) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function multipleComponentsToStr(
  component: Component,
  multiplier: number,
  minMultiplier: number,
  direction: 'dl' | 'ul',
) {
  const result: string[] = [];
  if (multiplier >= minMultiplier) {
    const bwClass =
      direction === 'dl' ? component.bwClassDl : component.bwClassUl;
    const str = `<span class="font-semibold B${component.band}">${component.band}(${multiplier}${bwClass})</span>`;
    result.push(str);
  } else {
    for (let i = 0; i < multiplier; i++) {
      const bwClass =
        direction === 'dl' ? component.bwClassDl : component.bwClassUl;
      const str = `<span class="font-semibold B${component.band}">${component.band}${bwClass}</span>`;
      result.push(str);
    }
  }

  return result;
}

function multipleFeaturesToStr(
  feature: featureWithMultiplier,
  multiplier: number,
  minMultiplier: number,
) {
  const nonMixedFeature = feature.basicFeature.length === 1;
  const basicString = feature.basicFeature.join('+');
  const result: string[] = [];
  let tempString: string;

  if (minMultiplier <= multiplier) {
    const totalMultiplier = multiplier * feature.multiplier;
    if (nonMixedFeature) {
      tempString = `${basicString}(*${totalMultiplier})`;
    } else {
      tempString = `${basicString}+`.repeat(totalMultiplier).slice(0, -1);
    }
    result.push(tempString);
  } else {
    if (nonMixedFeature && minMultiplier <= feature.multiplier) {
      tempString = `${basicString}(*${feature.multiplier})`;
    } else {
      tempString = `${basicString}+`.repeat(feature.multiplier).slice(0, -1);
    }
    for (let i = 0; i < multiplier; i++) {
      result.push(tempString);
    }
  }

  return result;
}

function lteBwClassCCs(bwClass: string) {
  switch (bwClass) {
    case 'A':
      return 1;
    case 'B':
    case 'C':
      return 2;
    case 'D':
      return 3;
    case 'E':
      return 4;
    case 'F':
      return 5;
    default:
      console.warn(`lteBwClassCCs: ${bwClass} is invalid`);
      return 1;
  }
}

function nrFr1BwClassCCs(bwClass: string) {
  switch (bwClass) {
    case 'A':
      return 1;
    case 'B':
    case 'C':
      return 2;
    case 'D':
    case 'G':
    case 'M':
      return 3;
    case 'E':
    case 'H':
    case 'N':
      return 4;
    case 'I':
    case 'O':
      return 5;
    case 'J':
      return 6;
    case 'K':
      return 7;
    case 'L':
      return 8;
    default:
      console.warn(`nrFr1BwClassCCs: ${bwClass} is invalid`);
      return 1;
  }
}

function nrFr2BwClassCCs(bwClass: string) {
  switch (bwClass) {
    case 'A':
      return 1;
    case 'B':
    case 'D':
    case 'G':
    case 'O':
    case 'R2':
      return 2;
    case 'C':
    case 'E':
    case 'H':
    case 'P':
    case 'R3':
      return 3;
    case 'V':
    case 'F':
    case 'I':
    case 'Q':
    case 'R4':
      return 4;
    case 'W':
    case 'R':
    case 'J':
    case 'R5':
      return 5;
    case 'S':
    case 'K':
    case 'R6':
      return 6;
    case 'T':
    case 'L':
    case 'R7':
      return 7;
    case 'U':
    case 'M':
    case 'R8':
      return 8;
    case 'R9':
      return 9;
    case 'R10':
      return 10;
    case 'R11':
      return 11;
    case 'R12':
      return 12;
    default:
      console.warn(`nrFr2BwClassCCs: ${bwClass} is invalid`);
      return 1;
  }
}

function modulationOrderToStr(modulationOrder: ModulationOrder) {
  switch (modulationOrder) {
    case 'qam16':
      return '16'; // QAM';
    case 'qam64':
      return '64'; // QAM';
    case 'qam256':
      return '256'; // QAM';
    case 'qam1024':
      return '1024'; // QAM';
    default:
      return '';
  }
}

function mimoToFeature(
  band: number,
  mimo?: Mimo,
  bwClass?: string,
  nr: boolean = false,
) {
  if (mimo === undefined || bwClass === undefined || mimo.type === 'empty') {
    return null;
  }

  const multiplier = bwClassCCs(band, bwClass, nr);

  const value = mimo.value;
  let result: featureWithMultiplier;
  if (Array.isArray(value)) {
    result = {
      basicFeature: value.map((x) => x.toString()),
      multiplier: 1,
    };
  } else {
    result = {
      basicFeature: [value.toString()],
      multiplier: multiplier,
    };
  }

  return result;
}

function bwClassCCs(band: number, bwClass: string, nr: boolean) {
  let multiplier: number;
  if (!nr) {
    multiplier = lteBwClassCCs(bwClass);
  } else if (band <= 256) {
    multiplier = nrFr1BwClassCCs(bwClass);
  } else {
    multiplier = nrFr2BwClassCCs(bwClass);
  }
  return multiplier;
}

function modToFeatures(
  band: number,
  mod?: Modulation,
  bwClass?: string,
  nr: boolean = false,
) {
  if (mod === undefined || bwClass === undefined || mod.type === 'empty') {
    return null;
  }

  const multiplier = bwClassCCs(band, bwClass, nr);
  const value = mod.value;
  let result: featureWithMultiplier;
  if (Array.isArray(value)) {
    const feature = value.map((x) => modulationOrderToStr(x));
    result = {
      basicFeature: feature,
      multiplier: 1,
    };
  } else {
    result = {
      basicFeature: [modulationOrderToStr(value)],
      multiplier: multiplier,
    };
  }

  return result;
}

function scsToFeatures(band: number, scs?: number, bwClass?: string) {
  if (scs === undefined || bwClass === undefined) {
    return null;
  }

  const multiplier = bwClassCCs(band, bwClass, true);
  const result: featureWithMultiplier = {
    basicFeature: [scs.toString()],
    multiplier: multiplier,
  };

  return result;
}

function singleBwToFeatures(band: number, bw?: number, bwClass?: string) {
  if (bw === undefined || bwClass === undefined) {
    return null;
  }

  const multiplier = bwClassCCs(band, bwClass, true);
  const result: featureWithMultiplier = {
    basicFeature: [bw.toString()],
    multiplier: multiplier,
  };

  return result;
}

function multiBwToFeatures(band: number, bw?: Bandwidth, bwClass?: string) {
  if (bw === undefined || bwClass === undefined || bw.type === 'empty') {
    return null;
  }

  if (bw.type == 'invalid') {
    return {
      basicFeature: ['?'],
      multiplier: 1,
    };
  }

  if (bw.type == 'single') {
    return singleBwToFeatures(band, bw.value, bwClass);
  }

  const value = bw.value;
  const feature = value.map((x) => x.toString());
  const result: featureWithMultiplier = {
    basicFeature: feature,
    multiplier: 1,
  };

  return result;
}

function dlEquals(a: Component, b: Component, nr?: boolean) {
  return (
    a.band === b.band &&
    a.bwClassDl === b.bwClassDl &&
    mimoEquals(a.mimoDl, b.mimoDl) &&
    modEquals(a.modulationDl, b.modulationDl) &&
    (!nr || equalsBwScs(a, b, true))
  );
}

function ulEquals(a: Component, b: Component, nr?: boolean) {
  return (
    a.band === b.band &&
    a.bwClassUl === b.bwClassUl &&
    mimoEquals(a.mimoUl, b.mimoUl) &&
    modEquals(a.modulationUl, b.modulationUl) &&
    (!nr || equalsBwScs(a, b, false))
  );
}

function mimoEquals(a?: Mimo, b?: Mimo) {
  if (
    a === undefined ||
    b === undefined ||
    a.type === 'empty' ||
    b.type === 'empty'
  ) {
    return a?.type === b?.type;
  }
  const mimoA = a.value;
  const mimoB = b.value;
  if (Array.isArray(mimoA) && Array.isArray(mimoB)) {
    if (!equalsArray(mimoA, mimoB)) {
      return false;
    }
  } else if (mimoA !== mimoB) {
    return false;
  }
  return true;
}

function modEquals(a?: Modulation, b?: Modulation) {
  if (
    a === undefined ||
    b === undefined ||
    a?.type === 'empty' ||
    b?.type === 'empty'
  ) {
    return a?.type === b?.type;
  }
  const modA = a.value;
  const modB = b.value;
  if (Array.isArray(modA) && Array.isArray(modB)) {
    if (!equalsArray(modA, modB)) {
      return false;
    }
  } else if (modA !== modB) {
    return false;
  }
  return true;
}

function bwEquals(a?: Bandwidth, b?: Bandwidth) {
  if (
    a === undefined ||
    b === undefined ||
    a?.type === 'empty' ||
    b?.type === 'empty' ||
    a?.type === 'invalid' ||
    b?.type === 'invalid'
  ) {
    return a?.type === b?.type;
  }
  const bwA = a.value;
  const bwB = b.value;
  if (Array.isArray(bwA) && Array.isArray(bwB)) {
    if (!equalsArray(bwA, bwB)) {
      return false;
    }
  } else if (bwA !== bwB) {
    return false;
  }
  return true;
}

function equalsBwScs(component: ComponentNr, other: ComponentNr, dl: boolean) {
  return (
    other.maxScs === component.maxScs &&
    other.bw90mhzSupported === component.bw90mhzSupported &&
    (!dl || bwEquals(other.maxBwDl, component.maxBwDl)) &&
    (dl || bwEquals(other.maxBwUl, component.maxBwUl))
  );
}

function groupComponentsDl(components: Component[], nr?: boolean) {
  const array: Component[][] = [];
  let prevComponent: Component | undefined = undefined;
  for (const component of components) {
    if (component.bwClassDl === undefined) {
      continue;
    }
    if (prevComponent != undefined && dlEquals(component, prevComponent, nr)) {
      array.at(-1)!.push(component);
    } else {
      array.push([component]);
    }
    prevComponent = component;
  }
  return array;
}

function groupComponentsUl(components: Component[], nr?: boolean) {
  const array: Component[][] = [];
  let prevComponent: Component | undefined = undefined;
  for (const component of components) {
    if (component.bwClassUl === undefined) {
      continue;
    }
    if (prevComponent !== undefined && ulEquals(component, prevComponent, nr)) {
      array.at(-1)!.push(component);
    } else {
      array.push([component]);
    }
    prevComponent = component;
  }
  return array;
}

export function componentsDlToStr(
  components: Component[],
  nr?: boolean,
): string {
  const result = groupComponentsDl(components, nr).flatMap((value) =>
    multipleComponentsToStr(value[0], value.length, minMultiplier, 'dl'),
  );
  return result.join(' + ');
}

export function componentsUlToStr(
  components: Component[],
  nr?: boolean,
): string {
  const result = groupComponentsUl(components, nr).flatMap((value) =>
    multipleComponentsToStr(value[0], value.length, minMultiplier, 'ul'),
  );
  return result.join(' + ');
}

export function componentsMimoDlToStr(
  components: Component[],
  nr: boolean = false,
): string {
  const result: string[] = [];
  groupComponentsDl(components, nr).flatMap((value) => {
    const component = value[0];
    const mimoFeature = mimoToFeature(
      component.band,
      component.mimoDl,
      component.bwClassDl,
      nr,
    );
    if (mimoFeature !== null) {
      result.push(
        ...multipleFeaturesToStr(mimoFeature, value.length, minMultiplier),
      );
    }
  });
  return result.join(' + ');
}

export function componentsMimoUlToStr(
  components: Component[],
  nr: boolean = false,
): string {
  const result: string[] = [];
  groupComponentsUl(components, nr).forEach((value) => {
    const component = value[0];
    const mimoStr = mimoToFeature(
      component.band,
      component.mimoUl,
      component.bwClassUl,
      nr,
    );
    if (mimoStr !== null) {
      result.push(
        ...multipleFeaturesToStr(mimoStr, value.length, minMultiplier),
      );
    }
  });
  return result.join(' + ');
}

export function componentsModDlToStr(
  components: Component[],
  nr: boolean = false,
): string {
  const result: string[] = [];
  groupComponentsDl(components, nr).forEach((value) => {
    const component = value[0];
    const modStr = modToFeatures(
      component.band,
      component.modulationDl,
      component.bwClassDl,
      nr,
    );
    if (modStr !== null) {
      if (modStr.basicFeature.length === 1) {
        result.push(modStr.basicFeature[0]);
      } else {
        result.push(...multipleFeaturesToStr(modStr, value.length, 1));
      }
    }
  });
  const firstMod = result[0];
  const allEquals = result.every((mod) => mod === firstMod);
  return allEquals ? firstMod : result.join(' + ');
}

export function componentsModUlToStr(
  components: Component[],
  nr: boolean = false,
): string {
  const result: string[] = [];
  groupComponentsUl(components, nr).forEach((value) => {
    const component = value[0];
    const modStr = modToFeatures(
      component.band,
      component.modulationUl,
      component.bwClassUl,
      nr,
    );
    if (modStr !== null) {
      if (modStr.basicFeature.length === 1) {
        result.push(modStr.basicFeature[0]);
      } else {
        result.push(
          ...multipleFeaturesToStr(modStr, value.length, minMultiplier),
        );
      }
    }
  });
  const firstMod = result[0];
  const allEquals = result.every((mod) => mod === firstMod);
  return allEquals ? firstMod : result.join(' + ');
}

export function componentsScsDlToStr(components: ComponentNr[]): string {
  const result: string[] = [];
  groupComponentsDl(components, true).forEach((value) => {
    const component = value[0] as ComponentNr;
    const scsStr = scsToFeatures(
      component.band,
      component.maxScs,
      component.bwClassDl,
    );
    if (scsStr !== null) {
      result.push(
        ...multipleFeaturesToStr(scsStr, value.length, minMultiplier),
      );
    }
  });
  return result.join(' + ');
}

export function componentsScsUlToStr(components: ComponentNr[]): string {
  const result: string[] = [];
  groupComponentsUl(components, true).forEach((value) => {
    const component = value[0] as ComponentNr;
    const scsStr = scsToFeatures(
      component.band,
      component.maxScs,
      component.bwClassUl,
    );
    if (scsStr !== null) {
      result.push(
        ...multipleFeaturesToStr(scsStr, value.length, minMultiplier),
      );
    }
  });
  return result.join(' + ');
}

export function componentsBwDlToStr(components: ComponentNr[]): string {
  const result: string[] = [];
  groupComponentsDl(components, true).forEach((value) => {
    const component = value[0] as ComponentNr;
    const bwStr = multiBwToFeatures(
      component.band,
      component.maxBwDl,
      component.bwClassDl,
    );

    if (bwStr !== null) {
      result.push(...multipleFeaturesToStr(bwStr, value.length, minMultiplier));
    }
  });
  return result.join(' + ');
}

export function componentsBwUlToStr(components: ComponentNr[]): string {
  const result: string[] = [];
  groupComponentsUl(components, true).forEach((value) => {
    const component = value[0] as ComponentNr;
    const bwStr = multiBwToFeatures(
      component.band,
      component.maxBwUl,
      component.bwClassUl,
    );

    if (bwStr !== null) {
      result.push(...multipleFeaturesToStr(bwStr, value.length, minMultiplier));
    }
  });
  return result.join(' + ');
}
