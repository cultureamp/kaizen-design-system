import {
  useDateValidation,
  UseDateValidationArgs,
} from "~components/FilterDatePicker/hooks/useDateValidation"
import { ValidationMessage } from "../../../types"

export type UseSingleDateValidationArgs = UseDateValidationArgs

export type UseSingleDateValidationValue = {
  validationMessage: ValidationMessage | undefined
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => Date | undefined
}

export const useSingleDateValidation = (
  args: UseSingleDateValidationArgs
): UseSingleDateValidationValue => {
  const { validationMessage, validateDate, updateValidation } =
    useDateValidation(args)

  const validateSingleDate: UseSingleDateValidationValue["validateDate"] = ({
    date,
    inputValue,
  }) => {
    const { validationResponse, newDate } = validateDate({ date, inputValue })
    updateValidation(validationResponse)
    return newDate
  }

  return {
    validationMessage,
    validateDate: validateSingleDate,
  }
}
