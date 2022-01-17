import { MarkSpec, NodeSpec, Schema } from "prosemirror-model"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import { coreNodes } from "./coreNodes"
import { coreMarks } from "./coreMarks"

export const nodes: NodeSpec = {
  doc: coreNodes.doc,
  paragraph: coreNodes.paragraph,
  text: coreNodes.text,
}

export const marks: MarkSpec = {
  strong: {
    ...coreMarks.strong,
    control: {
      label: "Bold",
      icon: boldIcon,
      shortcut: "Mod-b",
    },
  },
  em: {
    ...coreMarks.em,
    control: {
      label: "Italic",
      icon: italicIcon,
      shortcut: "Mod-i",
    },
  },
  underline: {
    ...coreMarks.underline,
    control: {
      label: "Underline",
      icon: underlineIcon,
      shortcut: "Mod-u",
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
  return new Schema({ nodes, marks })
}
