import { MarkType } from "prosemirror-model"
import { EditorState, Transaction } from "prosemirror-state"
import { CommandFactory } from "../core/types"

/** Wrap the users current selection in the given Mark type   */
export const addMark: CommandFactory =
  (type: MarkType, attrs?: Record<string, unknown>) =>
  (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    const { tr, selection } = state
    const { $from, $to } = selection
    if (!dispatch) return false
    if (selection.empty) {
      dispatch(tr.addStoredMark(type.create(attrs)))
    } else {
      tr.addMark($from.pos, $to.pos, type.create(attrs))

      dispatch(tr.scrollIntoView())
    }
    return true
  }
