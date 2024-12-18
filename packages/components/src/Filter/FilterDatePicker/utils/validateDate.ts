import {
  validateDate as dpValidateDate,
  type ValidateDateArgs,
} from '~components/DatePicker/utils/validateDate'
import { type DateValidationResponse } from '../types'

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
        status && validationMessage ? { status, message: validationMessage } : undefined,
    },
  }
}
