import { toggleMark } from "prosemirror-commands"
import schema from "./schema"

export type ToolbarTypes =
  | "bold"
  | "em"
  | "underline"
  | "unorderedList"
  | "orderedList"
  | "link"

export const toolbarObject = new Map<
  ToolbarTypes,
  { shortcut: string; shortcutCmd: any }
>([
  ["bold", { shortcut: "Mod-b", shortcutCmd: toggleMark(schema.marks.strong) }],
  ["em", { shortcut: "Mod-i", shortcutCmd: toggleMark(schema.marks.em) }],
  [
    "underline",
    { shortcut: "Mod-u", shortcutCmd: toggleMark(schema.marks.underline) },
  ],
])
