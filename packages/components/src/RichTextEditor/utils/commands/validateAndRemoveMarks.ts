import { Mark, MarkType } from "prosemirror-model"
import { EditorState, Transaction } from "prosemirror-state"
import { RemoveMarkStep } from "prosemirror-transform"

type KnownAttrs = {
  varibleHref?: string
  href?: string
}

export type AttrsValidator = (
  attrs: KnownAttrs & {
    [key: string]: unknown
  }
) => boolean | unknown

type MatchedMark = {
  style: Mark
  from: number
  to: number
  step: number
}

// This is a variation on the removeMark transform in
// https://github.com/ProseMirror/prosemirror-transform/blob/master/src/mark.js#L44
/** This will walk the full doc and remove the Marks that fail the validator method */
export const validateAndRemoveMarks =
  (markType: MarkType, validator: AttrsValidator) =>
  (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    if (!dispatch) return false

    const from = 0
    const to = state.doc.content.size
    const { tr } = state

    const matched: MatchedMark[] = []

    let step = 0

    tr.doc.nodesBetween(from, to, (node, pos) => {
      step++

      const foundMark = markType.isInSet(node.marks)

      if (foundMark && !validator(foundMark.attrs)) {
        matched.push({
          style: foundMark,
          from: Math.max(pos, from),
          to: Math.min(pos + node.nodeSize, to),
          step,
        })
      }
    })

    matched.forEach(m => tr.step(new RemoveMarkStep(m.from, m.to, m.style)))
    dispatch(tr)
    return true
  }
