import { type CalendarRangeElement } from '../CalendarRange'
import { type CalendarSingleElement } from '../CalendarSingle'
import calendarStyles from '../baseCalendarClassNames.module.scss'
import { isInvalidDate } from './isInvalidDate'

export const setFocusInCalendar = (
  calendarElement: CalendarSingleElement | CalendarRangeElement,
  selectedDay: Date | undefined,
): void => {
  const dayClass =
    selectedDay && !isInvalidDate(selectedDay)
      ? `.${calendarStyles.daySelected}`
      : `.${calendarStyles.dayToday}`

  let dayToFocus = calendarElement.querySelector(`${dayClass} button`)

  // RDP v9 puts the day class on the button inside the table cell whereas today and selected appear on the table cell
  dayToFocus ??= calendarElement.querySelector(`.${calendarStyles.day}`)

  if (dayToFocus instanceof HTMLElement) {
    dayToFocus.focus()
  }
}
