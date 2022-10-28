import calendarStyles from "../_subcomponents/Calendar/Calendar.module.scss"

export const isSelectingDayInCalendar = (
  target: (EventTarget & Element) | null
): boolean => target?.classList.contains(calendarStyles.day) ?? false
