import React from "react"
import { ValidationResponse } from "../../types"

export type GetDateValidationHandlerArgs = {
  onValidate: ((validationResponse: ValidationResponse) => void) | undefined
  setInbuiltValidationStatus: (
    value: React.SetStateAction<ValidationResponse["status"] | undefined>
  ) => void
  setInbuiltValidationMessage: (
    value: React.SetStateAction<string | undefined>
  ) => void
  inputLabel: React.ReactNode
}

export const getDateValidationHandler =
  ({
    onValidate,
    setInbuiltValidationStatus,
    setInbuiltValidationMessage,
    inputLabel,
  }: GetDateValidationHandlerArgs) =>
  (validationResponse: ValidationResponse): void => {
    if (onValidate) return onValidate(validationResponse)

    const { validationMessage, status } = validationResponse
    setInbuiltValidationStatus(status)
    setInbuiltValidationMessage(
      validationMessage ? `${inputLabel}: ${validationMessage}` : undefined
    )
  }
