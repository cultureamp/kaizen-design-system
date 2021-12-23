import { toggleMark } from "prosemirror-commands"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import schema from "./schema"

export type ToolbarControls =
  | "bold"
  | "em"
  | "underline"

export const toolbarControls = new Map<
  ToolbarControls,
  {
    label: string
    shortcut: string
    shortcutCmd: any
    icon: {
      id: string
      viewBox: string
    }
    markType: any
  }
>([
  [
    "bold",
    {
      label: "Bold",
      shortcut: "Mod-b",
      shortcutCmd: toggleMark(schema.marks.strong),
      icon: boldIcon,
      markType: schema.marks.strong,
    },
  ],
  [
    "em",
    {
      label: "Italic",
      shortcut: "Mod-i",
      shortcutCmd: toggleMark(schema.marks.em),
      icon: italicIcon,
      markType: schema.marks.em,
    },
  ],
  [
    "underline",
    {
      label: "Underline",
      shortcut: "Mod-u",
      shortcutCmd: toggleMark(schema.marks.underline),
      icon: underlineIcon,
      markType: schema.marks.underline,
    },
  ],
])
