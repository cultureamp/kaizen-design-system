import React, { useEffect } from "react"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
// import { EditorContentArray } from "ca-ui/RichTextEditor/types.d"
import { useRichTextEditor } from "../"
import schema from "./schema"
import { createInitialState, customKeymap, createDocFromContent } from "./state"
import { hardBreak, strong, em, underline } from "./commands"
import styles from "./RichTextEditor.scss"

export type EditorContentArray = Array<{ [key: string]: any }>

type Props = {
  onChange: (content: EditorContentArray) => void
  value: EditorContentArray
  toolbar: ToolbarOption[][]
}

type ToolbarOption =
  | "bold"
  | "em"
  | "underline"
  | "unorderedList"
  | "orderedList"
  | "link"

const toolbarObject = new Map([
  ["bold", { shortcut: "Mod-b", shortcutCmd: strong }],
  ["em", { shortcut: "Mod-i", shortcutCmd: em }],
  ["underline", { shortcut: "Mod-u", shortcutCmd: underline }],
])

const addShortcuts = (options: ToolbarOption[], schema: any) => {
  const defaultKeys = {
    "Shift-Enter": hardBreak,
  }
  const customKeys = options.reduce((accumulatedOptions, currentOption) => {
    const optionProp = toolbarObject.get(currentOption)
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
  const { onChange, value, toolbar } = props
  const [editorRef, editorState] = useRichTextEditor(
    createInitialState(
      value ? createDocFromContent(schema, value) : null,
      schema,
      [
        history(),
        addShortcuts(toolbar.flat(), schema),
        // addKeymap(toolbar)
      ]
    )
  )

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)

    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState])

  return <div ref={editorRef} className={styles.editor} />
}
