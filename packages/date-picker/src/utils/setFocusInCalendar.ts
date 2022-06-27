import calendarStyles from "../DatePicker/components/Calendar/Calendar.scss"
import { CalendarElement } from "../DatePicker/components/Calendar/Calendar"

const isHTMLElement = (element: Element | undefined): element is HTMLElement =>
  element instanceof HTMLElement

export const setFocusInCalendar = (
  calendarElement: CalendarElement,
  selectedDay: Date | undefined
): void => {
  const dayToFocus = calendarElement.getElementsByClassName(
    selectedDay && selectedDay.toDateString() !== "Invalid Date"
      ? calendarStyles.daySelected
      : calendarStyles.dayToday
  )[0]

  if (isHTMLElement(dayToFocus)) dayToFocus.focus()
}
