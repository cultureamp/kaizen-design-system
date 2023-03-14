import { FieldValidation } from "../types"
import {
  useRangeDateValidation,
  UseRangeDateValidationArgs,
} from "./useRangeDateValidation"

export type UseStartDateValidationArgs = UseRangeDateValidationArgs

export type UseStartDateValidationValue = FieldValidation & {
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => Date | undefined
}

export const useStartDateValidation = (
  props: UseStartDateValidationArgs
): UseStartDateValidationValue => {
  const validation = useRangeDateValidation(props)

  const validateDate: UseStartDateValidationValue["validateDate"] = ({
    date,
    inputValue,
  }) => {
    const { validationResponse, newDate } = validation.validateDate(
      date,
      inputValue
    )
    validation.updateValidation(validationResponse)
    return newDate
  }

  return {
    ...validation,
    validateDate,
  }
}
