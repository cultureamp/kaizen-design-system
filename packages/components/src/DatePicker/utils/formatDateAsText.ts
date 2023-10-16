import { format } from "date-fns"
import { isInvalidDate } from "~utils/date-controls"
import { DateFormat } from "../enums"
import { DisabledDays } from "../types"
import { isDisabledDate } from "./isDisabledDate"

export const formatDateAsText = (
  date: Date,
  disabledDays: DisabledDays,
  locale: Locale
): string => {
  if (isDisabledDate(date, disabledDays)) {
    return format(date, DateFormat.Numeral, { locale })
  }
  if (isInvalidDate(date)) {
    return "Invalid Date"
  }
  return format(date, DateFormat.Text, { locale })
}
