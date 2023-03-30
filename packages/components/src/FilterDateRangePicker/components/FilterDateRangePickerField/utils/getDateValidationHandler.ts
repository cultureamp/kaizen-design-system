import React from "react"
import { ValidationResponse } from "@kaizen/date-picker/src/types"
import { getNodeText } from "../../../../utils/getNodeText"
import { ValidationMessage } from "../types"
// import { FieldValidation } from "../types"

export type GetDateValidationHandlerArgs = {
  onValidate: ((validationResponse: ValidationResponse) => void) | undefined
  setInbuiltValidation: (validationMessage: ValidationMessage | undefined) => void
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

    if (!validationMessage || !status) {
      setInbuiltValidation(undefined)
      return
    }

    setInbuiltValidation({
      status,
      message: `${getNodeText(inputLabel)}: ${validationMessage}`,
    })
  }
