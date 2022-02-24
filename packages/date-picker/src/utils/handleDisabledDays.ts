import {
  Modifier,
  RangeModifier,
  BeforeAfterModifier,
} from "react-day-picker/types/Modifiers"

import { DayOfWeek } from "../DatePicker/DatePicker"
import { daysToNumbers } from "./daysToNumbers"

export const handleDisableDays = (
  disabledDates: Date[] | undefined,
  disabledDaysOfWeek: DayOfWeek[] | undefined,
  disabledRange: RangeModifier | undefined,
  disabledBeforeAfter: BeforeAfterModifier | undefined,
  disabledBefore: Date | undefined,
  disabledAfter: Date | undefined
): Modifier | Modifier[] => [
  ...(disabledDates ? disabledDates : []),
  {
    daysOfWeek: disabledDaysOfWeek ? daysToNumbers(disabledDaysOfWeek) : [],
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
