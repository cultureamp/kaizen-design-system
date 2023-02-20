import React from "react"
import { FieldMessage } from "@kaizen/draft-form"
import {
  DateRangeValidationMessageType,
  DateRangeValidationStatus,
  isDateRangeMessageType,
} from "../../../types"
import styles from "./DateRangeValidationMessage.module.scss"

export type DateRangeValidationMessageProps = {
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: DateRangeValidationStatus
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: DateRangeValidationMessageType
  errorMessageId?: string
  isReversed?: boolean
}

export const DateRangeValidationMessage = ({
  status,
  validationMessage,
  errorMessageId,
  isReversed,
}: DateRangeValidationMessageProps): JSX.Element | null => {
  if (!isDateRangeMessageType(validationMessage)) {
    return (
      <FieldMessage
        id={errorMessageId}
        message={validationMessage}
        status={status?.dateStart || status?.dateEnd}
        reversed={isReversed}
        classNameOverride={styles.fieldMessageIcon}
      />
    )
  } else if (status?.dateEnd === status?.dateStart) {
    return (
      <FieldMessage
        id={errorMessageId}
        message={
          <ul className={styles.fieldMessageList}>
            <li>{validationMessage.dateEnd}</li>
            <li>{validationMessage.dateStart}</li>
          </ul>
        }
        status={status?.dateStart || status?.dateEnd}
        reversed={isReversed}
        classNameOverride={styles.fieldMessageIcon}
      />
    )
  } else {
    return (
      <>
        <FieldMessage
          id={errorMessageId}
          message={validationMessage.dateStart}
          status={status?.dateStart}
          reversed={isReversed}
          classNameOverride={styles.fieldMessageIcon}
        />
        <FieldMessage
          id={errorMessageId}
          message={validationMessage.dateEnd}
          status={status?.dateEnd}
          reversed={isReversed}
          classNameOverride={styles.fieldMessageIcon}
        />
      </>
    )
  }
}

DateRangeValidationMessage.displayName = "DateRangeValidationMessage"
