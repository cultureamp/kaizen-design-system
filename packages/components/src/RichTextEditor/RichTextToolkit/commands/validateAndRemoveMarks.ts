import { Mark, MarkType, Node } from "prosemirror-model"
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

type MatchedMarks = Array<{
  style: Mark
  from: number
  to: number
  step: number
}>

/** Validate the given mark type against the selected nodes */
const getValidatedMarks = (
  node: Node,
  markType: MarkType,
  validator: AttrsValidator
): Mark[] | null => {
  const validatedMark: Mark | undefined = markType.isInSet(node.marks)
  if (validatedMark && !validator(validatedMark.attrs)) {
    return [validatedMark]
  }
  return null
}

// This is a variation on the removeMark transform in
// https://github.com/ProseMirror/prosemirror-transform/blob/master/src/mark.js#L44
/** This will walk the full doc and remove the Marks that fail the validator method */
export function validateAndRemoveMarks(
  markType: MarkType,
  validator: AttrsValidator
) {
  return (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    if (!dispatch) return false
    const from: number = 0
    const to: number = state.doc.content.size
    const { tr } = state
    const matchedMarks: MatchedMarks = []

    let step = 0
    tr.doc.nodesBetween(from, to, (node, pos) => {
      step++
      const marksToRemove = getValidatedMarks(node, markType, validator)
      if (marksToRemove && marksToRemove.length) {
        const end = Math.min(pos + node.nodeSize, to)
        for (const markToRemove of marksToRemove) {
          let found

          for (const matchedMark of matchedMarks) {
            if (
              matchedMark.step === step - 1 &&
              markToRemove.eq(matchedMark.style)
            ) {
              found = matchedMark
            }
          }

          if (found) {
            found.to = end
            found.step = step
          } else {
            matchedMarks.push({
              style: markToRemove,
              from: Math.max(pos, from),
              to: end,
              step,
            })
          }
        }
      }
    })
    matchedMarks.forEach(m =>
      tr.step(new RemoveMarkStep(m.from, m.to, m.style))
    )
    dispatch(tr)
    return true
  }
}
