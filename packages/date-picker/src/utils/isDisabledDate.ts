import { isMatch } from "react-day-picker"
import { DisabledDays } from "../types"

export const isDisabledDate = (
  date: Date,
  disabledDays: DisabledDays
): boolean =>
  disabledDays === undefined
    ? false
    : isMatch(date, Array.isArray(disabledDays) ? disabledDays : [disabledDays])
