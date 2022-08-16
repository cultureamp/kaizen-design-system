/* eslint-disable camelcase */
import { ClassNames } from "react-day-picker"
import calendarStyles from "./Calendar.module.scss"

export const defaultCalendarClasses: ClassNames = {
  root: calendarStyles.container,
  vhidden: calendarStyles.vHidden,
  months: calendarStyles.months,
  month: calendarStyles.month,
  table: calendarStyles.table,
  caption: calendarStyles.caption,
  caption_label: calendarStyles.captionLabel,
  nav: calendarStyles.nav,
  nav_button: calendarStyles.navButton,
  nav_button_previous: calendarStyles.navButtonPrev,
  nav_button_next: calendarStyles.navButtonNext,
  head_cell: calendarStyles.weekday,
  cell: calendarStyles.cell,
  day: calendarStyles.day,
  day_range_start: calendarStyles.dayRangeStart,
  day_range_end: calendarStyles.dayRangeEnd,
  day_range_middle: calendarStyles.dayRangeMiddle,
  tbody: calendarStyles.tbody,
  day_selected: calendarStyles.daySelected,
  day_today: calendarStyles.dayToday,
  day_outside: calendarStyles.outside,
  button_reset: calendarStyles.buttonReset,
  button: calendarStyles.button,
}
