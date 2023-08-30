import { MarkType } from "prosemirror-model"
import { EditorState, Transaction } from "prosemirror-state"
import { CommandFactory, MarkRange } from "../core/types"
import { getMarkRange } from "./getMarkRange"

/** Remove part or all of the Mark from the current selection */
export const removeMark: CommandFactory =
  (
    type: MarkType,
    options: {
      range?: MarkRange
      /** Select of the entire content of the mark  */
      toExtent: boolean
    } = { toExtent: false }
  ) =>
  (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    const { tr, selection, doc } = state
    let { from, to } = selection
    const { $from } = selection

    if (!dispatch) return false
    if (selection.empty) {
      dispatch(tr.removeStoredMark(type))
    } else {
      if (options.range || options.toExtent) {
        const range = options.range || getMarkRange($from, type)
        if (range) {
          from = range.from
          to = range.to
        }
      }
      const hasMark = doc.rangeHasMark(from, to, type)
      if (hasMark) {
        tr.removeMark(from, to, type)
      }
      dispatch(tr)
    }

    return true
  }
