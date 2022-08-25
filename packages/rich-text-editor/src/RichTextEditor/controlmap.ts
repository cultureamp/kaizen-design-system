import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import numberedListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
import decreaseIndentIcon from "@kaizen/component-library/icons/decrease-indent.icon.svg"
import increaseIndentIcon from "@kaizen/component-library/icons/increase-indent.icon.svg"
import linkIcon from "@kaizen/component-library/icons/add-link.icon.svg"

import { EditorState, Transaction, Command } from "prosemirror-state"
import { Schema, NodeType, MarkType } from "prosemirror-model"
import { toggleMark } from "prosemirror-commands"
import { wrapInList, liftListItem, sinkListItem } from "prosemirror-schema-list"
import { markIsActive, listIsActive } from "@cultureamp/rich-text-toolkit"
import { ToolbarItems, ToolbarControlTypes } from "../types"

/** Configuration for individual controls */
type ToolbarControl = {
  icon: React.SVGAttributes<SVGSymbolElement>
  label: string
  isActive: boolean
  disabled?: boolean
  action: (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => boolean
}

/** Toolbar controls mapped to a group */
interface GroupedToolbarControls {
  [group: string]: ToolbarControl[]
}

/** An index for each control's group */
type ControlGroupTypes = {
  [key in ToolbarControlTypes]?: string
}

/** Chains multiple commands to dispatch each transitions in sequential order */
function chainTransactions(...commands: Command[]): Command {
  return (state, dispatch): boolean => {
    const updateStateAndDispatch = (tr: Transaction): void => {
      state = state.apply(tr)
      dispatch && dispatch(tr)
    }
    const lastCommand = commands.pop()

    for (const command of commands) {
      command(state, updateStateAndDispatch)
    }

    return lastCommand !== undefined && lastCommand(state, dispatch)
  }
}

/** Dispatches a transaction to create initial p tag required for pm commands */
function createInitialParagraph(
  state: EditorState,
  dispatch?: (tr: Transaction) => void
) {
  if (dispatch) {
    const { tr, schema } = state

    dispatch(tr.replaceSelectionWith(schema.nodes.paragraph.create()))
    return true
  }
  return false
}

/** Create command for toggling Marks */
function createToggleMarkCommand(mark: MarkType): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => {
    const docIsEmpty = state.doc.content.size === 0

    if (docIsEmpty) {
      return chainTransactions(createInitialParagraph, toggleMark(mark))(
        state,
        dispatch
      )
    }
    return toggleMark(mark)(state, dispatch)
  }
}

/** Create command for toggling Lists */
function createToggleListCommand(node: NodeType): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => {
    const docIsEmpty = state.doc.content.size === 0

    if (docIsEmpty) {
      return chainTransactions(createInitialParagraph, wrapInList(node))(
        state,
        dispatch
      )
    }
    return wrapInList(node)(state, dispatch)
  }
}

/** Create command for reducing indents in a List */
function createLiftListCommand(): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => {
    const { $from } = state.selection
    // calculate the parent node from the current tag selected
    const listItemNode = $from.node($from.depth - 1)?.type
    return liftListItem(listItemNode)(state, dispatch)
  }
}

/** Create command for indenting in a List */
function createIndentListCommand(): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => {
    const { $from } = state.selection
    const listItemNode = $from.node($from.depth - 1)?.type

    return sinkListItem(listItemNode)(state, dispatch)
  }
}

/** handler lift list disabled state */
function liftListIsDisabled(state: EditorState): boolean {
  const { $from } = state.selection
  const listItemNode = $from.node($from.depth - 1)?.type
  const isValidListItem = listItemNode?.name === "listItem" || false

  return !isValidListItem
}

/** handler indent list disabled state */
function indentListIsDisabled(state: EditorState): boolean {
  const { $from, $to } = state.selection
  const listItemNode = $from.node($from.depth - 1)?.type
  const isValidListItem = listItemNode?.name === "listItem" || false

  if (!isValidListItem) {
    return true
  }

  const range = $from.blockRange(
    $to,
    node => node.childCount > 0 && node.firstChild!.type === listItemNode
  )

  return !range || range.startIndex === 0 ? true : false
}

