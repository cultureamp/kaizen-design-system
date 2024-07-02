import React, { ReactNode } from "react"

// Noting that this is contingent on our displayName for our components -  this something we control
const allowedDisplayNames = ["Button", "IconButton", "FilterButtonBase"]

export function extractDisplayName(type: React.FunctionComponent): string {
  return type.displayName || type.name || "Unknown"
}

/**
 *  Validates implicit or explicitly semantic roles required to make `aria-describedby` announce predictably with screen readers
 */
export const isSemanticElement = (
  element: ReactNode
): element is React.ReactElement => {
  if (!React.isValidElement(element)) return false

  const { props, type } = element

  if ("role" in props) {
    return props.role !== "presentation" && props.role !== "none"
  }

  if (typeof type !== "string") {
    // As we are only checking whether this matches to our allowedDisplayNames
    // type casting should be fine
    const displayName = extractDisplayName(
      type as unknown as React.FunctionComponent
    )

    return allowedDisplayNames.includes(displayName)
  }

  return !(type === "div" || type === "span")
}
