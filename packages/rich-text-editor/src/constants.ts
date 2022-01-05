import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"

export type ToolbarControls = "strong" | "em" | "underline"

export const toolbarControls = new Map<
  ToolbarControls,
  {
    label: string
    shortcut: string
    icon: {
      id: string
      viewBox: string
    }
  }
>([
  [
    "strong",
    {
      label: "Bold",
      shortcut: "Mod-b",
      icon: boldIcon,
    },
  ],
  [
    "em",
    {
      label: "Italic",
      shortcut: "Mod-i",
      icon: italicIcon,
    },
  ],
  [
    "underline",
    {
      label: "Underline",
      shortcut: "Mod-u",
      icon: underlineIcon,
    },
  ],
])
