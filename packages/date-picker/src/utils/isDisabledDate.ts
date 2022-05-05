import { Modifier } from "react-day-picker/types/Modifiers"
import { ModifiersUtils } from "react-day-picker"
import { defaultCalendarClasses } from "../DatePicker/components/Calendar/CalendarClasses"

export const isDisabledDate = (
  parsedDate: Date,
  disabledDays: Modifier | Modifier[]
): boolean => {
  // Check if typed day has disabled modifier
  const isTypedDayDisabled = ModifiersUtils.getModifiersForDay(parsedDate, {
    [defaultCalendarClasses.disabled]: disabledDays,
  })

  return isTypedDayDisabled.length !== 0
}
