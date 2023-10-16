import { parse } from "date-fns"
import { DateFormat } from "./enums"

export const parseDateFromNumeralFormatValue = (
  value: string,
  locale: Locale
): Date =>
  parse(value, DateFormat.Numeral, new Date(), {
    locale,
  })
