import React, { HTMLAttributes } from "react"
import { OverrideClassName } from "@kaizen/component-base"
import { EditorContentArray } from "../types"
import { mapTree } from "./mapTree"
import { markMap as defaultMarkMap } from "./markMap"

export interface RichTextContentProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: EditorContentArray
}

export const RichTextContent: React.VFC<RichTextContentProps> = props => {
  const { children, markMap = defaultMarkMap } = props
  return mapTree(
    {
      type: "doc",
      content: children,
    },
    { markMap }
  )
}

RichTextContent.displayName = "RichTextContent"
