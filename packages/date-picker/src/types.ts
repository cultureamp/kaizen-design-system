import { DateInterval, DateRange } from "react-day-picker"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { DayOfWeek } from "./enums"

export type { Matcher } from "react-day-picker"

export type { DateInterval, DateRange }

export type DataAttributes = { [key: `data-${string}`]: string | undefined }

export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined

// This isn't recommended TS behaviour, however since we have a fallback in place
// for handling other locales, we have a valid usage of suggesting supported locales.
type StringSuggestions<T> = T | (string & Record<never, never>)

// Ensure you update the storybook SUPPORTED_LOCALES arg options when updating SupportedLocales.
export type SupportedLocales = StringSuggestions<"en-US" | "en-AU">

export type ValidationResponse = {
  date: Date | undefined
  inputValue: string | undefined // Input value upon validation
  status: FieldMessageStatus | undefined
  validationMessage?: string
  isDisabled: boolean
  isInvalid: boolean
  isEmpty: boolean
  isValidDate: boolean // A date is !isDisabled && !isInvalid && !isEmpty
}

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

export type DateRangeValidationStatus = {
  dateStart?: FieldMessageStatus
  dateEnd?: FieldMessageStatus
}

export type DateRangeMessageType = {
  dateStart: React.ReactNode
  dateEnd: React.ReactNode
}

export type DateRangeValidatioMessage = React.ReactNode | DateRangeMessageType

export function isDateRangeMessageType(
  message: DateRangeValidatioMessage
): message is DateRangeMessageType {
  return (
    message != undefined &&
    (message as DateRangeMessageType).dateStart !== undefined &&
    (message as DateRangeMessageType).dateEnd !== undefined
  )
}
