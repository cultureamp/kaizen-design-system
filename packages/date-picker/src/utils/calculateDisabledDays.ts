import {
  Matcher,
  DateRange,
  DateInterval,
} from "react-day-picker/dist/types/Matchers"

import { DayOfWeek } from "../enums"

/**
 * To save the consumer from passing an array of disabledDay options (each being a different object).
 * We have split the options out so the consumer can pass in an individual disabledDay option for ease of use.
 */

type DisabledDayMatchers = {
  disabledDates?: Date[]
  disabledDaysOfWeek?: DayOfWeek[]
  disabledRange?: DateRange
  disabledBeforeAfter?: DateInterval
  disabledBefore?: Date
  disabledAfter?: Date
}

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
