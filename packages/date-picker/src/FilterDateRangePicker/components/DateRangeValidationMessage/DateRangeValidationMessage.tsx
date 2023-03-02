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
  dateStartId?: string
  dateEndId?: string
  isReversed?: boolean
}

export const DateRangeValidationMessage = ({
  status,
  validationMessage,
  dateStartId,
  dateEndId,
  isReversed,
}: DateRangeValidationMessageProps): JSX.Element | null => {
  if (!validationMessage) return null

  if (status?.dateEnd && status?.dateStart) {
    if (status.dateEnd === status.dateStart) {
      return (
        <FieldMessage
          message={
            <ul className={styles.fieldMessageList}>
              <li id={dateEndId}>{validationMessage.dateStart}</li>
              <li id={dateStartId}>{validationMessage.dateEnd}</li>
            </ul>
          }
          status={status?.dateStart || status?.dateEnd}
          reversed={isReversed}
        />
      )
    }
    return (
      <>
        <FieldMessage
          id={dateStartId}
          message={validationMessage.dateStart}
          status={status?.dateStart}
          reversed={isReversed}
        />
        <FieldMessage
          id={dateEndId}
          message={validationMessage.dateEnd}
          status={status?.dateEnd}
          reversed={isReversed}
        />
      </>
    )
  }

  if (validationMessage.dateStart) {
    return (
      <FieldMessage
        id={dateStartId}
        message={validationMessage.dateStart}
        status={status?.dateStart}
        reversed={isReversed}
      />
    )
  }

  return (
    <FieldMessage
      id={dateEndId}
      message={validationMessage.dateEnd}
      status={status?.dateEnd}
      reversed={isReversed}
    />
  )
}

DateRangeValidationMessage.displayName = "DateRangeValidationMessage"
