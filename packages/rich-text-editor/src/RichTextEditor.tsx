import React, { useEffect } from "react"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
import { toggleMark } from "prosemirror-commands"
// import { EditorContentArray } from "ca-ui/RichTextEditor/types.d"
import { useRichTextEditor } from "../"
import schema from "./schema"
import { createInitialState, customKeymap, createDocFromContent } from "./state"
import { hardBreak } from "./commands"
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
  ["bold", { shortcut: "Mod-b", shortcutCmd: toggleMark(schema.marks.strong) }],
  ["em", { shortcut: "Mod-i", shortcutCmd: toggleMark(schema.marks.em) }],
  [
    "underline",
    { shortcut: "Mod-u", shortcutCmd: toggleMark(schema.marks.underline) },
  ],
])

const addShortcuts = (options: ToolbarOption[]) => {
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

  console.log("custom keys:", customKeys)
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
      [history(), addShortcuts(toolbar.flat())]
    )
  )

  useEffect(() => {
    onChange(editorState.toJSON().doc.content)

    // Including `onContentChange` in the dependencies here will cause a 'Maximum update depth exceeded' issue
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState])

  return <div ref={editorRef} className={styles.editor} />
}
