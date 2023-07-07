import React from "react"
import { FieldMessageStatus } from "@kaizen/draft-form"

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

export type DateFieldActions =
  | {
      type: "update_selected_date"
      date: Date | undefined
      inputValue?: string
    }
  | {
      type: "navigate_months"
      date: Date | undefined
    }
  | {
      type: "update_input_field"
      inputValue: string
    }

export type FilterDatePickerState = {
  selectedDate: Date | undefined
  inputValue: string
  startMonth: Date
}

export type SetupFilterDatePickerState = {
  selectedDate: Date | undefined
  defaultMonth?: Date
  inputValue?: string
}
