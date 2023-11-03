import { Node, Schema } from "prosemirror-model"
import { EditorState, Plugin } from "prosemirror-state"
import { Doc, DocContent } from "./types"

/**
 * createEditorState
 * Create a ProseMirror EditorState. Wrapper for EditorState.create to make the
 * API obvious to consumers
 */
export const createEditorState = (
  schema: Schema,
  doc: Node | undefined,
  plugins: Plugin[] = []
): EditorState => EditorState.create({ doc, schema, plugins })

/**
 * Create a ProseMirror doc node from the combination of a schema and the object
 * representation of a document
 */
export const createDocNode = (schema: Schema, docObject: Doc): Node => Node.fromJSON(schema, docObject)

/**
 * Create a ProseMirror doc node from the combination of a schema and the doc’s
 * content array (rather than the top-level doc node).
 */
export const createDocNodeFromContent = (
  schema: Schema,
  docContent: DocContent
): Node => createDocNode(schema, { type: "doc", content: docContent })
