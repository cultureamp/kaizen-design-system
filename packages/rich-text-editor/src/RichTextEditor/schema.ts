import { MarkSpec, NodeSpec, Schema } from "prosemirror-model"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import numberedListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
import {
  nodes as coreNodes,
  marks as coreMarks,
} from "@cultureamp/rich-text-toolkit"

interface schemaConfig {
  nodes: Record<"string", NodeSpec>
  marks: Record<"string", MarkSpec>
}

export const defaultNodes: NodeSpec = {
  doc: coreNodes.doc,
  paragraph: coreNodes.paragraph,
  text: coreNodes.text,
  // eslint-disable-next-line camelcase
  hard_break: coreNodes.hard_break,
}

export const nodes: NodeSpec = {
  // eslint-disable-next-line camelcase
  bullet_list: {
    ...coreNodes.bullet_list,
    control: {
      label: "Bullet List",
      icon: bulletListIcon,
    },
  },
  // eslint-disable-next-line camelcase
  ordered_list: {
    ...coreNodes.ordered_list,
    control: {
      label: "Numbered List",
      icon: numberedListIcon,
    },
  },
  // eslint-disable-next-line camelcase
  list_item: coreNodes.list_item,
}

export const marks: MarkSpec = {
  bold: {
    ...coreMarks.strong,
    control: {
      label: "Bold",
      icon: boldIcon,
    },
  },
  italic: {
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
  if (!controls)
    return new Schema({
      nodes: defaultNodes,
    })

  const schemaConfig: schemaConfig = controls.reduce(
    (config, currentControl: NodeSpec | MarkSpec) => {
      if (marks[currentControl.name]) {
        config.marks[currentControl.name] = marks[currentControl.name]
        return config
      } else if (nodes[currentControl.name]) {
        config.nodes[currentControl.name] = nodes[currentControl.name]
        if (
          currentControl.name === "bullet_list" ||
          currentControl.name === "ordered_list"
        ) {
          config.nodes["list_item"] = nodes.list_item
        }
        return config
      }
      return config
    },
    { nodes: { ...defaultNodes }, marks: {} }
  )

  return new Schema({
    nodes: schemaConfig.nodes,
    marks: schemaConfig.marks,
  })
}
