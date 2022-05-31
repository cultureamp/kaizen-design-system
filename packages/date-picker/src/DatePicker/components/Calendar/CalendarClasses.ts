/* eslint-disable camelcase */
import calendarStyles from "./Calendar.scss"

export const defaultCalendarClasses = {
  root: `${calendarStyles.container} rdp`,
  interactionDisabled: `${calendarStyles.interactionDisabled} DayPicker--interactionDisabled`,
  months: `${calendarStyles.months} rdp-months`,
  month: `${calendarStyles.month} rdp-month`,
  table: `${calendarStyles.table} rdp-table`,
  caption: `${calendarStyles.caption} rdp-caption`,
  caption_label: `${calendarStyles.captionLabel} rdp-caption_label`,
  weekdays: "rdp-weekdays",
  head_cell: `${calendarStyles.weekday}`,
  week: "rdp-week",
  with_weeknumber: "rdp-weeknumber",
  cell: `${calendarStyles.cell} rdp-cell`,
  day: `${calendarStyles.day} rdp-day`,
  tfoot: "rdp-tfoot",
  disabled: `${calendarStyles.disabled}`,
  day_range_start: `${calendarStyles.from} rdp-day_range_start`,
  day_range_end: `${calendarStyles.to} rdp-day_range_end`,
  day_range_middle: "rdp-day_range_middle",
  range: `${calendarStyles.range} rdp-range`,
  tbody: `${calendarStyles.body} rdp-tbody`,
  day_selected: `${calendarStyles.selected} rdp-day_selected`,
  day_today: `${calendarStyles.today} rdp-day_today`,
  day_outside: `${calendarStyles.outside} rdp-day_outside`,
  nav: `${calendarStyles.nav}`,
  nav_button: `${calendarStyles.navButton}`,
  nav_button_previous: `${calendarStyles.navButtonPrev} rdp-nav_button_previous`,
  nav_button_next: `${calendarStyles.navButtonNext} rdp-nav_button_next`,
}
