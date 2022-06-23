import { format } from "date-fns"
import { Matcher } from "react-day-picker"
import { DateFormat } from "../DatePicker/enums"
import { isDisabledDate } from "./isDisabledDate"
import { isInvalidDate } from "./isInvalidDate"

export const formatDateAsText = (
  date: Date,
  disabledDays: Matcher[] | undefined,
  onFormat: (newFormattedDate: string) => void
): void => {
  if (isDisabledDate(date, disabledDays)) {
    return onFormat(format(date, DateFormat.Numeral))
  }
  if (isInvalidDate(date)) {
    return onFormat("Invalid Date")
  }
  onFormat(format(date, DateFormat.Text))
}
