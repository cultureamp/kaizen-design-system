import {
  ProseMirrorModel,
  nodes as coreNodes,
  marks as coreMarks,
} from "@cultureamp/rich-text-toolkit"

import { TOOLBAR_CONTROLS } from "../constants"
import { ToolbarItems, ToolbarControlTypes } from "../types"

export const defaultNodes: ProseMirrorModel.NodeSpec = {
  doc: coreNodes.doc,
  paragraph: coreNodes.paragraph,
  text: coreNodes.text,
  hardBreak: coreNodes.hardBreak,
}

export const createSchemaFromControls = (
  controls?: ToolbarItems[]
): ProseMirrorModel.Schema<string> => {
  if (!controls) {
    return createSchema()
  }

  const namesFromControls = controls.reduce(
    (acc: string[], c: ToolbarItems) => [...acc, c.name],
    []
  ) as ToolbarControlTypes[]
  return createSchema(namesFromControls)
}

export const createSchemaWithAll = (): ProseMirrorModel.Schema<string> =>
  createSchema(TOOLBAR_CONTROLS)

function createSchema(
  controls?: ToolbarControlTypes[]
): ProseMirrorModel.Schema<string> {
  if (!controls) {
    return new ProseMirrorModel.Schema({
      nodes: defaultNodes,
    })
  }

  const newNodes: typeof coreNodes = { ...defaultNodes }
  const newMarks: typeof coreMarks = {}

  if (controls.includes("bold")) {
    newMarks["strong"] = coreMarks.strong
  }

  if (controls.includes("italic")) {
    newMarks["em"] = coreMarks.em
  }

  if (controls.includes("underline")) {
    newMarks["underline"] = coreMarks.underline
  }

  if (controls.includes("bulletList")) {
    newNodes["bulletList"] = coreNodes.bulletList
    newNodes["listItem"] = coreNodes.listItem
  }

  if (controls.includes("orderedList")) {
    newNodes["orderedList"] = coreNodes.orderedList
    newNodes["listItem"] = coreNodes.listItem
  }

  if (controls.includes("link")) {
    newMarks["link"] = coreMarks.link
  }

  return new ProseMirrorModel.Schema({
    nodes: newNodes,
    marks: newMarks,
  })
}
