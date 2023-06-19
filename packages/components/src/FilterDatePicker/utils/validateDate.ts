import {
  validateDate as dpValidateDate,
  ValidateDateArgs,
} from "@kaizen/date-picker/src/utils/validateDate"
import { DateValidationResponse } from "../types"

export type ValidateDateResponse = {
  validationResponse: DateValidationResponse
  newDate: Date | undefined
}

export const validateDate = (args: ValidateDateArgs): ValidateDateResponse => {
  const response = dpValidateDate(args)

  const { status, validationMessage, ...rest } = response.validationResponse

  return {
    ...response,
    validationResponse: {
      ...rest,
      validationMessage:
        status && validationMessage
          ? { status, message: validationMessage }
          : undefined,
    },
  }
}
