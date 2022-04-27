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
import { addListNodes, orderedList, bulletList } from "prosemirror-schema-list"

export const nodes: NodeSpec = {
  doc: coreNodes.doc,
  paragraph: coreNodes.paragraph,
  text: coreNodes.text,
  // eslint-disable-next-line camelcase
  hard_break: coreNodes.hard_break,
  orderedList: {
    orderedList,
    control: {
      label: "Numbered List",
      icon: numberedListIcon,
    },
  },
  bulletList: {
    bulletList,
    control: {
      label: "Bulleted List",
      icon: bulletListIcon,
    },
  },
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
  const newMarks: MarkSpec = controls.reduce((previousValue, currentValue) => {
    if (marks[currentValue]) {
      return {
        ...previousValue,
        [currentValue]: marks[currentValue],
      }
    }
  }, {})
  const newNodes: NodeSpec = controls.reduce((previousValue, currentValue) => {
    console.log(currentValue)
    if (nodes[currentValue]) {
      return {
        ...previousValue,
        [currentValue]: marks[currentValue],
      }
    }
  }, {})

  console.log(nodes)
  console.log(newMarks)
  // TODO: This is hard coded to always enable lists for now,
  // but once we have the toolbar we can use the controls to determine this.
  // const listsEnabled = true

  const schema = new Schema({ nodes: newNodes, marks: newMarks })

  // if (listsEnabled) {
  //   return new Schema({
  //     nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  //     marks: newMarks,
  //   })
  // }

  return schema
}
