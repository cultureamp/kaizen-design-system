import React from "react"

export const getDescription = (
  description: React.ReactNode
): React.ReactNode => {
  switch (typeof description) {
    case "string":
      if (description === "") return "Format: mm/dd/yyyy"
      return `${description} (Format: mm/dd/yyyy)`
    case "object":
      return <>{description} (Format: mm/dd/yyyy)</>
    default:
      return "Format: mm/dd/yyyy"
  }
}
