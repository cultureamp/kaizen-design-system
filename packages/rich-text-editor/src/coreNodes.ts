import { NodeSpec } from "prosemirror-model"
import { nodes as proseNodes } from "prosemirror-schema-basic"

export const coreNodes: NodeSpec = {
  ...proseNodes,
}
