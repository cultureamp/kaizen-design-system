import React from "react"
import { FieldMessage, FieldMessageStatus } from "@kaizen/draft-form"
import { Paragraph } from "@kaizen/typography"
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
              <li id={dateStartId}>
                <Paragraph variant="small">
                  {validationMessage.dateEnd}
                </Paragraph>
              </li>
              <li id={dateEndId}>
                <Paragraph variant="small">
                  {validationMessage.dateStart}
                </Paragraph>
              </li>
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

  return (
    <FieldMessage
      id={validationMessage.dateStart ? dateStartId : dateEndId}
      message={validationMessage.dateEnd || validationMessage.dateStart}
      status={status?.dateEnd || status?.dateStart}
      reversed={isReversed}
      classNameOverride={styles.fieldMessageIcon}
    />
  )
}

DateRangeValidationMessage.displayName = "DateRangeValidationMessage"
