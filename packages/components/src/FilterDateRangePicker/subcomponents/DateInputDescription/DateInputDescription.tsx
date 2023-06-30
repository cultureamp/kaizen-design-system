import React from "react"
import { LabelledMessage } from "~components/LabelledMessage"
import { formatDescriptionInputFormat } from "./utils/formatDescriptionInputFormat"
import styles from "./DateInputDescription.module.scss"
import { useIntl } from "@cultureamp/i18n-react-intl"

export interface DateInputDescriptionProps {
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
    id: "filterDateRangePicker.inputFormat",
    defaultMessage: "Default date-from message",
    description: "Description for date-from",
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
