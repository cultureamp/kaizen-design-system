import React, { useState, useEffect, useRef } from "react"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { Label } from "@kaizen/draft-form"
import { baseKeymap } from "prosemirror-commands"
import {
  buildKeymap,
  useRichTextEditor,
  markIsActive,
  markContainsSelection,
  removeMark,
  addMark,
} from "@cultureamp/rich-text-toolkit"
import {
  Toolbar,
  ToolbarSection,
  ToggleIconButton,
} from "@kaizen/rich-text-editor"
import { EditorContentArray } from "./types"
import { createSchemaFromControls } from "./schema"
import { createInitialState, createDocFromContent } from "./state"
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
      [
        history(),
        keymap({
          ...baseKeymap,
          ...buildKeymap(schema),
        }),
      ]
    ),
    {
      "aria-labelledby": props.id,
    }
  )

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)
    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
  }, [editorState])

  return (
    <>
      <Label id={props.id} labelText={props.labelText} />
      <div className={styles.editorComponent} ref={componentRef}>
        <Toolbar aria-controls="toolbar-ref-id" aria-label="Test Toolbar">
          {marksFromControls.map((controlSection, sectionIndex) => (
            <ToolbarSection key={sectionIndex}>
              {controlSection.map((mark, markIndex) => {
                const isActive = markIsActive(editorState, mark) || false
                const action = !isActive ? addMark(mark) : removeMark(mark)
                return (
                  <ToggleIconButton
                    key={markIndex}
                    icon={mark.spec.control.icon}
                    label={mark.spec.control.label}
                    isActive={isActive}
                    onClick={() => dispatchTransaction(action)}
                  />
                )
              })}
            </ToolbarSection>
          ))}
        </Toolbar>
        <div id="toolbar-ref-id" ref={editorRef} className={styles.editor} />
      </div>
    </>
  )
}
