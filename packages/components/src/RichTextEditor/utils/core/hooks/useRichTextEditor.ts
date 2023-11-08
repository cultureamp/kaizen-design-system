import { useCallback, useEffect, useRef, useState } from "react"
import { EditorState } from "prosemirror-state"
import { createRichTextEditor } from "../createRichTextEditor"
import { CommandOrTransaction } from "../types"

type RTEOptions = {
  editable: boolean
}

type SetEditableStatus = (status: boolean) => void

type UseRichTextEditorReturnValue = [
  React.RefCallback<HTMLElement>,
  EditorState,
  (commandOrTransaction: CommandOrTransaction) => void,
  SetEditableStatus,
]

/**
 * useRichTextEditor
 * React hook to initialize a ProseMirror editor, handle binding it to the DOM,
 * and updating the state within React’s lifecycle.
 *
 * @param {initialEditorState} ProseMirror state
 * @returns {Array}
 */
export const useRichTextEditor = (
  initialEditorState: EditorState,
  /*
   * Pass in HTML attributes into the parent RTE node
   */
  attributes?: Record<string, string>,
  options?: RTEOptions
): UseRichTextEditorReturnValue => {
  options = {
    editable: true,
    ...options,
  }
  const [editorState, setEditorState] =
    useState<EditorState>(initialEditorState)
  // Refs to hold the methods returned from ProseMirror’s initialization
  const destroyEditorRef = useRef<() => void>()
  const dispatchTransactionRef = useRef<
    (commandOrTransaction: CommandOrTransaction) => void
  >(() => undefined)

  // Construct a consistent reference to call the dispatchTransactionRef without
  // forcing the consumer to unwind it
  const dispatchTransaction = useCallback(
    (commandOrTransaction: CommandOrTransaction) => {
      dispatchTransactionRef.current(commandOrTransaction)
    },
    [dispatchTransactionRef]
  )

  // Hold editableStatus as a ref so we can toggle its status
  const editableStatusRef = useRef<boolean>(options.editable)
  const setEditableStatus = useCallback<SetEditableStatus>(
    status => {
      editableStatusRef.current = status
      // Trigger an update within ProseMirror by issuing a noop transaction
      dispatchTransaction((state, dispatch) => {
        if (!dispatch) return false
        dispatch(state.tr)
        return true
      })
    },
    [editableStatusRef]
  )

  const editorRef = useCallback(
    (node: HTMLElement) => {
      if (node !== null) {
        const instance = createRichTextEditor({
          node,
          initialEditorState: editorState,
          onChange: setEditorState,
          isEditable: () => editableStatusRef.current,
          attributes,
        })
        destroyEditorRef.current = instance.destroy
        dispatchTransactionRef.current = instance.dispatchTransaction
      }
    },

    // Including editorState in the dependencies here will cause an endless
    // loop as the initialization changes its value
    [setEditorState, editableStatusRef]
  )

  // Tear down ProseMirror when the consuming component is unmounted
  useEffect(
    () => () => {
      if (destroyEditorRef.current) {
        destroyEditorRef.current()
      }
    },
    [destroyEditorRef]
  )

  return [editorRef, editorState, dispatchTransaction, setEditableStatus]
}
