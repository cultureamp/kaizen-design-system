import { MarkSpec, NodeSpec, Schema, NodeType } from "prosemirror-model"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import numberedListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
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

// const listNodeSchema = new Schema({
//   nodes: addListNodes(defaultNodes, "paragraph block*", "block"),
// })

// interface ControlNodeType extends NodeSpec {
//   isNodeSpec: boolean
// }

export const listNodes: NodeSpec = {
  // eslint-disable-next-line camelcase
  ordered_list: {
    attrs: { order: { default: 1 } },
    groups: ["block"],
    content: "list_item+",
    // parseDOM: [
    //   {
    //     group: "list",
    //     tag: "ol",
    //     getAttrs(dom) {
    //       return {
    //         order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1,
    //       }
    //     },
    //   },
    // ],
    // toDOM(node) {
    //   return node.attrs.order == 1
    //     ? ["ol", 0]
    //     : ["ol", { start: node.attrs.order }, 0]
    // },
    ...olNodeSpec,
    control: {
      label: "Numbered List",
      icon: numberedListIcon,
    },
  },
  // eslint-disable-next-line camelcase
  bullet_list: {
    groups: ["block"],
    content: "list_item+",
    // parseDOM: [{ tag: "ul" }],
    // toDOM() {
    //   return ["ul", 0]
    // },
    ...ulNodeSpec,
    control: {
      label: "Bulleted List",
      icon: bulletListIcon,
    },
  },
  // eslint-disable-next-line camelcase
  list_item: {
    groups: ["block"],
    content: "paragraph block*",
    ...liNodeSpec,
    // parseDOM: [{ tag: "li" }],
    // toDOM() {
    //   return ["li", 0]
    // },
    // defining: true,
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

// // copied from list schema
// function add(obj, props) {
//   const copy = {}
//   for (const prop in obj) {
//     copy[prop] = obj[prop]
//   }
//   for (const prop$1 in props) {
//     copy[prop$1] = props[prop$1]
//   }
//   return copy
// }

// TODO: merge the reduce into one reduce function
export const createSchemaFromControls = controls => {
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
      const isListNode = listNodes[currentValue]
      if (!nodes[currentValue] && !isListNode) return previousValue
      if (isListNode) {
        return {
          [currentValue]: { ...listNodes[currentValue] },
          list_item: { ...listNodes.list_item },
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

  // TODO: This is hard coded to always enable lists for now,
  // but once we have the toolbar we can use the controls to determine this.

  const schema = new Schema({
    nodes: newNodes,
    marks: newMarks,
  })
  // const listSchema = new Schema({
  //   nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block")
  // })
  // console.log("general list schema", listSchema)

  // console.log("New nodes: ", newNodes)
  // console.log("schema: ", schema)
  // console.log("list nodes: ", listNodes)

  // if (listsEnabled) {
  //   return new Schema({
  //     nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  //     marks: newMarks,
  //   })
  // }

  return schema
}
