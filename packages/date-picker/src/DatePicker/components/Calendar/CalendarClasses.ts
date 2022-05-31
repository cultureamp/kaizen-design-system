/* eslint-disable camelcase */
import calendarStyles from "./Calendar.scss"

export const defaultCalendarClasses = {
  container: "DayPicker",
  wrapper: `${calendarStyles.wrapper} DayPicker-wrapper`,
  interactionDisabled: `${calendarStyles.interactionDisabled} DayPicker--interactionDisabled`,
  months: `${calendarStyles.months} rdp-months`,
  month: `${calendarStyles.month} rdp-month`,
  table: `${calendarStyles.table} rdp-table`,
  navBar: "DayPicker-NavBar",
  navButtonPrev: "DayPicker-NavButton DayPicker-NavButton--prev",
  navButtonNext: "DayPicker-NavButton DayPicker-NavButton--next",
  navButtonInteractionDisabled: "DayPicker-NavButton--interactionDisabled",
  caption: `${calendarStyles.caption} rdp-caption`,
  caption_label: `${calendarStyles.captionLabel} rdp-caption_label`,
  weekdays: "rdp-weekdays",
  head_cell: `${calendarStyles.weekday}`,
  week: "rdp-week",
  weekNumber: "rdp-weeknumber",
  cell: `${calendarStyles.cell} rdp-cell`,
  day: `${calendarStyles.day} rdp-day`,
  footer: "rdp-tfoot",
  disabled: `${calendarStyles.disabled}`,
  outside: `${calendarStyles.outside} rdp-day_outside`,
  from: `${calendarStyles.from} rdp-day_range_start`,
  to: `${calendarStyles.to} rdp-day_range_end`,
  middle: "rdp-day_range_middle",
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
