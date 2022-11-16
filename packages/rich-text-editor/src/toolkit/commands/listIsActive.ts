import { EditorState } from "prosemirror-state"
import { NodeType } from "prosemirror-model"
import { findParentNodeOfTypeClosestToPos } from "prosemirror-utils"

export function listIsActive(
  state: EditorState,
  type: NodeType,
  listNodes: typeof type[]
) {
  const listNode = findParentNodeOfTypeClosestToPos(
    state.selection.$from,
    listNodes
  )

  return listNode?.node.type === type
}
