import calendarStyles from "../_primitives/Calendar/Calendar.scss"
import { CalendarElement } from "../_primitives/Calendar"
import { isInvalidDate } from "./isInvalidDate"

const isHTMLElement = (element: Element | undefined): element is HTMLElement =>
  element instanceof HTMLElement

export const setFocusInCalendar = (
  calendarElement: CalendarElement,
  selectedDay: Date | undefined
): void => {
  const dayToFocus = calendarElement.getElementsByClassName(
    selectedDay && !isInvalidDate(selectedDay)
      ? calendarStyles.daySelected
      : calendarStyles.dayToday
  )[0]

  if (isHTMLElement(dayToFocus)) dayToFocus.focus()
}
