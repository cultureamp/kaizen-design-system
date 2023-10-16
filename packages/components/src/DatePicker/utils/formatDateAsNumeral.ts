import { format } from "date-fns"
import { isInvalidDate } from "~utils/date-controls"
import { DateFormat } from "../enums"

export const formatDateAsNumeral = (date: Date, locale: Locale): string =>
  isInvalidDate(date)
    ? ""
    : format(date, DateFormat.Numeral, {
        locale,
      })
