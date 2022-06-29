import { format } from "date-fns"
import { Matcher } from "react-day-picker"
import { DateFormat } from "../DatePicker/enums"
import { isDisabledDate } from "./isDisabledDate"
import { isInvalidDate } from "./isInvalidDate"

export const formatDateAsText = (
  date: Date,
  disabledDays: Matcher[] | undefined,
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
