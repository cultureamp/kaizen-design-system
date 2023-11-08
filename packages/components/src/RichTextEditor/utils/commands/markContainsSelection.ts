import { MarkType } from "prosemirror-model"
import { EditorState } from "prosemirror-state"
import { getMarkRange } from "./getMarkRange"
import { markIsActive } from "./markIsActive"

/** Check the current PM Selection against the Mark Type provided */
export const markContainsSelection = (
  state: EditorState,
  markType: MarkType
): boolean => {
  if (!markIsActive(state, markType)) {
    return false
  }
  const { selection } = state
  const { $from } = selection
  const markRange = getMarkRange($from, markType)
  return (
    !!markRange &&
    markRange.from <= selection.from &&
    markRange.to >= selection.to
  )
}
