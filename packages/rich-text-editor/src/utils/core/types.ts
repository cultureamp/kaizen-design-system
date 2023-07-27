import { Command, Transaction } from "prosemirror-state"
import { EditorView as ProseMirrorEditorView } from "prosemirror-view"

/**
 * Dispatch receives a transaction from ProseMirror to effect changes to the
 * EditorState in order
 */
export type Dispatch = (tx: Transaction) => void

/**
 * Curry a Command
 */
export type CommandFactory = (...args: any[]) => Command

export type CommandOrTransaction = Command | Transaction

export type MarkRange = {
  from: number
  to: number
}

export type Doc = {
  type: string
  content: DocContent
}

export type DocContent = Array<Record<string, any>>

/**
 * Overload the EditorView` from ProseMirror to allow for the dispatch
 * function to take either a Command` or a Transaction
 */
export type EditorView = ProseMirrorEditorView & {
  dispatch(commandOrTransaction: CommandOrTransaction): void
}
