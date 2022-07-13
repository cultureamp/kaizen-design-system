import React, { useState, HTMLAttributes } from "react"
import classnames from "classnames"
import { EditorState } from "prosemirror-state"
import { useRichTextEditor } from "@cultureamp/rich-text-toolkit"
import { OverrideClassName } from "@kaizen/component-base"
import { Node, Schema } from "prosemirror-model"
import { EditorContentArray } from "../types"
import { createSchemaWithAll } from "../RichTextEditor/schema"
import styles from "./RichTextContent.scss"

interface RichTextContentProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  content: EditorContentArray
}

export const RichTextContent = (props: RichTextContentProps) => {
  const { content, classNameOverride, ...restProps } = props
  const [schema] = useState<Schema>(createSchemaWithAll())

  const [editorRef] = useRichTextEditor(
    EditorState.create({
      doc: Node.fromJSON(schema, {
        type: "doc",
        content,
      }),
      schema,
    }),
    undefined,
    {
      editable: false,
    }
  )

  return (
    <div
      ref={editorRef}
      className={classnames(styles.content, classNameOverride)}
      {...restProps}
    />
  )
}

RichTextContent.displayName = "RichTextContent"
