import { EditorState, Transaction } from "prosemirror-state"
import { EditorView } from "prosemirror-view"
// import { CAEditorView, MaybeCommand } from "./types.d"

type EditorAPI = {
  destroy: () => void
  dispatchTransaction: (maybeCommand: any) => void
}

type EditorArgs = {
  initialEditorState: EditorState
  node: HTMLElement
  onChange: (editorState: EditorState) => void
}

export function createRichTextEditor({
  initialEditorState,
  node,
  onChange = () => undefined,
}: EditorArgs): EditorAPI {
  // editorView is reassigned below ¯\_(ツ)_/¯
  // eslint-disable-next-line prefer-const
  let editorView: any

  // Handle transactions eminating from the EditorView instance
  function dispatch(tx: Transaction): void {
    const newEditorState = editorView && editorView.state.apply(tx)
    if (newEditorState) {
      onChange(newEditorState)
      editorView && editorView.updateState(newEditorState)
    }
  }

  function dispatchTransaction(maybeCommand: any) {
    if (maybeCommand instanceof Transaction) {
      dispatch(maybeCommand)
    } else if (editorView) {
      maybeCommand(editorView.state, dispatch)
    }
  }

  editorView = new EditorView(node, {
    state: initialEditorState,
    dispatchTransaction,
  })

  return {
    destroy: () => {
      editorView && editorView.destroy()
    },
    dispatchTransaction,
  }
}
