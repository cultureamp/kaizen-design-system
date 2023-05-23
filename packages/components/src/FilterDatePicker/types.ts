import React from "react"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { StringSuggestions } from "~types/StringSuggestions"

export type { DateRange, DisabledDays } from "@kaizen/date-picker/src/types"

// Ensure you also update the storybook argTypes `locale` options.
export type FilterDPSupportedLocales = StringSuggestions<"en-US" | "en-AU">

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
