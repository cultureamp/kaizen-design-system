import { ValidationMessage } from "../types"
import {
  useRangeDateValidation,
  UseRangeDateValidationArgs,
} from "./useRangeDateValidation"

export type UseStartDateValidationArgs = UseRangeDateValidationArgs

export type UseStartDateValidationValue = {
  validationMessage: ValidationMessage
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => Date | undefined
}

export const useStartDateValidation = (
  args: UseStartDateValidationArgs
): UseStartDateValidationValue => {
  const { status, validationMessage, validateDate, updateValidation } =
    useRangeDateValidation(args)

  const validateStartDate: UseStartDateValidationValue["validateDate"] = ({
    date,
    inputValue,
  }) => {
    const { validationResponse, newDate } = validateDate({ date, inputValue })
    updateValidation(validationResponse)
    return newDate
  }

  return {
    // status,
    validationMessage,
    validateDate: validateStartDate,
  }
}
