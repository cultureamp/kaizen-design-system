import { EditorState } from "prosemirror-state"
import { exitCode, chainCommands } from "prosemirror-commands"

export const hardBreak = chainCommands(
  exitCode,
  (state: EditorState, dispatch: any) => {
    dispatch(
      state.tr.replaceSelectionWith(state.schema.nodes.hard_break.create())
    )
    return true
  }
)
