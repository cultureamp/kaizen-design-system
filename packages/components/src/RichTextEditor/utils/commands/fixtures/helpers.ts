import {
  TextSelection,
  type EditorState,
  type Selection,
  type Transaction,
} from 'prosemirror-state'
import { findChildrenByType } from 'prosemirror-utils'
import { type ProseMirrorModel } from '../../prosemirror'

/*
 ** Prosemirror cannot intuit a real `Selection` of content injected into the base test.
 ** To combat this you can pass in a start and end position of the your anchor (text node)
 ** This can be found using .$anchor.pos
 */
export const simulateRangeSelection =
  (anchorPositionStart: number = 0, anchorPositionEnd: number = 2) =>
  (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    const { tr } = state

    tr.setSelection(
      new TextSelection(tr.doc.resolve(anchorPositionStart), tr.doc.resolve(anchorPositionEnd)),
    )
    if (dispatch) {
      dispatch(tr)
    }
    return true
  }

export const getStartNode = (
  state: EditorState,
): ReturnType<ProseMirrorModel.Node['childAfter']> => {
  const currentSelection: Selection = state.tr.selection
  const startNode = currentSelection.$from.parent.childAfter(currentSelection.$from.parentOffset)
  return startNode
}

export const simulateSelectionOfCurrentElement =
  (selectEntireElement: boolean = false) =>
  (state: EditorState, dispatch: (tx: Transaction) => void) => {
    const { tr } = state
    let endPos = tr.selection.from + 1

    const startNode = getStartNode(state)
    const nodeLength = startNode.node?.nodeSize ?? 0

    if (selectEntireElement) {
      endPos = nodeLength + 1
    }

    tr.setSelection(new TextSelection(tr.doc.resolve(tr.selection.from), tr.doc.resolve(endPos)))
    if (dispatch) {
      dispatch(tr)
    }
    return true
  }

const getNodeByText = (
  state: EditorState,
  selectedText: string,
): {
  node: ProseMirrorModel.Node
  pos: number
} => {
  let filteredNodes = findChildrenByType(state.doc, state.schema.nodes.text, true)

  filteredNodes = filteredNodes.filter((textNode) => {
    if (textNode.node.text?.includes(selectedText)) {
      return textNode
    }
    return false
  })

  return filteredNodes[0]
}

export const simulateSelectionByText =
  (selectedText: string) => (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    const { tr } = state

    const startNode = getNodeByText(state, selectedText)
    const startPos = startNode.pos
    const endPos = startPos + selectedText.length

    if (startPos !== undefined) {
      tr.setSelection(new TextSelection(tr.doc.resolve(startPos), tr.doc.resolve(endPos)))
    }

    if (dispatch) {
      dispatch(tr)
    }
    return true
  }

export const simulateTextInsert =
  (text: string) => (state: EditorState, dispatch?: (tx: Transaction) => void) => {
    if (dispatch) {
      dispatch(state.tr.insertText(text))
    }
    return true
  }
