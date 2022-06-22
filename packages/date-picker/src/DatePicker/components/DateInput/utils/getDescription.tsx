import React from "react"

export const getDescription = (
  description: React.ReactNode
): React.ReactNode => {
  if (React.isValidElement(description)) {
    return <>{description} (Format: mm/dd/yyyy)</>
  }

  if (typeof description === "string" && description !== "") {
    return `${description} (Format: mm/dd/yyyy)`
  }

  return "Format: mm/dd/yyyy"
}
