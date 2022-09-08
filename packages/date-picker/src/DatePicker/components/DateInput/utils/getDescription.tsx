import React from "react"
import { getFormatDescription } from "./getFormatDescription"

export const getDescription = (
  description: React.ReactNode,
  locale: Locale
): React.ReactNode => {
  const dateFormat = getFormatDescription(locale)
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
