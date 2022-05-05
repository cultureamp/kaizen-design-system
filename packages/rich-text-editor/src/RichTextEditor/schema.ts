import { MarkSpec, NodeSpec, Schema, NodeType } from "prosemirror-model"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import numberedListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
import OrderedMap from "orderedmap"

import {
  nodes as coreNodes,
  marks as coreMarks,
} from "@cultureamp/rich-text-toolkit"
import {
  addListNodes,
  wrapInList,
  orderedList as olNodeSpec,
  bulletList as ulNodeSpec,
  listItem as liNodeSpec,
} from "prosemirror-schema-list"

import { customAddListNodes } from "./list-helpers"
import { ToolbarControls } from "./RichTextEditor"

export const nodes: NodeSpec = {
  doc: coreNodes.doc,
  paragraph: coreNodes.paragraph,
  text: coreNodes.text,
  // eslint-disable-next-line camelcase
  hard_break: coreNodes.hard_break,
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

// TODO: merge the reduce into one reduce function
export const createSchemaFromControls = controls => {
  let listsEnabled
  const newMarks: MarkSpec = controls.reduce((previousValue, currentValue) => {
    if (marks[currentValue]) {
      return {
        ...previousValue,
        [currentValue]: marks[currentValue],
      }
    }
    return previousValue
  }, {})

  const newNodes: NodeSpec = controls.reduce(
    (previousValue, currentValue) => {
      const isListNode =
        currentValue === "bullet_list" || currentValue === "ordered_list"
      if (!nodes[currentValue] && !isListNode) return previousValue
      if (isListNode) {
        listsEnabled = true
        return {
          // [currentValue]: { ...listNodes[currentValue] },
          // // eslint-disable-next-line camelcase
          // list_item: { ...listNodes.list_item },
          ...previousValue,
        }
      } else if (nodes[currentValue]) {
        return {
          ...previousValue,
          [currentValue]: {
            ...nodes[currentValue],
          },
        }
      }
    },
    { ...nodes }
  )
  console.log(JSON.stringify(newNodes))
  const schema = new Schema({
    nodes: newNodes,
    marks: newMarks,
  })

  if (listsEnabled) {
    const listNodeTestObj = {
      ...newNodes,
      ordered_list: {
        attrs: { order: { default: 1 } },
        parseDOM: [{ tag: "ol" }],
        content: "list_item+",
        group: "block",
        toDOM: function toDOM(node) {
          return node.attrs.order == 1
            ? ["ol", 0]
            : ["ol", { start: node.attrs.order }, 0]
        },
      },
      bullet_list: {
        parseDOM: [{ tag: "ul" }],
        content: "list_item+",
        group: "block",
        toDOM: function toDOM() {
          return ["ul", 0]
        },
      },
      list_item: {
        parseDOM: [{ tag: "li" }],
        defining: true,
        content: "paragraph block*",
        toDOM: function toDOM() {
          return ["li", 0]
        },
      },
    }

    return new Schema({
      nodes: listNodeTestObj,
      marks: newMarks,
    })
  }

  return schema
}

// export const buildControlConfig = control => {
//   const menuConfig = {}

//   switch (control.name) {
//     case "bullet_list":
//       return {}
//     default:
//       return {}
//   }
// }
