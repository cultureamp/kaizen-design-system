import { EditorState, Transaction } from "prosemirror-state"
import { Schema } from "prosemirror-model"
import {
  chainCommands,
  exitCode,
  joinDown,
  joinUp,
  lift,
  selectParentNode,
  setBlockType,
  toggleMark,
} from "prosemirror-commands"
import { redo, undo } from "prosemirror-history"
import { undoInputRule } from "prosemirror-inputrules"
import {
  wrapInList,
  splitListItem,
  liftListItem,
  sinkListItem,
} from "prosemirror-schema-list"

// Most/all of this file is copied from https://github.com/ProseMirror/prosemirror-example-setup/blob/master/src/keymap.js

const mac =
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  typeof navigator != "undefined" ? /Mac/.test(navigator.platform) : false

export function buildKeymap(schema: Schema) {
  const keys: {
    [key: string]: (
      state: EditorState<any>,
      dispatch?: ((tr: Transaction<any>) => void) | undefined
    ) => boolean
  } = {
    "Mod-z": undo,
    "Shift-Mod-z": redo,
    Backspace: undoInputRule,
    "Alt-ArrowUp": joinUp,
    "Alt-ArrowDown": joinDown,
    "Mod-BracketLeft": lift,
    Escape: selectParentNode,
  }

  if (!mac) {
    keys["Mod-y"] = redo
  }

  if (schema.marks.strong) {
    const type = schema.marks.strong
    keys["Mod-b"] = toggleMark(type)
    keys["Mod-B"] = toggleMark(type)
  }

  if (schema.marks.em) {
    const type = schema.marks.em
    keys["Mod-i"] = toggleMark(type)
    keys["Mod-I"] = toggleMark(type)
  }

  if (schema.marks.underline) {
    const type = schema.marks.underline
    keys["Mod-u"] = toggleMark(type)
    keys["Mod-U"] = toggleMark(type)
  }

  if (schema.nodes.hard_break) {
    const br = schema.nodes.hard_break
    const cmd = chainCommands(exitCode, (state, dispatch) => {
      dispatch &&
        dispatch(state.tr.replaceSelectionWith(br.create()).scrollIntoView())
      return true
    })
    keys["Mod-Enter"] = cmd
    keys["Shift-Enter"] = cmd
    if (mac) {
      keys["Ctrl-Enter"] = cmd
    }
  }

  if (schema.nodes.paragraph) {
    keys["Shift-Ctrl-0"] = setBlockType(schema.nodes.paragraph)
  }

  if (schema.nodes.bullet_list) {
    keys["Shift-Ctrl-8"] = wrapInList(schema.nodes.bullet_list)
  }

  if (schema.nodes.ordered_list) {
    keys["Shift-Ctrl-9"] = wrapInList(schema.nodes.ordered_list)
  }

  if (schema.nodes.list_item) {
    const type = schema.nodes.list_item
    keys["Enter"] = splitListItem(type)
    keys["Mod-["] = liftListItem(type)
    keys["Mod-]"] = sinkListItem(type)
  }

  return keys
}
