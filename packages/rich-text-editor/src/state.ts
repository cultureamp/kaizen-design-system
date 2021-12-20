// import { EditorContentArray } from "ca-ui/RichTextEditor/types.d"
import { EditorState, Plugin } from "prosemirror-state"
import { Node, Schema } from "prosemirror-model"
import { baseKeymap } from "prosemirror-commands"
import { redo, undo } from "prosemirror-history"

export function customKeymap(additions = {}) {
  return {
    ...baseKeymap,
    "Mod-z": undo,
    "Mod-Shift-z": redo,
    ...additions,
  }
}

export function createInitialState(
  doc: Node | null,
  schema: Schema,
  plugins: Plugin[] = []
): EditorState {
  return EditorState.create({
    doc,
    schema,
    plugins,
  })
}

function createDoc(schema: Schema, docObject: Record<string, any>) {
  return Node.fromJSON(schema, docObject)
}

export function createDocFromContent(
  schema: Schema,
  // contentObject: EditorContentArray
  contentObject: any
) {
  return createDoc(schema, {
    type: "doc",
    content: contentObject,
  })
}

/**
 * Checks if there's actually any content inside the content array.
 * An empty RTE will at the very least return a single paragraph with no content by default.
 *
 * This could be improved by checking that the node content isn't just spaces (which will currently return true here).
 */
// export function hasContent(content: EditorContentArray) {
export function hasContent(content: any) {
  return !!content.find(node => node.content)
}