/** Creates an object used as an index to map the controls to respective groups */
const createControlGroupIndex = (controls: ToolbarItems[]) =>
  controls.reduce((groups, currentControl) => {
    if (!currentControl?.name) return groups
    return {
      ...groups,
      [currentControl.name]: currentControl.group || "ungrouped",
    }
  }, {})

/** Creates an initial object used to map button configuration into its respective groups */
const createInitialControls = (controlGroupIndex: ControlGroupTypes) => {
  const uniqueGroups: string[] = Array.from(
    new Set(Object.values(controlGroupIndex))
  )

  const initialControlObject = uniqueGroups.reduce(
    (controlObject, controlKey) => {
      if (controlKey === "ungrouped") return controlObject
      return {
        ...controlObject,
        [controlKey]: [],
      }
    },
    {}
  )
  // This ensure that ungrouped controls are always last
  initialControlObject["ungrouped"] = []
  return initialControlObject
}

/** Retrieves the name of the group a control belongs to */
const getGroupIndex = (
  controlGroupIndex: ControlGroupTypes,
  controlType: string | undefined
): string => (controlType ? controlGroupIndex[controlType] : "ungrouped")

/** Filters out empty control groups and returns a multi dimensional array  */
const filterToolbarControls = (
  groupedControls: GroupedToolbarControls
): ToolbarControl[][] =>
  Object.values(groupedControls).filter(controls => controls.length > 0)

/** Builds an array of object used to map control configuration to rte toolbar buttons */
export function buildControlMap(
  schema: Schema,
  editorState: EditorState,
  controls?: ToolbarItems[]
): ToolbarControl[][] {
  if (!controls) return []
  const controlGroupIndex: ControlGroupTypes = createControlGroupIndex(controls)
  const toolbarControls: GroupedToolbarControls =
    createInitialControls(controlGroupIndex)
  const listNodes = [schema.nodes.bulletList, schema.nodes.orderedList]

  if (schema.marks.strong) {
    const type = schema.marks.strong
    const groupIndex = getGroupIndex(controlGroupIndex, "bold")
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: createToggleMarkCommand(type),
      label: "Bold",
      icon: boldIcon,
    })
  }

  if (schema.marks.em) {
    const type = schema.marks.em
    const groupIndex = getGroupIndex(controlGroupIndex, "italic")
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: createToggleMarkCommand(type),
      label: "Italic",
      icon: italicIcon,
    })
  }

  if (schema.marks.underline) {
    const type = schema.marks.underline
    const groupIndex = getGroupIndex(controlGroupIndex, "underline")
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: createToggleMarkCommand(type),
      label: "Underline",
      icon: underlineIcon,
    })
  }

  if (schema.nodes.bulletList) {
    const type = schema.nodes.bulletList
    const groupIndex = getGroupIndex(controlGroupIndex, "bulletList")
    toolbarControls[groupIndex].push({
      action: createToggleListCommand(type),
      isActive: listIsActive(editorState, type, listNodes),
      label: "Bullet List",
      icon: bulletListIcon,
    })
  }

  if (schema.nodes.orderedList) {
    const type = schema.nodes.orderedList
    const groupIndex = getGroupIndex(controlGroupIndex, "orderedList")
    toolbarControls[groupIndex].push({
      action: createToggleListCommand(type),
      isActive: listIsActive(editorState, type, listNodes),
      label: "Numbered List",
      icon: numberedListIcon,
    })
  }

  if (schema.nodes.orderedList || schema.nodes.bulletList) {
    const groupIndex =
      controlGroupIndex["orderedList"] ||
      controlGroupIndex["bulletList"] ||
      "ungrouped"

    toolbarControls[groupIndex].push(
      {
        action: createLiftListCommand(),
        disabled: liftListIsDisabled(editorState),
        isActive: false,
        label: "Decrease indent",
        icon: decreaseIndentIcon,
      },
      {
        action: createIndentListCommand(),
        disabled: indentListIsDisabled(editorState),
        isActive: false,
        label: "Increase indent",
        icon: increaseIndentIcon,
      }
    )
  }

  if (schema.marks.link) {
    const type = schema.marks.link
    const groupIndex = getGroupIndex(controlGroupIndex, "link")
    toolbarControls[groupIndex].push({
      action: createToggleMarkCommand(type),
      disabled: editorState.selection.empty,
      isActive: false,
      label: "Link",
      icon: linkIcon,
    })
  }

  return filterToolbarControls(toolbarControls)
}
