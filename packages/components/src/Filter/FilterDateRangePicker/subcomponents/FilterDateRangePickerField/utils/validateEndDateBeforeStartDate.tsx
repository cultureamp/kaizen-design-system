import React from "react"
import { FormattedMessage } from "@cultureamp/i18n-react-intl"
import { DateValidationResponse } from "~components/Filter/FilterDatePicker"
import { getNodeText } from "~components/utils/getNodeText"
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
          message: (
            <FormattedMessage
              id="date.validation.rangeEndBeforeRangeStart"
              defaultMessage='Cannot be earlier than the selection in "{startDateFieldLabel}"'
              description="Error message when the user tries to select an end date earlier than the start date"
              values={{ startDateFieldLabel: getNodeText(startDateFieldLabel) }}
            />
          ),
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
