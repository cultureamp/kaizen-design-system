import calendarStyles from "../Calendar.module.scss"

export const isSelectingDayInCalendar = (
  target: (EventTarget & Element) | null
): boolean => target?.classList?.contains(calendarStyles.day) ?? false
