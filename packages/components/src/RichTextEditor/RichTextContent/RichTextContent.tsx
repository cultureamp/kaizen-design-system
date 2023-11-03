import React, { useState, HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { createSchemaWithAll } from "../RichTextEditor/schema"
import { EditorContentArray } from "../types"
import { useRichTextEditor } from "../utils/core"
import { ProseMirrorModel, ProseMirrorState } from "../utils/prosemirror"
import styles from "./RichTextContent.module.scss"

export interface RichTextContentProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "content">> {
  content: EditorContentArray
}

export const RichTextContent = (props: RichTextContentProps): JSX.Element => {
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
