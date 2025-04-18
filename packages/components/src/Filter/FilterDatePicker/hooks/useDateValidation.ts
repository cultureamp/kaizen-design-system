import { useState } from 'react'
import { type DisabledDays } from '~components/Calendar'
import { type DateValidationResponse, type ValidationMessage } from '../types'
import { getDateValidationHandler } from '../utils/getDateValidationHandler'
import { validateDate } from '../utils/validateDate'

export type UseDateValidationArgs = {
  inputLabel?: React.ReactNode
  disabledDays?: DisabledDays
  validationMessage?: ValidationMessage
  onValidate?: (validationResponse: DateValidationResponse) => void
}

export type UseDateValidationValue = {
  validationMessage: ValidationMessage | undefined
  validateDate: (args: {
    date: Date | undefined
    inputValue: string
  }) => ReturnType<typeof validateDate>
  updateValidation: (validationResponse: DateValidationResponse) => void
}

export const useDateValidation = ({
  inputLabel,
  disabledDays,
  validationMessage,
  onValidate,
}: UseDateValidationArgs): UseDateValidationValue => {
  const [inbuiltValidationMessage, setInbuiltValidationMessage] = useState<
    ValidationMessage | undefined
  >()

  const shouldUseInbuiltDateValidation = onValidate === undefined

  const updateValidation = getDateValidationHandler({
    onValidate,
    setInbuiltValidationMessage,
    inputLabel,
  })

  const validateSingleDate: UseDateValidationValue['validateDate'] = ({ date, inputValue }) =>
    validateDate({
      date,
      inputValue,
      disabledDays,
    })

  return {
    validationMessage: shouldUseInbuiltDateValidation
      ? inbuiltValidationMessage
      : validationMessage,
    validateDate: validateSingleDate,
    updateValidation,
  }
}
