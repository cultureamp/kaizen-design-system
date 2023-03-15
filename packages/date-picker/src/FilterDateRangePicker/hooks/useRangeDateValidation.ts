import { useState } from "react"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { Matcher, ValidationResponse } from "../../types"
import { validateDate } from "../../utils/validateDate"
import { FieldValidation } from "../types"
import { getDateValidationHandler } from "../utils/getDateValidationHandler"

export type UseRangeDateValidationArgs = {
  inputLabel: React.ReactNode
  disabledDays?: Matcher[] | undefined
  status?: FieldMessageStatus | undefined
  validationMessage?: React.ReactNode | undefined
  onValidate?: (validationResponse: ValidationResponse) => void
}

export type UseRangeDateValidationValue = FieldValidation & {
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => ReturnType<typeof validateDate>
  updateValidation: (validationResponse: ValidationResponse) => void
}

export const useRangeDateValidation = ({
  inputLabel,
  disabledDays,
  status,
  validationMessage,
  onValidate,
}: UseRangeDateValidationArgs): UseRangeDateValidationValue => {
  const [inbuiltValidation, setInbuiltValidation] = useState<FieldValidation>()

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
    status: shouldUseInbuiltDateValidation ? inbuiltValidation?.status : status,
    validationMessage: shouldUseInbuiltDateValidation
      ? inbuiltValidation?.validationMessage
      : validationMessage,
    validateDate: validateRangeDate,
    updateValidation,
  }
}
