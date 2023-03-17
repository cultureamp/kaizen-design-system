import React from "react"
import { ValidationResponse } from "@kaizen/date-picker/src/types"
import { getNodeText } from "../../../../utils/getNodeText"
import { FieldValidation } from "../types"

export type GetDateValidationHandlerArgs = {
  onValidate: ((validationResponse: ValidationResponse) => void) | undefined
  setInbuiltValidation: (fieldValidation: FieldValidation) => void
  inputLabel: React.ReactNode
}

export const getDateValidationHandler =
  ({
    onValidate,
    setInbuiltValidation,
    inputLabel,
  }: GetDateValidationHandlerArgs) =>
  (validationResponse: ValidationResponse): void => {
    if (onValidate) return onValidate(validationResponse)

    const { validationMessage, status } = validationResponse

    setInbuiltValidation({
      status,
      validationMessage: validationMessage
        ? `${getNodeText(inputLabel)}: ${validationMessage}`
        : undefined,
    })
  }
