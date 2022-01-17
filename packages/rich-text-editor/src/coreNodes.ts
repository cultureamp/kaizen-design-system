import { NodeSpec } from "prosemirror-model"

export const coreNodes: NodeSpec = {
  // The top level document node.
  doc: {
    content: "block+",
  },

  // A plain paragraph textblock. Represented in the DOM as a `<p>` element.
  paragraph: {
    content: "inline*",
    group: "block",
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return ["p", 0]
    },
  },

  // The text node.
  text: {
    group: "inline",
  },

  // A hard line break, represented in the DOM as `<br>`.
  hardBreak: {
    inline: true,
    group: "inline",
    selectable: false,
    parseDOM: [{ tag: "br" }],
    toDOM() {
      return ["br"]
    },
  },
}
