import { useState } from "react"
import { Matcher, ValidationResponse } from "@kaizen/date-picker/src/types"
import { validateDate } from "@kaizen/date-picker/src/utils/validateDate"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { FieldValidation, ValidationMessage } from "../types"
import { getDateValidationHandler } from "../utils/getDateValidationHandler"

export type UseRangeDateValidationArgs = {
  inputLabel: React.ReactNode
  disabledDays?: Matcher[] | undefined
  // status?: FieldMessageStatus | undefined
  // validationMessage?: React.ReactNode | undefined
  validationMessage?: ValidationMessage
  onValidate?: (validationResponse: ValidationResponse) => void
}

export type UseRangeDateValidationValue = {
  validationMessage: ValidationMessage
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => ReturnType<typeof validateDate>
  updateValidation: (validationResponse: ValidationResponse) => void
}

export const useRangeDateValidation = ({
  inputLabel,
  disabledDays,
  // status,
  validationMessage,
  onValidate,
}: UseRangeDateValidationArgs): UseRangeDateValidationValue => {
  const [inbuiltValidation, setInbuiltValidation] = useState<ValidationMessage>()

  const shouldUseInbuiltDateValidation = onValidate === undefined

  const updateValidation = getDateValidationHandler({
    onValidate,
    setInbuiltValidation,
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
    // status: shouldUseInbuiltDateValidation ? inbuiltValidation?.status : status,
    validationMessage: shouldUseInbuiltDateValidation
      ? inbuiltValidation?.validationMessage
      : validationMessage,
    validateDate: validateRangeDate,
    updateValidation,
  }
}
