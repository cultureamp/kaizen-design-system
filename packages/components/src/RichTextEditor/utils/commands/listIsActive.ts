import { type NodeType } from 'prosemirror-model'
import { type EditorState } from 'prosemirror-state'
import { findParentNodeOfTypeClosestToPos } from 'prosemirror-utils'

export const listIsActive = (
  state: EditorState,
  type: NodeType,
  listNodes: (typeof type)[],
): boolean => {
  const listNode = findParentNodeOfTypeClosestToPos(state.selection.$from, listNodes)

  return listNode?.node.type === type
}
