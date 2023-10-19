import React from "react"
import { useIntl } from "@cultureamp/i18n-react-intl"
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
  const { formatMessage } = useIntl()
  const hasCustomDescription =
    (typeof description === "string" && description !== "") ||
    React.isValidElement(description)

  const translatedInputFormatMessage = formatMessage({
    id: "dateInputDescription.inputFormat",
    defaultMessage: "Input format",
    description: "Label for the 'Input format' field",
  })

  if (hasCustomDescription) {
    return (
      <span className={styles.dateInputDescription}>
        <span>{description}</span>
        <span className={styles.dateInputFormatContainer}>
          (
          <LabelledMessage
            label={translatedInputFormatMessage}
            message={formatDescriptionInputFormat(locale)}
          />
          )
        </span>
      </span>
    )
  }

  return (
    <LabelledMessage
      label={translatedInputFormatMessage}
      message={formatDescriptionInputFormat(locale)}
    />
  )
}

DateInputDescription.displayName = "DateInputDescription"
