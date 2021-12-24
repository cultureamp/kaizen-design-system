import React, { useEffect, useRef } from "react"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
// import { EditorContentArray } from "ca-ui/RichTextEditor/types.d"
import { Label } from "@kaizen/draft-form"
import { useRichTextEditor } from "../"
import schema from "./schema"
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

const addShortcuts = (options: ToolbarControls[]) => {
  const defaultKeys = {
    "Shift-Enter": hardBreak,
  }
  const customKeys = options.reduce((accumulatedOptions, currentOption) => {
    const optionProp = toolbarControls.get(currentOption)
    if (!optionProp) return accumulatedOptions
    return {
      ...accumulatedOptions,
      [optionProp["shortcut"]]: optionProp["shortcutCmd"],
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

  const [editorRef, editorState, dispatchTransaction] = useRichTextEditor(
    createInitialState(
      value ? createDocFromContent(schema, value) : null,
      schema,
      [history(), addShortcuts(controls.flat())]
    ),
    {
      "aria-labelledby": props.id,
    }
  )

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)

    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState])

  return (
    <>
      <Label id={props.id} labelText={props.labelText} />
      <div className={styles.editorComponent} ref={componentRef}>
        <div className={styles.toolbar}>
          <Toolbar
            controls={controls}
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
