import { DateInterval, DateRange } from "react-day-picker"
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
