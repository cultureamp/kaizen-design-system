import { NodeSpec, Schema } from "prosemirror-model"

export const nodes: NodeSpec = {
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

export const marks = {
  // A strong mark. Rendered as `<strong>`, parse rules also match `<b>` and
  // `font-weight: bold`.
  strong: {
    parseDOM: [
      { tag: "strong" },
      // This works around a Google Docs misbehavior where
      // pasted content will be inexplicably wrapped in `<b>`
      // tags with a font-weight normal.
      {
        tag: "b",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getAttrs: (node: any) => node.style.fontWeight !== "normal" && null,
      },
      {
        style: "font-weight",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getAttrs: (value: any) =>
          /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null,
      },
    ],
    toDOM() {
      return ["strong", 0]
    },
  },
}

const schema = new Schema({ nodes, marks })
export default schema
