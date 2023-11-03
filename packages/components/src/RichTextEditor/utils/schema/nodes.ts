import { NodeSpec } from "prosemirror-model"
import { nodes as proseNodes } from "prosemirror-schema-basic"
import { bulletList, listItem, orderedList } from "prosemirror-schema-list"

// We use camel case names instead of ProseMirror's snake case, so we remove any snake case properties here before spreading
const {
  hard_break: hardBreak,
  horizontal_rule: horizontalRule,
  code_block: codeBlock,
  ...proseNodesNoSnakeCase
} = proseNodes

// ...and then add them back in manually
const proseNodesWithCamelCase = {
  ...proseNodesNoSnakeCase,
  hardBreak,
  horizontalRule,
  codeBlock,
}

export const nodes: NodeSpec = {
  ...proseNodesWithCamelCase,
  orderedList: {
    ...orderedList,
    content: "listItem+",
    group: "block",
  },
  bulletList: {
    ...bulletList,
    content: "listItem+",
    group: "block",
  },
  listItem: {
    ...listItem,
    content: "paragraph block*",
  },
}
