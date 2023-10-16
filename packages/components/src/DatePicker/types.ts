import { FieldMessageStatus } from "~components/FieldMessage"

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
