export function scoreDescription(description: string): number {
  const stats = getStats(description);
  const boostCjk = 3;
  const maxWordCount = 5;
  const minWordCount = 1.5;
  const boostRepetitions = 1.05;
  const onlyDigitsMalus = -0.75;
  const digitsBonus = 0.5;
  const boostDigits =
    stats.lenWoSpaces - stats.digitsCount > 0 ? digitsBonus : onlyDigitsMalus;

  let score = stats.lenWoSpaces;
  score += stats.cjkCount * boostCjk;
  score += stats.digitsCount * boostDigits;
  score -= stats.repetitions * boostRepetitions;
  score *= Math.max(Math.min(stats.wordCount, maxWordCount), minWordCount);
  score *= stats.wordAvgLen;

  return Math.max(0, score);
}

function getStats(description: string) {
  const cleanDescription = cleanTextDescription(description);
  const totalLen = cleanDescription.length;
  const lenWoSpaces = totalLen - (cleanDescription.match(/\s/g)?.length ?? 0);
  const words = cleanDescription.split(' ');
  const wordCount = words.length;
  const wordAvgLen = wordCount > 0 ? lenWoSpaces / wordCount : 0;

  const repetitions = [...new Set(description)]
    .filter((char) => /[a-z3-8]/.test(char))
    .reduce((sum, char) => {
      const count = description.match(new RegExp(char, 'g'))?.length ?? 0;
      if (count > 1) {
        return sum + count;
      } else {
        return sum;
      }
    }, 0);

  const cjkCount = [...description].filter(
    (char) => char >= '\u4e00' && char <= '\u9fff',
  ).length;

  const digitsCount = description.match(/\d/g)?.length ?? 0;
  return {
    lenWoSpaces,
    digitsCount,
    cjkCount,
    repetitions,
    wordCount,
    wordAvgLen,
  };
}

function cleanTextDescription(description: string) {
  let cleanDescription = description.toLowerCase().trim();

  const replacements = [
    // ignore these words
    { pattern: /test/g, replace: 't' },
    { pattern: /1234/g, replace: '1' },
    { pattern: /prova/g, replace: 'p' },
    { pattern: /combo|cap|ca/g, replace: 'c' },
    { pattern: /abc|asd/g, replace: 'a' },
    { pattern: /sdf/g, replace: 's' },
    { pattern: /qwe/g, replace: 'q' },
    { pattern: /xyz/g, replace: 'x' },
    { pattern: /mod/g, replace: 'm' },
    // ignore quotes
    { pattern: /['"]/g, replace: '' },
    // convert dashes and underscores to spaces
    { pattern: /[-_]/g, replace: ' ' },
    // ignore multiple spaces
    { pattern: /\s+/g, replace: ' ' },
  ];

  for (const { pattern, replace } of replacements) {
    cleanDescription = cleanDescription.replace(pattern, replace);
  }
  return cleanDescription;
}

export const isPowerOfBase = (num: number, base: number): boolean => {
  if (num <= 0 || base <= 1) return false;
  const lnBase = Math.log(base);
  const log = Math.log(num) / lnBase;
  const rounded = Math.round(log);

  return num == Math.pow(base, rounded);
};
