import type { Locale } from "date-fns"
import { parseDateFromNumeralFormatValue } from "./parseDateFromNumeralFormatValue"
import { parseDateFromTextFormatValue } from "./parseDateFromTextFormatValue"

export const parseDateAsTextOrNumeral = (
  value: string,
  locale: Locale
): Date => {
  const parsedAsText = parseDateFromTextFormatValue(value, locale)
  if (parsedAsText.toString() !== "Invalid Date") return parsedAsText

  return parseDateFromNumeralFormatValue(value, locale)
}
