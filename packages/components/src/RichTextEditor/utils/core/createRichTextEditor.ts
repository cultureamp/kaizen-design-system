import { EditorState, Transaction } from 'prosemirror-state'
import { EditorView as ProseMirrorEditorView } from 'prosemirror-view'
import { CommandOrTransaction } from './types'

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
  attributes?: Record<string, string>
  isEditable?: () => boolean
}

/**
 * createRichTextEditor
 * Initialize a ProseMirror EditorView
 */
export const createRichTextEditor = ({
  initialEditorState,
  node,
  onChange = () => undefined,
  attributes,
  isEditable = () => true,
}: EditorArgs): EditorAPI => {
  let editorView: ProseMirrorEditorView | null = null

  // Handle transactions eminating from the EditorView instance
  const dispatch = (tx: Transaction): void => {
    const newEditorState = editorView?.state.apply(tx)
    if (newEditorState) {
      onChange(newEditorState)
      editorView?.updateState(newEditorState)
    }
  }

  // Allow the dispatcher to handle either a Command or a Transaction so we can
  // change the state more ergonomically upstream
  const dispatchCommandOrTransaction = (commandOrTransaction: CommandOrTransaction): void => {
    if (commandOrTransaction instanceof Transaction) {
      dispatch(commandOrTransaction)
    } else if (editorView) {
      commandOrTransaction(editorView.state, dispatch)
    }
  }

  editorView = new ProseMirrorEditorView(node, {
    state: initialEditorState,
    dispatchTransaction: dispatchCommandOrTransaction,
    attributes,
    editable: isEditable,
  })

  return {
    destroy: () => {
      editorView?.destroy()
    },
    dispatchTransaction: dispatchCommandOrTransaction,
  }
}
