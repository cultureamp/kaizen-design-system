import { ValidationMessage } from "../types"
import {
  useRangeDateValidation,
  UseRangeDateValidationArgs,
} from "./useRangeDateValidation"

export type UseDateValidationArgs = UseRangeDateValidationArgs

export type UseDateValidationValue = {
  validationMessage: ValidationMessage | undefined
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => Date | undefined
}

export const useDateValidation = (
  args: UseDateValidationArgs
): UseDateValidationValue => {
  const { validationMessage, validateDate, updateValidation } =
    useRangeDateValidation(args)

  const validateStartDate: UseDateValidationValue["validateDate"] = ({
    date,
    inputValue,
  }) => {
    const { validationResponse, newDate } = validateDate({ date, inputValue })
    updateValidation(validationResponse)
    return newDate
  }

  return {
    validationMessage,
    validateDate: validateStartDate,
  }
}
