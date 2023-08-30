import React, { useState, HTMLAttributes } from "react"
import classnames from "classnames"
import { Node, Schema } from "prosemirror-model"
import { EditorState } from "prosemirror-state"
import { OverrideClassName } from "~types/OverrideClassName"
import { useRichTextEditor } from "../RichTextToolkit"
import { EditorContentArray } from "../types"
import { createSchemaWithAll } from "../utils"
import styles from "./RichTextContent.module.scss"

export interface RichTextContentProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "content">> {
  content: EditorContentArray
}

export const RichTextContent = (props: RichTextContentProps): JSX.Element => {
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
