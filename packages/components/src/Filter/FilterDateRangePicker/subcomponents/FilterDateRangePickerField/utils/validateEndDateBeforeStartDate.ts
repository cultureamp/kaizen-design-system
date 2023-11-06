import React from "react"
import { DateValidationResponse } from "~components/Filter/FilterDatePicker"
import { getNodeText } from "../../../../../utils/getNodeText"
import { isValidRange } from "./isValidRange"

export type ValidateEndDateBeforeStartDateArgs = {
  startDate: Date
  startDateFieldLabel: React.ReactNode
  endDate: Date
  endDateInputValue: string
}

export type ValidateEndDateBeforeStartDateResponse = {
  validationResponse: DateValidationResponse
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
    validationMessage: undefined,
    isInvalid: false,
    isDisabled: false,
    isEmpty: false,
    isValidDate: true,
  }

  if (!isValidRange(startDate, endDate)) {
    return {
      validationResponse: {
        ...baseResponse,
        validationMessage: {
          status: "error",
          message: `Cannot be earlier than the selection in "${getNodeText(
            startDateFieldLabel
          )}"`,
        },
      },
      newDate: endDate,
    }
  }

  return {
    validationResponse: baseResponse,
    newDate: endDate,
  }
}
