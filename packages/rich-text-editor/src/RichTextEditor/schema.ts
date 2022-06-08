import { NodeSpec, Schema } from "prosemirror-model"
import {
  nodes as coreNodes,
  marks as coreMarks,
} from "@cultureamp/rich-text-toolkit"
import { ToolbarItems } from "./RichTextEditor"

export const defaultNodes: NodeSpec = {
  doc: coreNodes.doc,
  paragraph: coreNodes.paragraph,
  text: coreNodes.text,
  hardBreak: coreNodes.hardBreak,
}

export const createSchemaFromControls = (
  controls: ToolbarItems[] | undefined
) => {
  if (!controls) {
    return new Schema({
      nodes: defaultNodes,
    })
  }

  const allControlNames: string[] = controls.reduce(
    (acc: string[], c: ToolbarItems) => [...acc, c.name],
    []
  )
  const newNodes = { ...defaultNodes }
  const newMarks = {}

  if (allControlNames.includes("bold")) {
    newMarks["strong"] = coreMarks.strong
  }

  if (allControlNames.includes("italic")) {
    newMarks["em"] = coreMarks.em
  }

  if (allControlNames.includes("underline")) {
    newMarks["underline"] = coreMarks.underline
  }

  if (allControlNames.includes("bulletList")) {
    newNodes["bulletList"] = coreNodes.bulletList
    newNodes["listItem"] = coreNodes.listItem
  }

  if (allControlNames.includes("orderedList")) {
    newNodes["orderedList"] = coreNodes.orderedList
    newNodes["listItem"] = coreNodes.listItem
  }

  return new Schema({
    nodes: newNodes,
    marks: newMarks,
  })
}
