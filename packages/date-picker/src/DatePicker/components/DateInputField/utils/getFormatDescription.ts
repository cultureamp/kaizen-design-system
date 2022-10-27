export const getFormatDescription = (locale: Locale): string =>
  locale.formatLong?.date({ width: "short" }).toLowerCase()
