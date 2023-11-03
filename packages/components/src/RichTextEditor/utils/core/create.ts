import { EditorState, Transaction } from "prosemirror-state"
import { EditorView as ProseMirrorEditorView } from "prosemirror-view"
import { CommandOrTransaction } from "./types"

type EditorAPI = {
  destroy: () => void
  dispatchTransaction: (maybeCommand: CommandOrTransaction) => void
}

type EditorArgs = {
  initialEditorState: EditorState
  node: HTMLElement
  onChange: (editorState: EditorState) => void
  /*
   * Pass in HTML attributes into the parent RTE node
   */
  attributes?: {
    [name: string]: string
  }
  isEditable?: () => boolean
}

/**
 * createRichTextEditor
 * Initialize a ProseMirror EditorView
 */
export function createRichTextEditor({
  initialEditorState,
  node,
  onChange = () => undefined,
  attributes,
  isEditable = () => true,
}: EditorArgs): EditorAPI {
  // Handle transactions eminating from the EditorView instance
  function dispatch(tx: Transaction): void {
    const newEditorState = editorView && editorView.state.apply(tx)
    if (newEditorState) {
      onChange(newEditorState)
      editorView && editorView.updateState(newEditorState)
    }
  }

  // Allow the dispatcher to handle either a Command or a Transaction so we can
  // change the state more ergonomically upstream
  function dispatchCommandOrTransaction(
    commandOrTransaction: CommandOrTransaction
  ): void {
    if (commandOrTransaction instanceof Transaction) {
      dispatch(commandOrTransaction)
    } else if (editorView) {
      commandOrTransaction(editorView.state, dispatch)
    }
  }

  const editorView = new ProseMirrorEditorView(node, {
    state: initialEditorState,
    dispatchTransaction: dispatchCommandOrTransaction,
    attributes,
    editable: isEditable,
  })

  return {
    destroy: () => {
      editorView && editorView.destroy()
    },
    dispatchTransaction: dispatchCommandOrTransaction,
  }
}
