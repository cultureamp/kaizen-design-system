/* eslint-disable camelcase */
import { ClassNames } from "react-day-picker"
import calendarStyles from "./Calendar.module.scss"
import calendarRangeStyles from "./CalendarRange.module.scss"
import calendarSingleStyles from "./CalendarSingle.module.scss"

const baseCalendarClasses: ClassNames = {
  vhidden: calendarStyles.vHidden,
  root: calendarStyles.root,
  months: calendarStyles.months,
  button_reset: calendarStyles.buttonReset,
  button: calendarStyles.button,
  caption: calendarStyles.caption,
  caption_label: calendarStyles.captionLabel,
  nav_button: calendarStyles.navButton,
  table: calendarStyles.table,
  head_cell: calendarStyles.weekday,
  cell: calendarStyles.cell,
  day: calendarStyles.day,
  tbody: calendarStyles.tbody,
  day_today: calendarStyles.dayToday,
  day_selected: calendarStyles.daySelected,
  day_disabled: calendarStyles.dayDisabled,
}

export const calendarSingleClasses: ClassNames = {
  ...baseCalendarClasses,
  nav: calendarSingleStyles.nav,
  nav_button_next: calendarSingleStyles.navButtonNext,
}

export const legacyCalendarRangeClasses: ClassNames = {
  ...calendarSingleClasses,
  day_range_start: calendarRangeStyles.dayRangeStart,
  day_range_end: calendarRangeStyles.dayRangeEnd,
  day_range_middle: calendarRangeStyles.dayRangeMiddle,
}

export const calendarRangeClasses = (hasDivider: boolean): ClassNames => ({
  ...baseCalendarClasses,
  month: hasDivider
    ? calendarRangeStyles.monthWithDivider
    : calendarRangeStyles.month,
  caption_end: calendarRangeStyles.captionEnd,
  nav: calendarRangeStyles.nav,
  day_range_start: calendarRangeStyles.dayRangeStart,
  day_range_end: calendarRangeStyles.dayRangeEnd,
  day_range_middle: calendarRangeStyles.dayRangeMiddle,
})
