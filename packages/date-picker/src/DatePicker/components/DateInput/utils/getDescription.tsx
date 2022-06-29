import React from "react"
import { getFormatDescription } from "./getFormatDescription"

export const getDescription = (
  description: React.ReactNode,
  locale: Locale
): React.ReactNode => {
  const dateFormat = getFormatDescription(locale)
  const dateFormatString = ` (Format: ${dateFormat})`
  if (React.isValidElement(description)) {
    return (
      <>
        {description}
        {dateFormatString}
      </>
    )
  }

  if (typeof description === "string" && description !== "") {
    return `${description}${dateFormatString}`
  }

  return `Format: ${dateFormat}`
}
