import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicIcon from "@kaizen/component-library/icons/italics.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import bulletListIcon from "@kaizen/component-library/icons/bulletted-list.icon.svg"
import numberedListIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
import decreaseIndentIcon from "@kaizen/component-library/icons/decrease-indent.icon.svg"
import increaseIndentIcon from "@kaizen/component-library/icons/increase-indent.icon.svg"

import { EditorState, Transaction } from "prosemirror-state"
import { Schema, NodeType, MarkType } from "prosemirror-model"
import { Command, toggleMark } from "prosemirror-commands"
import { wrapInList, liftListItem, sinkListItem } from "prosemirror-schema-list"
import { markIsActive } from "@cultureamp/rich-text-toolkit"
import { ToolbarItems, ToolbarControlTypes } from "./RichTextEditor"

type ToolbarControl = {
  icon: React.SVGAttributes<SVGSymbolElement>
  label: string
  isActive: boolean
  disabled?: boolean
  action: (
    state: EditorState<any>,
    dispatch: ((tr: Transaction<any>) => void) | undefined
  ) => boolean
}
interface GroupedToolbarControls {
  [group: string]: ToolbarControl[]
}

type ControlGroupTypes = {
  [key in ToolbarControlTypes]?: string
}

function toggleMarkCommand(mark: MarkType): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => toggleMark(mark)(state, dispatch)
}

// TODO: If a different list is clicked on a list update the list type
function toggleListCommand(node: NodeType): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => wrapInList(node)(state, dispatch)
}

function liftList(): Command {
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

// increase list indent should only be available on the second list node of a list item (otherwise it should be disabled)
function indentList(): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => {
    const { $from } = state.selection
    const listItemNode = $from.node($from.depth - 1)?.type

    return sinkListItem(listItemNode)(state, dispatch)
  }
}

// If there is a valid list item its indent can be decrease or 'lifted'
function liftListIsDisabled(state: EditorState): boolean {
  const { $from } = state.selection
  const listItemNode = $from.node($from.depth - 1)?.type
  const isValidListItem = listItemNode?.name === "listItem" || false

  return !isValidListItem
}

// If there is a valid list item and it is not the first in a list it can be indented
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

// Creates an object used as an index to map the controls to respective groups
const createControlGroupIndex = (controls: ToolbarItems[]) =>
  controls.reduce((groups, currentControl) => {
    if (!currentControl?.name) return groups
    return {
      ...groups,
      [currentControl.name]: currentControl.group || "ungrouped",
    }
  }, {})

// Creates an initial object used to map button configuration into its respective groups
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

const getGroupIndex = (
  controlGroupIndex: ControlGroupTypes,
  controlType: string | undefined
) => (controlType ? controlGroupIndex[controlType] : "ungrouped")

export function buildControlMap(
  schema: Schema,
  editorState: EditorState,
  controls?: ToolbarItems[]
) {
  if (!controls) return {}
  const controlGroupIndex: ControlGroupTypes = createControlGroupIndex(controls)
  const toolbarControls: GroupedToolbarControls =
    createInitialControls(controlGroupIndex)

  if (schema.marks.strong) {
    const type = schema.marks.strong
    const groupIndex = getGroupIndex(controlGroupIndex, "bold")
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: toggleMarkCommand(type),
      label: "Bold",
      icon: boldIcon,
    })
  }

  if (schema.marks.em) {
    const type = schema.marks.em
    const groupIndex = getGroupIndex(controlGroupIndex, "italic")
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: toggleMarkCommand(type),
      label: "Italic",
      icon: italicIcon,
    })
  }

  if (schema.marks.underline) {
    const type = schema.marks.underline
    const groupIndex = getGroupIndex(controlGroupIndex, "underline")
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: toggleMarkCommand(type),
      label: "Underline",
      icon: underlineIcon,
    })
  }

  if (schema.nodes.bulletList) {
    const type = schema.nodes.bulletList
    const groupIndex = getGroupIndex(controlGroupIndex, "bulletList")
    toolbarControls[groupIndex].push({
      action: toggleListCommand(type),
      isActive: false,
      label: "Bullet List",
      icon: bulletListIcon,
    })
  }

  if (schema.nodes.orderedList) {
    const type = schema.nodes.orderedList
    const groupIndex = getGroupIndex(controlGroupIndex, "orderedList")
    toolbarControls[groupIndex].push({
      action: toggleListCommand(type),
      isActive: false,
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
        action: liftList(),
        disabled: liftListIsDisabled(editorState),
        isActive: false,
        label: "Decrease indent",
        icon: decreaseIndentIcon,
      },
      {
        action: indentList(),
        disabled: indentListIsDisabled(editorState),
        isActive: false,
        label: "Increase indent",
        icon: increaseIndentIcon,
      }
    )
  }

  return toolbarControls
}
