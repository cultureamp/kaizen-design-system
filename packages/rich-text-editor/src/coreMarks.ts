import { MarkSpec } from "prosemirror-model"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"

export const coreMarks: MarkSpec = {
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
    control: {
      label: "Bold",
      icon: boldIcon,
      shortcut: "Mod-b",
      group: 0,
    },
  },
  // An emphasis mark. Rendered as an `<em>` element. Has parse rules that also
  // match `<i>` and `font-style: italic`.
  em: {
    parseDOM: [{ tag: "i" }, { tag: "em" }, { style: "font-style=italic" }],
    toDOM() {
      return ["em", 0]
    },
    control: {
      label: "Italic",
      icon: italicIcon,
      shortcut: "Mod-i",
      group: 0,
    },
  },

  // An underline mark. Rendered as a `<u>` element. Has parse rules that also
  // matches `font-style: underline`.
  underline: {
    parseDOM: [{ tag: "u" }, { style: "font-style=underline" }],
    toDOM() {
      return ["u", 0]
    },
    control: {
      label: "Underline",
      icon: underlineIcon,
      shortcut: "Mod-u",
      group: 0,
    },
  },
}
