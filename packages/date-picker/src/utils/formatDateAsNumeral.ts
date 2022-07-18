import { format } from "date-fns"
import { DateFormat } from "../enums"
import { isInvalidDate } from "./isInvalidDate"

export const formatDateAsNumeral = (date: Date, locale: Locale): string =>
  isInvalidDate(date)
    ? "Invalid Date"
    : format(date, DateFormat.Numeral, {
        locale,
      })
