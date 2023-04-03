import React from "react"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { StringSuggestions } from "~types/StringSuggestions"

export type { DateRange, DisabledDays } from "@kaizen/date-picker/src/types"

// Ensure you update the storybook SUPPORTED_LOCALES arg options when updating SupportedLocales.
export type SupportedLocales = StringSuggestions<"en-US" | "en-AU">

export type DateValidationResponse = {
  date: Date | undefined
  inputValue: string | undefined // Input value upon validation
  validationMessage: ValidationMessage | undefined
  isDisabled: boolean
  isInvalid: boolean
  isEmpty: boolean
  isValidDate: boolean // A date is !isDisabled && !isInvalid && !isEmpty
}

export type ValidationMessage = {
  status: FieldMessageStatus
  message: string | React.ReactElement
}

export type DateRangeFieldValidationMessage = {
  dateStart?: ValidationMessage
  dateEnd?: ValidationMessage
}
