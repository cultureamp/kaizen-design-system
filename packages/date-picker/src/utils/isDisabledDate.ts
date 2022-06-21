import { isMatch, Matcher } from "react-day-picker"

export const isDisabledDate = (
  date: Date,
  disabledDays: Matcher[] | undefined
): boolean => (disabledDays === undefined ? false : isMatch(date, disabledDays))
