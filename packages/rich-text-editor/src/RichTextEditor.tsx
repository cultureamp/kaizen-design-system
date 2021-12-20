import React, { useEffect } from "react"
import { history } from "prosemirror-history"
import { keymap } from "prosemirror-keymap"
// import { EditorContentArray } from "ca-ui/RichTextEditor/types.d"
import { useRichTextEditor } from "../"
import schema from "./schema"
import { createInitialState, customKeymap, createDocFromContent } from "./state"
import { hardBreak, strong } from "./commands"
import styles from "./RichTextEditor.scss"

export type EditorContentArray = Array<{ [key: string]: any }>

type Props = {
  onChange: (content: EditorContentArray) => void
  value: EditorContentArray
}

export const RichTextEditor = (props: Props) => {
  const { onChange, value } = props
  const [editorRef, editorState] = useRichTextEditor(
    createInitialState(
      value ? createDocFromContent(schema, value) : null,
      schema,
      [
        history(),
        keymap(
          customKeymap({
            "Shift-Enter": hardBreak,
            "Mod-b": strong(schema),
          })
        ),
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
