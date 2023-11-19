import { MarkType, ResolvedPos } from "prosemirror-model"
import { MarkRange } from "../core/types"

// Note: this doesn't handle selections _across_ nodes.
// At the time of writing the implication of this is on links: they cannot span across multiple nodes.
// There's no impact on the other marks like bold, italics and underline.
export const getMarkRange = (
  $pos: ResolvedPos | null = null,
  type: MarkType | null = null
): MarkRange | null => {
  if (!$pos || !type) {
    return null
  }

  const start = $pos.parent.childAfter($pos.parentOffset)

  if (!start.node) {
    return null
  }

  const mark = start.node.marks.find(m => m.type === type)
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
