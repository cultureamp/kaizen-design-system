import React, { useState, HTMLAttributes } from "react"
import classnames from "classnames"
import {
  ProseMirrorState,
  ProseMirrorModel,
  useRichTextEditor,
} from "@cultureamp/rich-text-toolkit"
import { OverrideClassName } from "@kaizen/component-base"
import { EditorContentArray } from "../types"
import { createSchemaWithAll } from "../RichTextEditor/schema"
import styles from "./RichTextContent.module.scss"

export interface RichTextContentProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  content: EditorContentArray
}

export const RichTextContent = (props: RichTextContentProps) => {
  const { content, classNameOverride, ...restProps } = props
  const [schema] = useState<ProseMirrorModel.Schema>(createSchemaWithAll())

  const [editorRef] = useRichTextEditor(
    ProseMirrorState.EditorState.create({
      doc: ProseMirrorModel.Node.fromJSON(schema, {
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
