import { EditorState, Transaction } from "prosemirror-state"
import { MarkType } from "prosemirror-model"
import { CommandFactory } from "@cultureamp/rich-text-editor"

export const addMark: CommandFactory = (
  type: MarkType,

  attrs?: Record<string, unknown>
) => (state: EditorState, dispatch: (tx: Transaction) => void) => {
  const { tr, selection } = state
  const { $from, $to } = selection

  if (selection.empty) {
    dispatch(tr.addStoredMark(type.create(attrs)))
  } else {
    tr.addMark($from.pos, $to.pos, type.create(attrs))
    dispatch(tr.scrollIntoView())
  }
  return true
}
