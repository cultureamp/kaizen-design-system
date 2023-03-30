import { useState } from "react"
import { Matcher } from "@kaizen/date-picker/src/types"
import { ValidationMessage, DateValidationResponse } from "../types"
import { getDateValidationHandler } from "../utils/getDateValidationHandler"
import { validateDate } from "../utils/validateDate"

export type UseRangeDateValidationArgs = {
  inputLabel: React.ReactNode
  disabledDays?: Matcher[] | undefined
  // status?: FieldMessageStatus | undefined
  // validationMessage?: React.ReactNode | undefined
  validationMessage?: ValidationMessage
  onValidate?: (validationResponse: DateValidationResponse) => void
}

export type UseRangeDateValidationValue = {
  validationMessage: ValidationMessage | undefined
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => ReturnType<typeof validateDate>
  updateValidation: (validationResponse: DateValidationResponse) => void
}

export const useRangeDateValidation = ({
  inputLabel,
  disabledDays,
  // status,
  validationMessage,
  onValidate,
}: UseRangeDateValidationArgs): UseRangeDateValidationValue => {
  const [inbuiltValidationMessage, setInbuiltValidationMessage] = useState<
    ValidationMessage | undefined
  >()

  const shouldUseInbuiltDateValidation = onValidate === undefined

  const updateValidation = getDateValidationHandler({
    onValidate,
    setInbuiltValidationMessage,
    inputLabel,
  })

  const validateRangeDate: UseRangeDateValidationValue["validateDate"] = ({
    date,
    inputValue,
  }) =>
    validateDate({
      date,
      inputValue,
      disabledDays,
    })

  return {
    // status: shouldUseInbuiltDateValidation ? inbuiltValidationMessage?.status : status,
    validationMessage: shouldUseInbuiltDateValidation
      ? inbuiltValidationMessage
      : validationMessage,
    validateDate: validateRangeDate,
    updateValidation,
  }
}
