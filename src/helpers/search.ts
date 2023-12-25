import type { FuzzySearcher } from '@nozbe/microfuzz';
import createFuzzySearch from '@nozbe/microfuzz';

const libraryFuzzer: Record<string, FuzzySearcher<any>> = {};

const getText = (item: any, keys: string[]) =>
  keys.map((key) => {
    if (key != 'timestamp') {
      return item[key];
    } else {
      return new Date(item.timestamp).toLocaleString().replace(', ', ' ');
    }
  });

export const initializeFuzzySearcher = (
  id: string,
  keys: string[],
  data: any,
) => {
  libraryFuzzer[id] = createFuzzySearch(data, {
    getText: (item) => getText(item, keys),
  });
};

export const searchFuzzyLibrary = (id: string, value: string) => {
  return libraryFuzzer[id]?.(value).map((it) => it.item.id) ?? [];
};
