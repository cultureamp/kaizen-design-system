import { MarkSpec, NodeSpec, Schema } from "prosemirror-model"

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

export const marks: MarkSpec = {
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
        getAttrs: (node: CSSStyleRule) =>
          node.style.fontWeight !== "normal" && null,
      },
      {
        style: "font-weight",
        getAttrs: (value: string) =>
          /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null,
      },
    ],
    toDOM() {
      return ["strong", 0]
    },
  },
  // An emphasis mark. Rendered as an `<em>` element. Has parse rules that also
  // match `<i>` and `font-style: italic`.
  em: {
    parseDOM: [{ tag: "i" }, { tag: "em" }, { style: "font-style=italic" }],
    toDOM() {
      return ["em", 0]
    },
  },

  // An underline mark. Rendered as a `<u>` element. Has parse rules that also
  // matches `font-style: underline`.
  underline: {
    parseDOM: [{ tag: "u" }, { style: "font-style=underline" }],
    toDOM() {
      return ["u", 0]
    },
  },
}

export const createSchemaFromControls = controls => {
  const newMarks: MarkSpec = controls.reduce(
    (previousValue, currentValue) => ({
      ...previousValue,
      [currentValue]: marks[currentValue],
    }),
    {}
  )
  return new Schema({ nodes, marks: newMarks })
}
