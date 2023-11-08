import { MarkSpec } from "prosemirror-model"
import { TOOLBAR_CONTROLS } from "../constants"
import { ToolbarItems, ToolbarControlTypes } from "../types"
import { ProseMirrorModel } from "../utils/prosemirror"
import { getMarks, getNodes } from "../utils/schema"

export const createSchemaFromControls = (
  controls?: ToolbarItems[]
): ProseMirrorModel.Schema<string> => {
  if (!controls) {
    return createSchema()
  }

  const namesFromControls = controls.reduce(
    (acc: ToolbarControlTypes[], c: ToolbarItems) => [...acc, c.name],
    []
  )

  return createSchema(namesFromControls)
}

export const createSchemaWithAll = (): ProseMirrorModel.Schema<string> =>
  createSchema(TOOLBAR_CONTROLS)

const createSchema = (
  controls?: ToolbarControlTypes[]
): ProseMirrorModel.Schema<string> => {
  const nodes = getNodes()
  const marks = getMarks()

  const defaultNodes: ProseMirrorModel.NodeSpec = {
    doc: nodes.doc,
    paragraph: nodes.paragraph,
    text: nodes.text,
    hardBreak: nodes.hardBreak,
  }

  if (!controls) {
    return new ProseMirrorModel.Schema({
      nodes: defaultNodes,
    })
  }

  const newNodes: typeof nodes = { ...defaultNodes }
  const newMarks: MarkSpec = {}

  if (controls.includes("bold")) {
    newMarks["strong"] = marks.strong
  }

  if (controls.includes("italic")) {
    newMarks["em"] = marks.em
  }

  if (controls.includes("underline")) {
    newMarks["underline"] = marks.underline
  }

  if (controls.includes("bulletList")) {
    newNodes["bulletList"] = nodes.bulletList
    newNodes["listItem"] = nodes.listItem
  }

  if (controls.includes("orderedList")) {
    newNodes["orderedList"] = nodes.orderedList
    newNodes["listItem"] = nodes.listItem
  }

  if (controls.includes("link")) {
    newMarks["link"] = marks.link
  }

  return new ProseMirrorModel.Schema({
    nodes: newNodes,
    marks: newMarks,
  })
}
