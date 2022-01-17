import React, { useEffect, useRef } from "react"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { Label } from "@kaizen/draft-form"
import { useRichTextEditor } from "@cultureamp/rich-text-editor"
import { toggleMark } from "prosemirror-commands"
import { Schema } from "prosemirror-model"
import { EditorContentArray } from "./types"
import { createInitialState, customKeymap, createDocFromContent } from "./state"
import { hardBreak } from "./commands"
import { CustomToolbar } from "./components/CustomToolbar"
import styles from "./RichTextEditor.scss"

type Props = {
  onChange: (content: EditorContentArray) => void
  value: EditorContentArray
  schema: Schema<string, string>
  labelText: string
  id: string
}

const addShortcuts = schema => {
  const defaultKeys = {
    "Shift-Enter": hardBreak,
  }
  const customKeys = Object.keys(schema.marks).reduce(
    (accumulatedOptions, currentOption) => {
      const mark = schema.marks[currentOption]
      return {
        ...accumulatedOptions,
        [mark.spec.control.shortcut]: toggleMark(mark),
      }
    },
    {}
  )

  return keymap(
    customKeymap({
      ...defaultKeys,
      ...customKeys,
    })
  )
}

export const CustomRichTextEditor = (props: Props) => {
  const { onChange, value, schema } = props
  const componentRef = useRef<HTMLDivElement>(null)

  const [editorRef, editorState, dispatchTransaction] = useRichTextEditor(
    createInitialState(
      value ? createDocFromContent(schema, value) : null,
      schema,
      [history(), addShortcuts(schema)]
    )
  )

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)

    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
  }, [editorState])

  return (
    <>
      <Label id={props.id} labelText={props.labelText} />
      <div className={styles.editorComponent} ref={componentRef}>
        <div className={styles.toolbar}>
          <CustomToolbar
            schema={schema}
            dispatchTransaction={dispatchTransaction}
            editorState={editorState}
            componentRef={componentRef}
          />
        </div>
        <div ref={editorRef} className={styles.editor} />
      </div>
    </>
  )
}
