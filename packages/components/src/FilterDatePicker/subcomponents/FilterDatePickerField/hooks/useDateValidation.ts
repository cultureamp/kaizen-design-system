import { useState } from "react"
import { validateDate } from "../../../utils/validateDate"
import { getDateValidationHandler } from "../../../utils/getDateValidationHandler"
import {
  ValidationMessage,
  DateValidationResponse,
  DisabledDays,
} from "../../../types"

export type UseDateValidationArgs = {
  inputLabel: React.ReactNode
  disabledDays?: DisabledDays
  validationMessage?: ValidationMessage
  onValidate?: (validationResponse: DateValidationResponse) => void
}

export type UseDateValidationValue = {
  validationMessage: ValidationMessage | undefined
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => ReturnType<typeof validateDate>
  updateValidation: (validationResponse: DateValidationResponse) => void
}

export const useDateValidation = ({
  inputLabel,
  disabledDays,
  validationMessage,
  onValidate,
}: UseDateValidationArgs): UseDateValidationValue => {
  const [inbuiltValidationMessage, setInbuiltValidationMessage] = useState<
    ValidationMessage | undefined
  >()

  const shouldUseInbuiltDateValidation = onValidate === undefined

  const updateValidation = getDateValidationHandler({
    onValidate,
    setInbuiltValidationMessage,
    inputLabel,
  })

  const validateRangeDate: UseDateValidationValue["validateDate"] = ({
    date,
    inputValue,
  }) =>
    validateDate({
      date,
      inputValue,
      disabledDays,
    })

  return {
    validationMessage: shouldUseInbuiltDateValidation
      ? inbuiltValidationMessage
      : validationMessage,
    validateDate: validateRangeDate,
    updateValidation,
  }
}
