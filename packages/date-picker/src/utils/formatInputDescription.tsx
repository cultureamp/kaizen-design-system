import React from "react"
import { formatDescriptionInputFormat } from "./formatDescriptionInputFormat"

export const formatInputDescription = (
  description: React.ReactNode,
  locale: Locale
): React.ReactNode => {
  const dateFormat = formatDescriptionInputFormat(locale)
  if (React.isValidElement(description)) {
    return (
      <>
        {description} (Input format: {dateFormat})
      </>
    )
  }

  if (typeof description === "string" && description !== "") {
    return `${description} (Input format: ${dateFormat})`
  }

  return `Input format: ${dateFormat}`
}
