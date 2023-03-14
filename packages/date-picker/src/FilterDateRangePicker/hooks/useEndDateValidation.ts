import { FieldValidation } from "../types"
import {
  validateEndDateBeforeStartDate,
  ValidateEndDateBeforeStartDateArgs,
} from "../utils/validateEndDateBeforeStartDate"
import {
  useRangeDateValidation,
  UseRangeDateValidationArgs,
} from "./useRangeDateValidation"

export type UseEndDateValidationArgs = UseRangeDateValidationArgs

export type UseEndDateValidationValue = FieldValidation & {
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
  props: UseEndDateValidationArgs
): UseEndDateValidationValue => {
  const { status, validationMessage, validateDate, updateValidation } =
    useRangeDateValidation(props)

  const handleValidateEndDateBeforeStartDate: UseEndDateValidationValue["validateEndDateBeforeStartDate"] =
    args => {
      const { validationResponse, newDate } =
        validateEndDateBeforeStartDate(args)
      updateValidation(validationResponse)
      return newDate
    }

  const validateEndDate: UseEndDateValidationValue["validateDate"] = ({
    endDate,
    endDateInputValue,
    startDate,
    startDateFieldLabel,
  }) => {
    const { validationResponse, newDate } = validateDate(
      endDate,
      endDateInputValue
    )

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
    status,
    validationMessage,
    validateDate: validateEndDate,
    validateEndDateBeforeStartDate: handleValidateEndDateBeforeStartDate,
  }
}
