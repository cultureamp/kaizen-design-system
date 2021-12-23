import { EditorState } from "prosemirror-state"
// import { MarkRange } from "@cultureamp/rich-text-editor"
import { Mark, MarkType, ResolvedPos } from "prosemirror-model"

export function markActive(type: MarkType) {
  return (state: EditorState): boolean => {
    const { from, $from, to, empty } = state.selection
    if (empty) return !!type.isInSet(state.storedMarks || $from.marks())
    else return state.doc.rangeHasMark(from, to, type)
  }
}

// TODO this doesn't handle selections _across_ nodes
export function getMarkRange(
  $pos: ResolvedPos | null = null,
  type: MarkType | null = null
): MarkRange | null {
  if (!$pos || !type) {
    return null
  }

  const start = $pos.parent.childAfter($pos.parentOffset)

  if (!start.node) {
    return null
  }

  const mark = start.node.marks.find(mark => mark.type === type)
  if (!mark) {
    return null
  }

  let startIndex = $pos.index()
  let startPos = $pos.start() + start.offset
  let endIndex = startIndex + 1
  let endPos = startPos + start.node.nodeSize

  while (
    startIndex > 0 &&
    mark.isInSet($pos.parent.child(startIndex - 1).marks)
  ) {
    startIndex -= 1
    startPos -= $pos.parent.child(startIndex).nodeSize
  }

  while (
    endIndex < $pos.parent.childCount &&
    mark.isInSet($pos.parent.child(endIndex).marks)
  ) {
    endPos += $pos.parent.child(endIndex).nodeSize
    endIndex += 1
  }

  return { from: startPos, to: endPos }
}

export function markContainsSelection(
  state: EditorState,
  markType: MarkType
): boolean {
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

export function markIsActive(state: EditorState, type: MarkType) {
  const { from, $from, to, empty } = state.selection

  if (empty) {
    return !!type.isInSet(state.storedMarks || $from.marks())
  }

  return !!state.doc.rangeHasMark(from, to, type)
}

export function getMarkAttrs(
  state: EditorState,
  type: MarkType
): { [key: string]: unknown } {
  const { from, to } = state.selection
  let marks: Mark[] = []

  state.doc.nodesBetween(from, to, node => {
    marks = [...marks, ...node.marks]
  })

  const mark = marks.find(markItem => markItem.type.name === type.name)

  if (mark) {
    return mark.attrs
  }

  return {}
}
