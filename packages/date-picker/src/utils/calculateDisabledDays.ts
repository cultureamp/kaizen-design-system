import {
  Modifier,
  RangeModifier,
  BeforeAfterModifier,
} from "react-day-picker/types/Modifiers"

import { DayOfWeek } from "../DatePicker/DatePicker"

/**
 * To save the consumer from passing an array of disabledDay options (each being a different object).
 * We have split the options out so the consumer can pass in an individual disabledDay option for ease of use.
 */

export const calculateDisabledDays = (
  disabledDates?: Date[],
  disabledDaysOfWeek?: DayOfWeek[],
  disabledRange?: RangeModifier,
  disabledBeforeAfter?: BeforeAfterModifier,
  disabledBefore?: Date,
  disabledAfter?: Date
): Modifier | Modifier[] => [
  ...(disabledDates ? disabledDates : []),
  disabledDaysOfWeek && {
    daysOfWeek: disabledDaysOfWeek,
  },
  disabledRange && {
    from: disabledRange.from,
    to: disabledRange.to,
  },
  disabledBefore && {
    before: disabledBefore,
  },
  disabledAfter && {
    after: disabledAfter,
  },
  disabledBeforeAfter && {
    before: disabledBeforeAfter.before,
    after: disabledBeforeAfter.after,
  },
]
