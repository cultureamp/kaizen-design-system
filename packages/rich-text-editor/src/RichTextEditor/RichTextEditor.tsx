import React, { useState, useEffect, HTMLAttributes, ReactNode } from "react"
import { v4 } from "uuid"
import classnames from "classnames"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { EditorState } from "prosemirror-state"
import { Node, Schema } from "prosemirror-model"
import { Label } from "@kaizen/draft-form"
import { baseKeymap } from "prosemirror-commands"
import { useRichTextEditor } from "@cultureamp/rich-text-toolkit"
import { OverrideClassName } from "@kaizen/component-base"
import { EditorContentArray } from "./types"
import { createSchemaFromControls } from "./schema"
import { buildKeymap } from "./keymap"
import { buildInputRules } from "./inputrules"
import styles from "./RichTextEditor.scss"

export interface RichTextEditorProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "onChange">> {
  onChange: (content: EditorContentArray) => void
  value: EditorContentArray
  labelText: ReactNode
  /**
   * Sets a default min-height for the editable area in units of body paragraph line height, similar to the 'rows' attribute on <textarea>.
   * The editable area will autogrow, so this only affects the component when the content doesn't exceed this height.
   */
  rows?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
}

export const RichTextEditor: React.VFC<RichTextEditorProps> = props => {
  const {
    onChange,
    value,
    labelText,
    rows = 3,
    classNameOverride,
    ...restProps
  } = props
  const [schema] = useState<Schema>(createSchemaFromControls([]))
  const [labelId] = useState<string>(v4())
  const [editorRef, editorState] = useRichTextEditor(
    EditorState.create({
      doc: value
        ? Node.fromJSON(schema, {
            type: "doc",
            contentObject: value,
          })
        : null,
      schema,
      plugins: [
        history(),
        keymap(buildKeymap(schema)),
        keymap(baseKeymap),
        buildInputRules(schema),
      ],
    }),
    { "aria-labelledby": labelId }
  )

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)
    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
  }, [editorState])

  return (
    <>
      {labelText && <Label id={labelId} labelText={labelText} />}
      {/* TODO: add a bit of margin here once we have a classNameOverride on Label */}
      <div
        ref={editorRef}
        className={classnames(
          styles.editor,
          styles[`rows${rows}`],
          classNameOverride
        )}
        {...restProps}
      />
    </>
  )
}

RichTextEditor.displayName = "RichTextEditor"
