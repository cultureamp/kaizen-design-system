import React from "react"

// Adapted from https://stackoverflow.com/a/60564620
export const getNodeText = (node: React.ReactNode): string | number => {
  if (!node) return ""
  if (typeof node === "string" || typeof node === "number") return node
  if (node instanceof Array) return node.map(getNodeText).join("")
  if (React.isValidElement(node)) return getNodeText(node.props.children)
  return ""
}
