import { Locale, format } from "date-fns"
import { DateFormat } from "../enums"
import { isInvalidDate } from "./isInvalidDate"

export const formatDateAsNumeral = (date: Date, locale: Locale): string =>
  isInvalidDate(date)
    ? ""
    : format(date, DateFormat.Numeral, {
        locale,
      })
