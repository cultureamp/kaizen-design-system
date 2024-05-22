import type { Locale } from "date-fns"

export const formatDescriptionInputFormat = (locale: Locale): string =>
  locale.formatLong?.date({ width: "short" }).toLowerCase()
