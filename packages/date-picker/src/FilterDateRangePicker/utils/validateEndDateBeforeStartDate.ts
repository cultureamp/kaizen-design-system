import React from "react"
import { ValidationResponse } from "../../types"

export type ValidateEndDateBeforeStartDateArgs = {
  startDate: Date
  startDateFieldLabel: React.ReactNode
  endDate: Date
  endDateInputValue: string
}

export type ValidateEndDateBeforeStartDateResponse = {
  validationResponse: ValidationResponse
  newDate: Date | undefined
}

export const validateEndDateBeforeStartDate = ({
  startDate,
  startDateFieldLabel,
  endDate,
  endDateInputValue,
}: ValidateEndDateBeforeStartDateArgs): ValidateEndDateBeforeStartDateResponse => {
  const baseResponse = {
    date: endDate,
    inputValue: endDateInputValue,
    status: undefined,
    validationMessage: undefined,
    isInvalid: false,
    isDisabled: false,
    isEmpty: false,
    isValidDate: true,
  }

  if (endDate < startDate) {
    return {
      validationResponse: {
        ...baseResponse,
        status: "error",
        validationMessage: `Cannot be earlier than the selection in "${startDateFieldLabel}"`,
      },
      newDate: undefined,
    }
  }

  return {
    validationResponse: baseResponse,
    newDate: endDate,
  }
}
