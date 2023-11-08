import { MarkSpec, Node } from "prosemirror-model"
import { marks as proseMarks } from "prosemirror-schema-basic"
import { validateLink } from "../plugins/LinkManager/validation"

export const getMarks = (): MarkSpec => ({
  ...proseMarks,

  // An underline mark. Rendered as a `<u>` element. Has parse rules that also
  // matches `font-style: underline`.
  underline: {
    parseDOM: [{ tag: "u" }, { style: "font-style=underline" }],
    toDOM() {
      return ["u", 0]
    },
  },

  // A link. Rendered and parsed as an `<a>` element.
  link: {
    attrs: {
      href: { default: null },
      _metadata: { default: { added: true } },
      target: { default: "_blank" },
      rel: { default: "noreferrer" },
    },
    inclusive: false,
    parseDOM: [
      {
        tag: "a[href]",
        getAttrs(dom: HTMLAnchorElement) {
          return {
            href: getAttributeWithDefault(dom, "href"),
            target: getAttributeWithDefault(dom, "target"),
            rel: getAttributeWithDefault(dom, "rel"),
            _metadata: null,
          }
        },
      },
    ],
    toDOM(node: Node) {
      const { href, target, rel } = node.attrs
      const validationStatus = validateLink(href)

      if (validationStatus.status === "error") {
        return ["span", 0]
      }

      return ["a", { href, target, rel }, 0]
    },
  },
})

const getAttributeWithDefault = (
  node: HTMLElement,
  attributeName: string
): string | null => {
  const value = node.getAttribute(attributeName)
  return value && value !== "" ? value : null
}
