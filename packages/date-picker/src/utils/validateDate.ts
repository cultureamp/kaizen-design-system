import { Matcher } from "react-day-picker/dist/types/Matchers"
import { ValidationResponse } from "../types"
import { isDisabledDate } from "./isDisabledDate"
import { isInvalidDate } from "./isInvalidDate"

type ValidateDateResponse = {
  validationResponse: ValidationResponse
  newDate: Date | undefined
}

export const validateDate = (
  date: Date | undefined,
  newInputValue?: string,
  disabledDays?: Matcher[]
): ValidateDateResponse => {
  const baseResponse = {
    date,
    inputValue: newInputValue,
    status: undefined,
    validationMessage: undefined,
    isInvalid: false,
    isDisabled: false,
    isEmpty: false,
    isValidDate: false,
  }

  if (date === undefined) {
    return {
      validationResponse: {
        ...baseResponse,
        isEmpty: true,
      },
      newDate: undefined,
    }
  }

  if (isInvalidDate(date)) {
    return {
      validationResponse: {
        ...baseResponse,
        status: "error",
        validationMessage: newInputValue
          ? `${newInputValue} is an invalid date`
          : "Date is invalid",
        isInvalid: true,
      },
      newDate: undefined,
    }
  }

  if (isDisabledDate(date, disabledDays)) {
    return {
      validationResponse: {
        ...baseResponse,
        status: "error",
        validationMessage: `${newInputValue} is not available, try another date`,
        isDisabled: true,
      },
      newDate: undefined,
    }
  }
  return {
    validationResponse: {
      ...baseResponse,
      isValidDate: true,
    },
    newDate: date,
  }
}
