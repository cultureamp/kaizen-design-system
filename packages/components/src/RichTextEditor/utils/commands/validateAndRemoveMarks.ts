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

// This is a variation on the removeMark transform in
// https://github.com/ProseMirror/prosemirror-transform/blob/master/src/mark.js#L44
/** This will walk the full doc and remove the Marks that fail the validator method */
export function validateAndRemoveMarks(
  markType: MarkType,
  validator: AttrsValidator
) {
  return (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    if (!dispatch) return false

    const from = 0
    const to = state.doc.content.size
    const { tr } = state

    const matched: Array<{
      style: Mark
      from: number
      to: number
      step: number
    }> = []

    let step = 0
    tr.doc.nodesBetween(from, to, (node, pos) => {
      step++
      let toRemove: Mark[] | null = null
      const found = markType.isInSet(node.marks)
      if (found && !validator(found.attrs)) {
        toRemove = [found]
      }
      if (toRemove && toRemove.length) {
        const end = Math.min(pos + node.nodeSize, to)
        for (let i = 0; i < toRemove.length; i++) {
          const style = toRemove[i]
          let found
          for (let j = 0; j < matched.length; j++) {
            const m = matched[j]
            if (m.step === step - 1 && style.eq(matched[j].style)) {
              found = m
            }
          }
          if (found) {
            found.to = end
            found.step = step
          } else {
            matched.push({ style, from: Math.max(pos, from), to: end, step })
          }
        }
      }
    })
    matched.forEach(m => tr.step(new RemoveMarkStep(m.from, m.to, m.style)))
    dispatch(tr)
    return true
  }
}
