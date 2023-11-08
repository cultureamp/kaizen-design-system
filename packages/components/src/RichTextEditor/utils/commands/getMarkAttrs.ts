import { Attrs, Mark, MarkType } from "prosemirror-model"
import { EditorState } from "prosemirror-state"

/*
 ** Filters through the states Marks and returns the attributes
 ** of the Mark found, else returns and empty object
 */
export const getMarkAttrs = (state: EditorState, type: MarkType): Attrs => {
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
