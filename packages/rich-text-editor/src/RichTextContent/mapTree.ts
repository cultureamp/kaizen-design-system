import React from "react"
import { typeMap } from "./typeMap"

export const mapTree = (leaf, options) => {
  // Default text nodes without any marks are just strings in React
  if (leaf.type === "text" && (!leaf.marks || leaf.marks.length === 0)) {
    return leaf.text
  }

  // See if we have a type handler registered for the given type
  const typeHandler = typeMap[leaf.type]
  if (!typeHandler) {
    // if (!options.skipUnknownTypes) {
    //   throw new Error("No handler for node type `" + leaf.type + "` registered")
    // }

    return null
  }

  // Map any children to React elements
  const props =
    typeof typeHandler === "string" ? leaf.attrs : { ...options, node: leaf }
  let args = [typeHandler, props]

  // Map any children
  if (leaf.content && leaf.content.length > 0) {
    args = args.concat(
      leaf.content.map(function (child) {
        return mapTree(child, options)
      })
    )
  }

  return React.createElement.apply(React, args)
}
