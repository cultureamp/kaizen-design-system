import React from "react"
import { FieldMessage, FieldMessageStatus } from "@kaizen/draft-form"
import styles from "./DateRangeValidationMessage.module.scss"

export type DateRangeValidationMessageDateStatus = FieldMessageStatus
export type DateRangeValidationMessageDateMessage = React.ReactNode

export type DateRangeValidationMessageProps = {
  /**
   * Updates the styling of the validation FieldMessage
   */
  status?: {
    dateStart?: DateRangeValidationMessageDateStatus
    dateEnd?: DateRangeValidationMessageDateStatus
  }
  /**
   * A descriptive message for `status` states
   */
  validationMessage?: {
    dateStart?: DateRangeValidationMessageDateMessage
    dateEnd?: DateRangeValidationMessageDateMessage
  }
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

  if (status?.dateEnd && status?.dateStart) {
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
