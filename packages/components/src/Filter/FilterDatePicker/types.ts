import type React from 'react'
import { type FieldMessageStatus } from '~components/FieldMessage'

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
