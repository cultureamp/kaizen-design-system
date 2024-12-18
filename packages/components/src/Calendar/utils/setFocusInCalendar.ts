import { type CalendarRangeElement } from '../CalendarRange'
import { type CalendarSingleElement } from '../CalendarSingle'
import calendarStyles from '../baseCalendarClassNames.module.scss'
import { isInvalidDate } from './isInvalidDate'

const isHTMLElement = (element: Element | undefined): element is HTMLElement =>
  element instanceof HTMLElement

export const setFocusInCalendar = (
  calendarElement: CalendarSingleElement | CalendarRangeElement,
  selectedDay: Date | undefined,
): void => {
  const daySelectedOrToday = calendarElement.getElementsByClassName(
    selectedDay && !isInvalidDate(selectedDay)
      ? calendarStyles.daySelected
      : calendarStyles.dayToday,
  )[0]

  const dayToFocus =
    daySelectedOrToday ?? calendarElement.getElementsByClassName(calendarStyles.day)[0]

  if (isHTMLElement(dayToFocus)) dayToFocus.focus()
}
