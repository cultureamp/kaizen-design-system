import { wrappingInputRule } from "prosemirror-inputrules"
import { NodeType } from "prosemirror-model"

// Given a list node type, returns an input rule that turns a number
// followed by a dot at the start of a textblock into an ordered list.
// Copied from https://github.com/ProseMirror/prosemirror-example-setup/blob/master/src/inputrules.js
export function orderedListRule(nodeType: NodeType) {
  return wrappingInputRule(
    /^(\d+)\.\s$/,
    nodeType,
    match => ({ order: +match[1] }),
    (match, node) => node.childCount + node.attrs.order == +match[1]
  )
}

// Given a list node type, returns an input rule that turns a bullet
// (dash, plush, or asterisk) at the start of a textblock into a
// bullet list.
// Copied from https://github.com/ProseMirror/prosemirror-example-setup/blob/master/src/inputrules.js
export function bulletListRule(nodeType: NodeType) {
  return wrappingInputRule(/^\s*([-+*])\s$/, nodeType)
}
