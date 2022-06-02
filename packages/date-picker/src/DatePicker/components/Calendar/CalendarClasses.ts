/* eslint-disable camelcase */
import { ClassNames } from "react-day-picker"
import calendarStyles from "./Calendar.scss"
export const defaultCalendarClasses: ClassNames = {
  root: `${calendarStyles.container}`,
  months: `${calendarStyles.months}`,
  month: `${calendarStyles.month}`,
  table: `${calendarStyles.table}`,
  caption: `${calendarStyles.caption}`,
  caption_label: `${calendarStyles.captionLabel}`,
  head_cell: `${calendarStyles.weekday}`,
  cell: `${calendarStyles.cell}`,
  day: `${calendarStyles.day}`,
  day_range_start: `${calendarStyles.from}`,
  day_range_end: `${calendarStyles.to}`,
  day_range_middle: `${calendarStyles.middle}`,
  tbody: `${calendarStyles.body}`,
  day_selected: `${calendarStyles.selected}`,
  day_today: `${calendarStyles.today}`,
  day_outside: `${calendarStyles.outside}`,
  nav: `${calendarStyles.nav}`,
  nav_button: `${calendarStyles.navButton}`,
  nav_button_previous: `${calendarStyles.navButtonPrev}`,
  nav_button_next: `${calendarStyles.navButtonNext}`,
  button_reset: `${calendarStyles.buttonReset}`,
  button: `${calendarStyles.button}`,
}
