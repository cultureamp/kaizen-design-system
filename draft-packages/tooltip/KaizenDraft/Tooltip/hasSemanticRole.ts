import React, { ReactNode } from "react"

/**
 *  Validates implicit or explicitly semantic roles required to make `aria-describedby` announce predictably with screen readers
 */
export const hasSemanticRole = (element: ReactNode): boolean => {
  if (!React.isValidElement(element)) return false
  const { props, type } = element
  if ("role" in props) return true

  return !(type === "div" || type === "span")
}
