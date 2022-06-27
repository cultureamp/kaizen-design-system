import React from "react"

export const getDescription = (
  description: React.ReactNode
): React.ReactNode => {
  if (React.isValidElement(description)) {
    return <>{description} (Format: dd/mm/yyyy)</>
  }

  if (typeof description === "string" && description !== "") {
    return `${description} (Format: dd/mm/yyyy)`
  }

  return "Format: dd/mm/yyyy"
}
