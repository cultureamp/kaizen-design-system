import React, { useState, useEffect, useRef } from "react"
import { history, redo, undo } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { Label } from "@kaizen/draft-form"
import { useRichTextEditor } from "@cultureamp/rich-text-editor"
import { toggleMark, baseKeymap } from "prosemirror-commands"
import { EditorContentArray } from "./types"
import { createSchemaFromControls } from "./schema"
import { createInitialState, createDocFromContent } from "./state"
import { hardBreak } from "./commands"
import { Toolbar } from "./components/Toolbar"
import styles from "./RichTextEditor.scss"

type ToolbarControls = "strong" | "em" | "underline"

export interface RichTextEditorProps {
  onChange: (content: EditorContentArray) => void
  value: EditorContentArray
  controls: ToolbarControls[][]
  labelText: string
  id: string
}

export const RichTextEditor = (props: RichTextEditorProps) => {
  const { onChange, value, controls } = props
  const componentRef = useRef<HTMLDivElement>(null)
  const [schema] = useState(createSchemaFromControls(controls.flat()))
  const marksFromControls = controls.map(controlGroup =>
    controlGroup.map(control => schema.marks[control])
  )

  const [editorRef, editorState, dispatchTransaction] = useRichTextEditor(
    createInitialState(
      value ? createDocFromContent(schema, value) : null,
      schema,
      [history(), addShortcuts(marksFromControls.flat())]
    )
    // {
    //   "aria-labelledby": props.id,
    // }
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
          <Toolbar
            marks={marksFromControls}
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

const addShortcuts = (marks: any) => {
  const customKeys = marks.reduce(
    (acc, currentMark) => ({
      ...acc,
      [currentMark.spec.control.shortcut]: toggleMark(currentMark),
    }),
    {}
  )

  return keymap({
    ...baseKeymap,
    "Mod-z": undo,
    "Mod-Shift-z": redo,
    "Shift-Enter": hardBreak,
    ...customKeys,
  })
}
