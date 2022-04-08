/* eslint-disable camelcase */
import { Paragraph } from "@kaizen/typography"
import React from "react"
import { mapTree } from "./mapTree"

const normalize = mark => {
  if (typeof mark === "string") {
    return { type: mark }
  } else if (typeof mark._ === "string") {
    // const newObj = omit(mark, "_")
    const newObj = mark
    newObj.type = mark._
    return newObj
  }

  return mark
}

const TextHandler = props =>
  // Use assigned mark handlers
  (props.node.marks || []).reduceRight(function reduceMark(child, mark) {
    const normalized = normalize(mark)
    const markHandler = props.markMap[normalized.type]

    if (!markHandler) {
      if (props.skipUnknownMarks) {
        return child
      }

      throw new Error(
        "No handler for mark type `" + normalized.type + "` registered"
      )
    }

    return React.createElement(markHandler, mark.attrs, child)
  }, props.node.text)

const Document = props => {
  let args = ["div", { className: props.className }]
  if (props.node.content && props.node.content.length > 0) {
    args = args.concat(
      props.node.content.map(function (node) {
        return mapTree(node, props)
      })
    )
  }

  return React.createElement.apply(React, args)
}

export const typeMap = {
  doc: Document,
  paragraph: props =>
    React.createElement(Paragraph, {
      variant: "body",
      ...props,
    }),
  hard_break: "br",
  text: TextHandler,
}
