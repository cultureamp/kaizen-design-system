import { Matcher } from "react-day-picker"
import { DisabledDayMatchers } from "~types/date-controls"

export const calculateDisabledDays = ({
  disabledDates = [],
  disabledDaysOfWeek,
  disabledRange,
  disabledBeforeAfter,
  disabledBefore,
  disabledAfter,
}: DisabledDayMatchers): Matcher[] =>
  [
    ...disabledDates,
    disabledDaysOfWeek !== undefined && { dayOfWeek: disabledDaysOfWeek },
    disabledRange !== undefined && disabledRange,
    disabledBefore !== undefined && { before: disabledBefore },
    disabledAfter !== undefined && { after: disabledAfter },
    disabledBeforeAfter !== undefined && disabledBeforeAfter,
  ].filter(matcher => matcher !== false)
