import {
  useDateValidation,
  UseDateValidationArgs,
  ValidationMessage,
} from "~components/FilterDatePicker"
import {
  validateEndDateBeforeStartDate,
  ValidateEndDateBeforeStartDateArgs,
} from "../utils/validateEndDateBeforeStartDate"

export type UseEndDateValidationArgs = UseDateValidationArgs

export type UseEndDateValidationValue = {
  validationMessage: ValidationMessage | undefined
  validateDate: (args: {
    endDate: Date | undefined
    endDateInputValue: string
    startDate: Date | undefined
    startDateFieldLabel: React.ReactNode
  }) => Date | undefined
  validateEndDateBeforeStartDate: (
    args: ValidateEndDateBeforeStartDateArgs
  ) => Date | undefined
}

export const useEndDateValidation = (
  args: UseEndDateValidationArgs
): UseEndDateValidationValue => {
  const { validationMessage, validateDate, updateValidation } =
    useDateValidation(args)

  const handleValidateEndDateBeforeStartDate: UseEndDateValidationValue["validateEndDateBeforeStartDate"] =
    handlerArgs => {
      const { validationResponse, newDate } =
        validateEndDateBeforeStartDate(handlerArgs)
      updateValidation(validationResponse)
      return newDate
    }

  const validateEndDate: UseEndDateValidationValue["validateDate"] = ({
    endDate,
    endDateInputValue,
    startDate,
    startDateFieldLabel,
  }) => {
    const { validationResponse, newDate } = validateDate({
      date: endDate,
      inputValue: endDateInputValue,
    })

    if (validationResponse.isValidDate) {
      if (newDate && startDate) {
        return handleValidateEndDateBeforeStartDate({
          startDate,
          startDateFieldLabel,
          endDate: newDate,
          endDateInputValue,
        })
      }
    }

    updateValidation(validationResponse)
    return newDate
  }

  return {
    validationMessage,
    validateDate: validateEndDate,
    validateEndDateBeforeStartDate: handleValidateEndDateBeforeStartDate,
  }
}
