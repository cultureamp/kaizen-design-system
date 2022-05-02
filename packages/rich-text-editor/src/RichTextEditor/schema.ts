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
  orderedList,
  bulletList,
  listItem,
} from "prosemirror-schema-list"
import { ToolbarControls } from "./RichTextEditor"

export const defaultNodes: NodeSpec = {
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

export const nodes: NodeSpec = {
  // eslint-disable-next-line camelcase
  ordered_list: {
    isNodeSpec: true,
    attrs: { order: { default: 1 } },
    parseDOM: [
      {
        tag: "ol",
        getAttrs(dom) {
          return {
            order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1,
          }
        },
      },
    ],
    toDOM(node) {
      return node.attrs.order == 1
        ? ["ol", 0]
        : ["ol", { start: node.attrs.order }, 0]
    },
    control: {
      label: "Numbered List",
      icon: numberedListIcon,
    },
  },
  // eslint-disable-next-line camelcase
  bullet_list: {
    isNodeSpec: true,
    parseDOM: [{ tag: "ul" }],
    toDOM() {
      return ["ul", 0]
    },
    control: {
      label: "Bulleted List",
      icon: bulletListIcon,
    },
  },
  // eslint-disable-next-line camelcase
  list_item: {
    parseDOM: [{ tag: "li" }],
    toDOM() {
      return ["li", 0]
    },
    defining: true,
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

// // modified addList from list schema
// const createListNodes = (listNodes: NodeSpec, itemContent, listGroup) => ({
//   ordered_list: add(orderedList, {
//     content: "list_item+",
//     group: listGroup,
//     control: {
//       label: "Numbered List",
//       icon: numberedListIcon,
//     },
//   }),
//   bullet_list: add(bulletList, {
//     content: "list_item+",
//     group: listGroup,
//     control: {
//       label: "Bullet List",
//       icon: bulletListIcon,
//     },
//   }),
//   list_item: add(listItem, { content: itemContent }),
// })

// export const listNodes: NodeSpec = createListNodes(
//   defaultNodes,
//   "paragraph block*",
//   "block"
// )

// const listNodes = {
//   nodes: addListNodes(defaultNodes, "paragraph block*", "block"),
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
      if (nodes[currentValue]) {
        return {
          ...previousValue,
          [currentValue]: {
            ...nodes[currentValue],
          },
        }
      }
      return previousValue
    },
    { ...defaultNodes }
  )

  // TODO: This is hard coded to always enable lists for now,
  // but once we have the toolbar we can use the controls to determine this.
  // const listsEnabled = true

  const schema = new Schema({
    nodes: newNodes,
    marks: newMarks,
  })

  console.log("New nodes: ", newNodes)
  console.log("schema: ", schema)
  // console.log("list nodes: ", listNodes)

  // if (listsEnabled) {
  //   return new Schema({
  //     nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  //     marks: newMarks,
  //   })
  // }

  return schema
}
