import type { Command, Transaction } from 'prosemirror-state'
import { type EditorView } from 'prosemirror-view'

export type MaybeCommand = Command | Transaction

export type Dispatcher = (tx: Transaction) => void

export interface CAEditorView extends EditorView {
  dispatch(maybeCommand: MaybeCommand): void
}

export type SelectionPosition = {
  top: number
  left: number
  height: number
  width: number
}
