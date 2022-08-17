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
        {description} (Format: {dateFormat})
      </>
    )
  }

  if (typeof description === "string" && description !== "") {
    return `${description} (Format: ${dateFormat})`
  }

  return `Format: ${dateFormat}`
}
