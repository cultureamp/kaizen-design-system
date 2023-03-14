import { useState } from "react"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { FieldValidation, Matcher, ValidationResponse } from "../../types"
import { validateDate } from "../../utils/validateDate"
import { getDateValidationHandler } from "../utils/getDateValidationHandler"

export type UseStartDateValidationArgs = {
  inputLabel: React.ReactNode
  status?: FieldMessageStatus | undefined
  validationMessage?: React.ReactNode | undefined
  disabledDays?: Matcher[] | undefined
  onValidate?: (validationResponse: ValidationResponse) => void
}

export type UseStartDateValidationValue = FieldValidation & {
  validateDate: (date: Date | undefined, inputValue: string) => Date | undefined
}

export const useStartDateValidation = ({
  inputLabel,
  status,
  validationMessage,
  disabledDays,
  onValidate,
}: UseStartDateValidationArgs): UseStartDateValidationValue => {
  const [inbuiltValidation, setInbuiltValidation] = useState<FieldValidation>()

  const shouldUseInbuiltDateValidation = onValidate === undefined

  const handleValidateStartDate = getDateValidationHandler({
    onValidate,
    setInbuiltValidation,
    inputLabel,
  })

  const validateStartDate: UseStartDateValidationValue["validateDate"] = (
    date,
    inputValue
  ) => {
    const { validationResponse, newDate } = validateDate({
      date,
      inputValue,
      disabledDays,
    })

    handleValidateStartDate(validationResponse)
    return newDate
  }

  return {
    status: shouldUseInbuiltDateValidation ? inbuiltValidation?.status : status,
    validationMessage: shouldUseInbuiltDateValidation
      ? inbuiltValidation?.validationMessage
      : validationMessage,
    validateDate: validateStartDate,
  }
}
