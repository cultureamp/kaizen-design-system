import React from "react"
import { FieldMessageStatus } from "@kaizen/draft-form"
// import {
//   DateRangeValidationMessageDateMessage,
//   DateRangeValidationMessageDateStatus,
// } from "../DateRangeValidationMessage"

export type ValidationMessage = {
  status: FieldMessageStatus
  message: string | React.ReactElement
}

export type DateRangeFieldValidationMessage = {
  dateStart?: ValidationMessage
  dateEnd?: ValidationMessage
}

// export type DateRangeEmptyValidationStatus = {
//   /**
//    * Updates the styling of the validation FieldMessage.
//    */
//   status?: { dateStart?: never; dateEnd?: never }
//   /**
//    * A descriptive message for the 'status' states.
//    */
//   validationMessage?: { dateStart?: never; dateEnd?: never }
// }

// export type DateRangeStartValidationStatus = {
//   status: { dateStart: DateRangeValidationMessageDateStatus; dateEnd?: never }
//   validationMessage: {
//     dateStart: DateRangeValidationMessageDateMessage
//     dateEnd?: never
//   }
// }

// export type DateRangeEndValidationStatus = {
//   status: { dateStart?: never; dateEnd: DateRangeValidationMessageDateStatus }
//   validationMessage: {
//     dateStart?: never
//     dateEnd: DateRangeValidationMessageDateMessage
//   }
// }

// export type DateRangeFullValidationStatus = {
//   status: {
//     dateStart: DateRangeValidationMessageDateStatus
//     dateEnd: DateRangeValidationMessageDateStatus
//   }
//   validationMessage: {
//     dateStart: DateRangeValidationMessageDateMessage
//     dateEnd: DateRangeValidationMessageDateMessage
//   }
// }

// export type DateRangeValidationStatus =
//   | DateRangeEmptyValidationStatus
//   | DateRangeStartValidationStatus
//   | DateRangeEndValidationStatus
//   | DateRangeFullValidationStatus

// export type FieldValidation = {
//   status: FieldMessageStatus | undefined
//   validationMessage: React.ReactNode | undefined
// }
