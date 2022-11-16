import { Node, Schema } from "prosemirror-model"
import { EditorState, Plugin } from "prosemirror-state"
import { Doc, DocContent } from "./types"

/**
 * createEditorState
 * Create a ProseMirror EditorState. Wrapper for EditorState.create to make the
 * API obvious to consumers
 */
export function createEditorState(
  schema: Schema,
  doc: Node | undefined,
  plugins: Plugin[] = []
): EditorState {
  return EditorState.create({
    doc,
    schema,
    plugins,
  })
}

/**
 * Create a ProseMirror doc node from the combination of a schema and the object
 * representation of a document
 */
export function createDocNode(schema: Schema, docObject: Doc) {
  return Node.fromJSON(schema, docObject)
}

/**
 * Create a ProseMirror doc node from the combination of a schema and the doc’s
 * content array (rather than the top-level doc node).
 */
export function createDocNodeFromContent(
  schema: Schema,
  docContent: DocContent
) {
  return createDocNode(schema, {
    type: "doc",
    content: docContent,
  })
}
