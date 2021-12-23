// import { CommandFactory, MarkRange } from "@cultureamp/rich-text-editor"
import { EditorState, Transaction } from "prosemirror-state"
import { MarkType } from "prosemirror-model"
import { getMarkRange } from "./marks"

export const removeMark: CommandFactory = (
  type: MarkType,
  options: {
    range?: MarkRange
    toExtent: boolean
  } = { toExtent: false }
) => (state: EditorState, dispatch: (tx: Transaction) => void) => {
  const { tr, selection, doc } = state
  let { from, to } = selection
  const { $from } = selection

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
