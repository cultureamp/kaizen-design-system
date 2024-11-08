import React from "react"
import { FormattedMessage } from "@cultureamp/i18n-react-intl"
import { DisabledDays, isDisabledDate, isInvalidDate } from "~components/Calendar"
import { ValidationResponse } from "../types"

export type ValidateDateArgs = {
  date: Date | undefined
  inputValue: string | undefined
  disabledDays?: DisabledDays
}

export type ValidateDateResponse = {
  validationResponse: ValidationResponse
  newDate: Date | undefined
}

export const validateDate = ({
  date,
  inputValue,
  disabledDays,
}: ValidateDateArgs): ValidateDateResponse => {
  const baseResponse = {
    date,
    inputValue,
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
        validationMessage: inputValue ? (
          <FormattedMessage
            id="date.validation.invalidDateWithValue"
            defaultMessage="{inputValue} is an invalid date"
            description="Error message when the user enters an invalid date and we know their input value"
            values={{ inputValue }}
          />
        ) : (
          <FormattedMessage
            id="date.validation.invalidDate"
            defaultMessage="Date is invalid"
            description="Error message when the user enters an invalid date and we do not know their input value"
          />
        ),
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
        validationMessage: (
          <FormattedMessage
            id="date.validation.unavailableDate"
            defaultMessage="{inputValue} is not available, try another date"
            description="Error message when the user tries to select a date that is unavailable"
            values={{ inputValue }}
          />
        ),
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
