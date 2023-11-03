import { Transaction, Command } from "prosemirror-state"
import { EditorView } from "prosemirror-view"

export type MaybeCommand = Command | Transaction

export type Dispatcher = (tx: Transaction) => void

export class CAEditorView extends EditorView {
  dispatch(maybeCommand: MaybeCommand): void
}

export type SelectionPosition = {
  top: number
  left: number
  height: number
  width: number
}
