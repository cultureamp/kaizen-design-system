// import { CAEditorView, Command, Dispatcher } from "ca-ui/RichTextEditor/types.d"
import { EditorState } from "prosemirror-state"
import { exitCode, toggleMark } from "prosemirror-commands"

export const hardBreak = chainCommands(
  exitCode,
  (state: EditorState, dispatch: any) => {
    dispatch(
      state.tr.replaceSelectionWith(state.schema.nodes.hardBreak.create())
    )
    return true
  }
)

export const strong = (schema: any) => toggleMark(schema.marks.strong)
export const em = (schema: any) => toggleMark(schema.marks.em)
export const underline = (schema: any) => toggleMark(schema.marks.underline)

// This is a type-compatible version of
// https://github.com/ProseMirror/prosemirror-commands/blob/master/src/commands.js#L551
function chainCommands(...commands: Command[]) {
  // eslint-disable-next-line func-names
  return function (state: EditorState, dispatch: any, view?: any) {
    for (let i = 0; i < commands.length; i++) {
      if (commands[i](state, dispatch, view)) {
        return true
      }
    }
    return false
  }
}
