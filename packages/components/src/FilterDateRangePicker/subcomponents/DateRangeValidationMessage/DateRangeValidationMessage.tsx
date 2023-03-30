import React from "react"
import { FieldMessage } from "@kaizen/draft-form"
import { DateRangeFieldValidationMessage } from "../FilterDateRangePickerField/types"
import styles from "./DateRangeValidationMessage.module.scss"

export type DateRangeValidationMessageProps = {
  validationMessage?: DateRangeFieldValidationMessage
  dateStartId?: string
  dateEndId?: string
  isReversed?: boolean
}

export const DateRangeValidationMessage = ({
  validationMessage,
  dateStartId,
  dateEndId,
  isReversed,
}: DateRangeValidationMessageProps): JSX.Element | null => {
  if (!validationMessage) return null

  const dateStart = validationMessage.dateStart
  const dateEnd = validationMessage.dateEnd

  if (dateStart && dateEnd) {
    if (dateStart.status === dateEnd.status) {
      return (
        <FieldMessage
          message={
            <ul className={styles.fieldMessageList}>
              <li id={dateStartId}>{dateStart.message}</li>
              <li id={dateEndId}>{dateEnd.message}</li>
            </ul>
          }
          status={dateStart.status || dateEnd.status}
          reversed={isReversed}
        />
      )
    }

    return (
      <>
        <FieldMessage
          id={dateStartId}
          message={dateStart.message}
          status={dateStart.status}
          reversed={isReversed}
        />
        <FieldMessage
          id={dateEndId}
          message={dateEnd.message}
          status={dateEnd.status}
          reversed={isReversed}
        />
      </>
    )
  }

  if (dateStart) {
    return (
      <FieldMessage
        id={dateStartId}
        message={dateStart.message}
        status={dateStart.status}
        reversed={isReversed}
      />
    )
  }

  if (dateEnd) {
    return (
      <FieldMessage
        id={dateEndId}
        message={dateEnd.message}
        status={dateEnd.status}
        reversed={isReversed}
      />
    )
  }

  return null
}

DateRangeValidationMessage.displayName = "DateRangeValidationMessage"
