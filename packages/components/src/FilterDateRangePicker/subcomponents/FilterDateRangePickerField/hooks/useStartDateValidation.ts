import {
  useDateValidation,
  UseDateValidationArgs,
  ValidationMessage,
} from "~components/FilterDatePicker"

export type UseStartDateValidationArgs = UseDateValidationArgs

export type UseStartDateValidationValue = {
  validationMessage: ValidationMessage | undefined
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => Date | undefined
}

export const useStartDateValidation = (
  args: UseStartDateValidationArgs
): UseStartDateValidationValue => {
  const { validationMessage, validateDate, updateValidation } =
    useDateValidation(args)

  const validateStartDate: UseStartDateValidationValue["validateDate"] = ({
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
