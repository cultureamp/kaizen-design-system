import { parse } from "date-fns"
import { DateFormat } from "./enums"

export const parseDateFromTextFormatValue = (
  value: string,
  locale: Locale
): Date =>
  parse(value, DateFormat.Text, new Date(), {
    locale,
  })
