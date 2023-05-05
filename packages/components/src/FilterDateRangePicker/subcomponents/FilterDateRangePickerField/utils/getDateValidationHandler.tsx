import React from "react"
import { LabelledMessage } from "~components/LabelledMessage"
import { getNodeText } from "../../../../utils/getNodeText"
import { ValidationMessage, DateValidationResponse } from "../types"

export type GetDateValidationHandlerArgs = {
  onValidate: ((validationResponse: DateValidationResponse) => void) | undefined
  setInbuiltValidationMessage: (
    validationMessage: ValidationMessage | undefined
  ) => void
  inputLabel: React.ReactNode
}

export const getDateValidationHandler =
  ({
    onValidate,
    setInbuiltValidationMessage,
    inputLabel,
  }: GetDateValidationHandlerArgs) =>
  (validationResponse: DateValidationResponse): void => {
    if (onValidate) return onValidate(validationResponse)

    const { validationMessage } = validationResponse

    if (!validationMessage) {
      setInbuiltValidationMessage(undefined)
      return
    }

    setInbuiltValidationMessage({
      status: validationMessage.status,
      message: (
        <LabelledMessage
          label={`${getNodeText(inputLabel)}`}
          message={validationMessage.message}
        />
      ),
    })
  }
