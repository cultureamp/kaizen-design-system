import React from "react"
import { FieldMessage, FieldMessageStatus } from "@kaizen/draft-form"
import { DateRangeValidationMessageType } from "../../../types"
import styles from "./DateRangeValidationMessage.module.scss"

type DateRangeValidationStatus = {
  dateStart?: FieldMessageStatus
  dateEnd?: FieldMessageStatus
}

export type DateRangeValidationMessageProps = {
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: DateRangeValidationStatus
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: DateRangeValidationMessageType
  id?: string
  isReversed?: boolean
}

export const DateRangeValidationMessage = ({
  status,
  validationMessage,
  id,
  isReversed,
}: DateRangeValidationMessageProps): JSX.Element | null => {
  if (!validationMessage) return null

  if (status?.dateEnd !== undefined && status?.dateStart !== undefined) {
    if (status.dateEnd === status.dateStart) {
      return (
        <FieldMessage
          id={id}
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
    }
    return (
      <>
        <FieldMessage
          id={id}
          message={validationMessage.dateStart}
          status={status?.dateStart}
          reversed={isReversed}
          classNameOverride={styles.fieldMessageIcon}
        />
        <FieldMessage
          id={id}
          message={validationMessage.dateEnd}
          status={status?.dateEnd}
          reversed={isReversed}
          classNameOverride={styles.fieldMessageIcon}
        />
      </>
    )
  }

  return (
    <FieldMessage
      id={id}
      message={validationMessage.dateEnd || validationMessage.dateStart}
      status={status?.dateEnd || status?.dateStart}
      reversed={isReversed}
      classNameOverride={styles.fieldMessageIcon}
    />
  )
}

DateRangeValidationMessage.displayName = "DateRangeValidationMessage"
