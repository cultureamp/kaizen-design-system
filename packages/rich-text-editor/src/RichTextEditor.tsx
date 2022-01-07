import React, { useState, useEffect, useRef } from "react"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
// import { EditorContentArray } from "ca-ui/RichTextEditor/types.d"
import { Label } from "@kaizen/draft-form"
import { useRichTextEditor } from "@cultureamp/rich-text-editor"
import { toggleMark } from "prosemirror-commands"
import { createSchemaFromControls } from "./schema"
import { toolbarControls, ToolbarControls } from "./constants"
import { createInitialState, customKeymap, createDocFromContent } from "./state"
import { hardBreak } from "./commands"
import { Toolbar } from "./components/Toolbar"
import styles from "./RichTextEditor.scss"

export type EditorContentArray = Array<{ [key: string]: any }>

type Props = {
  onChange: (content: EditorContentArray) => void
  value: EditorContentArray
  controls: ToolbarControls[][]
  labelText: string
  id: string
}

const addShortcuts = (options: ToolbarControls[], schema) => {
  const defaultKeys = {
    "Shift-Enter": hardBreak,
  }
  const customKeys = options.reduce((accumulatedOptions, currentOption) => {
    const optionProp = toolbarControls.get(currentOption)
    if (!optionProp) return accumulatedOptions
    const shortcutCmd = schema.marks[currentOption]
    return {
      ...accumulatedOptions,
      [optionProp["shortcut"]]: toggleMark(shortcutCmd),
    }
  }, {})

  return keymap(
    customKeymap({
      ...defaultKeys,
      ...customKeys,
    })
  )
}

export const RichTextEditor = (props: Props) => {
  const { onChange, value, controls } = props
  const componentRef = useRef<HTMLDivElement>(null)
  const [schema] = useState(createSchemaFromControls(controls.flat()))

  const [editorRef, editorState, dispatchTransaction] = useRichTextEditor(
    createInitialState(
      value ? createDocFromContent(schema, value) : null,
      schema,
      [history(), addShortcuts(controls.flat(), schema)]
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
            controls={controls}
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
