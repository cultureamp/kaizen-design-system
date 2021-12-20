import { EditorState } from "prosemirror-state"
import { useCallback, useEffect, useRef, useState } from "react"
// import { MaybeCommand } from "../types.d"
import { createRichTextEditor } from "../create"

export function useRichTextEditor(
  initialEditorState: EditorState
): [any, EditorState, (maybeCommand: any) => void] {
  const [editorState, setEditorState] = useState<EditorState>(
    initialEditorState
  )
  const destroyEditorRef = useRef<() => void>()
  const dispatchTransactionRef = useRef<(maybeCommand: any) => void>(
    () => undefined
  )

  const editorRef = useCallback(
    (node: HTMLElement) => {
      if (node !== null) {
        const instance = createRichTextEditor({
          node,
          initialEditorState: editorState,
          onChange: setEditorState,
        })
        // We need to set these lazily to ensure useState retains the functions
        // as values (otherwise they get evaluated immediately)
        // https://reactjs.org/docs/hooks-reference.html#lazy-initialization
        destroyEditorRef.current = instance.destroy
        dispatchTransactionRef.current = instance.dispatchTransaction
      }
    },

    // Including editorState in the dependencies here will cause explosions
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setEditorState]
  )

  // Destroy when the consuming component is unmounted
  useEffect(
    () => () => {
      if (destroyEditorRef.current) {
        destroyEditorRef.current()
      }
    },
    [destroyEditorRef]
  )

  return [editorRef, editorState, dispatchTransactionRef.current]
}
