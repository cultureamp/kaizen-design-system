import React from "react"
import { LabelledMessage } from "~components/LabelledMessage"
import { formatDescriptionInputFormat } from "./utils/formatDescriptionInputFormat"
import styles from "./DateInputDescription.module.scss"

export type DateInputDescriptionProps = {
  description?: string | JSX.Element
  locale: Locale
}

export const DateInputDescription = ({
  description,
  locale,
}: DateInputDescriptionProps): JSX.Element => {
  const hasCustomDescription =
    (typeof description === "string" && description !== "") ||
    React.isValidElement(description)

  if (hasCustomDescription) {
    return (
      <span className={styles.dateInputDescription}>
        <span>{description}</span>
        <span className={styles.dateInputFormatContainer}>
          (
          <LabelledMessage
            label="Input format"
            message={formatDescriptionInputFormat(locale)}
          />
          )
        </span>
      </span>
    )
  }

  return (
    <LabelledMessage
      label="Input format"
      message={formatDescriptionInputFormat(locale)}
    />
  )
}

DateInputDescription.displayName = "DateInputDescription"
