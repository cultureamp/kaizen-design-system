import { EditorState, Plugin } from "prosemirror-state"
import { Node, Schema } from "prosemirror-model"
import { EditorContentArray } from "./types"

export function createInitialState(
  value: EditorContentArray | null,
  schema: Schema,
  plugins: Plugin[] = []
): EditorState {
  return EditorState.create({
    doc: value
      ? Node.fromJSON(schema, {
          type: "doc",
          contentObject: value,
        })
      : null,
    schema,
    plugins,
  })
}

/**
 * Checks if there's actually any content inside the content array.
 * An empty RTE will at the very least return a single paragraph with no content by default.
 *
 * This could be improved by checking that the node content isn't just spaces (which will currently return true here).
 */
export function hasContent(content: EditorContentArray) {
  return !!content.find(node => node.content)
}
