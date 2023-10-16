import { DateInterval, DateRange, DayPickerProps } from "react-day-picker"
import { DayOfWeek } from "~components/Calendar/enums"
import { FieldMessageStatus } from "~components/FieldMessage"
import { StringSuggestions } from "~types/StringSuggestions"

export type { DateInterval, DateRange }

// Ensure you update the storybook DATE_PICKER_SUPPORTED_LOCALES arg options when updating DatePickerSupportedLocales.
export type DatePickerSupportedLocales = StringSuggestions<"en-US" | "en-AU">

export type ValidationResponse = {
  date: Date | undefined
  inputValue: string | undefined // Input value upon validation
  status: FieldMessageStatus | undefined
  validationMessage: string | undefined
  isDisabled: boolean
  isInvalid: boolean
  isEmpty: boolean
  isValidDate: boolean // A date is !isDisabled && !isInvalid && !isEmpty
}

export type DisabledDays = DayPickerProps["disabled"]

export interface DisabledDayMatchers {
  /**
   * Accepts an array of singluar dates and disables them.
   * e.g. disabledDates={[new Date(2022, 1, 12), new Date(2022, 1, 25)]}
   */
  disabledDates?: Date[]

  /**
   * Accepts an array of DayOfWeek values and disables those days throughout
   * the calendar.
   * e.g. disabledDaysOfWeek={[DayOfWeek.Mon, DayOfWeek.Tue]}
   */
  disabledDaysOfWeek?: DayOfWeek[]

  /**
   * Accepts an object with a `from` and `to` date. Disables any date
   * inside of that range, including the specified dates.
   * disabledRange={ from: new Date(2022, 1, 12), to: new Date(2022, 1, 16) }
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
