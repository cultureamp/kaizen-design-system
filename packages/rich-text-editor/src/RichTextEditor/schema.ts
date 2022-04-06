import { MarkSpec, NodeSpec, Schema } from "prosemirror-model"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import {
  nodes as coreNodes,
  marks as coreMarks,
} from "@cultureamp/rich-text-toolkit"
import { addListNodes } from "prosemirror-schema-list"

export const nodes: NodeSpec = {
  doc: coreNodes.doc,
  paragraph: coreNodes.paragraph,
  text: coreNodes.text,
  // eslint-disable-next-line camelcase
  hard_break: coreNodes.hard_break,
}

export const marks: MarkSpec = {
  strong: {
    ...coreMarks.strong,
    control: {
      label: "Bold",
      icon: boldIcon,
    },
  },
  em: {
    ...coreMarks.em,
    control: {
      label: "Italic",
      icon: italicIcon,
    },
  },
  underline: {
    ...coreMarks.underline,
    control: {
      label: "Underline",
      icon: underlineIcon,
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

  // TODO: This is hard coded to always enable lists for now,
  // but once we have the toolbar we can use the controls to determine this.
  const listsEnabled = true

  const schema = new Schema({ nodes, marks: newMarks })

  if (listsEnabled) {
    return new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: newMarks,
    })
  }

  return schema
}
