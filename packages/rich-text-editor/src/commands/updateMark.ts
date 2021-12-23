// import { CommandFactory } from "@cultureamp/rich-text-editor"
import { EditorState, Transaction } from "prosemirror-state"
import { MarkType } from "prosemirror-model"
import { getMarkRange } from "./marks"

export const updateMark: CommandFactory = (
  type: MarkType,
  attrs: Object,
  options: {
    toExtent: boolean
  } = { toExtent: false }
) => (state: EditorState, dispatch: (tx: Transaction) => void) => {
  const { tr, selection, doc } = state
  let { from, to } = selection
  const { $from, empty } = selection

  if (empty || options.toExtent) {
    const range = getMarkRange($from, type)
    if (range) {
      from = range.from
      to = range.to
    }
  }

  const hasMark = doc.rangeHasMark(from, to, type)
  if (hasMark) {
    tr.removeMark(from, to, type)
  }
  tr.addMark(from, to, type.create(attrs))
  dispatch(tr)

  return true
}
