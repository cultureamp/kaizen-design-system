import { isMatch } from "react-day-picker"
import { Matcher } from "../types"

export const isDisabledDate = (
  date: Date,
  disabledDays: Matcher[] | undefined
): boolean => (disabledDays === undefined ? false : isMatch(date, disabledDays))
