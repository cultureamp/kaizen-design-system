import React from "react"
import { Paragraph } from "@kaizen/typography"
import { formatDescriptionInputFormat } from "../../utils/formatDescriptionInputFormat"
import styles from "./DateInputDescription.module.scss"

interface DescriptionInputFormatProps {
  locale: Locale
}

const DescriptionInputFormat = ({ locale }): JSX.Element => (
  <Paragraph variant="small">
    <span className={styles.descriptionInputFormat}>
      <span>Input format</span>
      <span className={styles.labelSeparator}>:</span>
      <span>{formatDescriptionInputFormat(locale)}</span>
    </span>
  </Paragraph>
)

DescriptionInputFormat.displayName = "DescriptionInputFormat"

export interface DateInputDescriptionProps extends DescriptionInputFormatProps {
  description?: string | JSX.Element
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
      <Paragraph variant="small">
        <span className={styles.dateInputDescription}>
          <span>{description}</span>
          <span className={styles.dateInputFormatContainer}>
            (<DescriptionInputFormat locale={locale} />)
          </span>
        </span>
      </Paragraph>
    )
  }

  return <DescriptionInputFormat locale={locale} />
}

DateInputDescription.displayName = "DateInputDescription"
