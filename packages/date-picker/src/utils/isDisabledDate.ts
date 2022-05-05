import { Modifier } from "react-day-picker/types/Modifiers"
import { ModifiersUtils } from "react-day-picker"
import { defaultCalendarClasses } from "../DatePicker/components/Calendar/CalendarClasses"

export const isDisabledDate = (
  parsedDate: Date,
  disabledDays: Modifier | Modifier[]
): boolean => {
  const selectedDayDisabledModifiers = ModifiersUtils.getModifiersForDay(
    parsedDate,
    {
      [defaultCalendarClasses.disabled]: disabledDays,
    }
  )

  return selectedDayDisabledModifiers.length !== 0
}
