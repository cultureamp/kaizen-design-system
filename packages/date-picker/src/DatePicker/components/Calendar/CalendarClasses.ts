/* eslint-disable camelcase */
import { ClassNames } from "react-day-picker"
import calendarStyles from "./Calendar.scss"
export const defaultCalendarClasses: ClassNames = {
  root: `${calendarStyles.container} rdp`,
  months: `${calendarStyles.months} rdp-months`,
  month: `${calendarStyles.month} rdp-month`,
  table: `${calendarStyles.table} rdp-table`,
  caption: `${calendarStyles.caption} rdp-caption`,
  caption_label: `${calendarStyles.captionLabel} rdp-caption_label`,
  head_cell: `${calendarStyles.weekday}`,
  with_weeknumber: "rdp-weeknumber",
  cell: `${calendarStyles.cell} rdp-cell`,
  day: `${calendarStyles.day} rdp-day`,
  tfoot: "rdp-tfoot",
  day_disabled: `${calendarStyles.disabled}`,
  day_range_start: `${calendarStyles.from} rdp-day_range_start`,
  day_range_end: `${calendarStyles.to} rdp-day_range_end`,
  day_range_middle: "rdp-day_range_middle",
  tbody: `${calendarStyles.body} rdp-tbody`,
  day_selected: `${calendarStyles.selected} rdp-day_selected`,
  day_today: `${calendarStyles.today} rdp-day_today`,
  day_outside: `${calendarStyles.outside} rdp-day_outside`,
  nav: `${calendarStyles.nav}`,
  nav_button: `${calendarStyles.navButton}`,
  nav_button_previous: `${calendarStyles.navButtonPrev} rdp-nav_button_previous`,
  nav_button_next: `${calendarStyles.navButtonNext} rdp-nav_button_next`,
}
