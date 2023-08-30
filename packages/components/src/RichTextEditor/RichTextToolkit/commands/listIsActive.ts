import { NodeType } from "prosemirror-model"
import { EditorState } from "prosemirror-state"
import { findParentNodeOfTypeClosestToPos } from "prosemirror-utils"

export const listIsActive = (
  state: EditorState,
  type: NodeType,
  listNodes: Array<typeof type>
): boolean => {
  const listNode = findParentNodeOfTypeClosestToPos(
    state.selection.$from,
    listNodes
  )

  return listNode?.node.type === type
}
