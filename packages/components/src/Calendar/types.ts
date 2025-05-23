import { type DateInterval, type DateRange, type DayPickerProps } from 'react-day-picker'
import { type DayOfWeek } from './enums'

export type { DateInterval, DateRange }

export type DisabledDays = DayPickerProps['disabled']

export type DisabledDayMatchers = {
  /**
   * Accepts an array of singluar dates and disables them.
   * e.g. [new Date(2022, 1, 12), new Date(2022, 1, 25)]
   */
  disabledDates?: Date[]

  /**
   * Accepts an array of DayOfWeek values and disables those days throughout
   * the calendar.
   * e.g. [DayOfWeek.Mon, DayOfWeek.Tue]
   */
  disabledDaysOfWeek?: DayOfWeek[]

  /**
   * Accepts an object with a `from` and `to` date. Disables any date
   * inside of that range, including the specified dates.
   * { from: new Date(2022, 1, 12), to: new Date(2022, 1, 16) }
   */
  disabledRange?: DateRange

  /**
   * Accepts an object with a `before` and `after` date. Disables any date
   * inside of that range, excluding the specified dates.
   * { after: new Date(2022, 1, 12), before: new Date(2022, 1, 16) }
   */
  disabledBeforeAfter?: DateInterval

  /**
   * Accepts single date and disables all days before it.
   * */
  disabledBefore?: Date

  /**
   * Accepts single date and disables all days after it.
   */
  disabledAfter?: Date
}
