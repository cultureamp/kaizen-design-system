import React from 'react'
import { Icon } from '~components/__next__/Icon'
import { type ToolbarControlTypes, type ToolbarItems } from '../../types'
import { listIsActive, markIsActive } from '../../utils/commands'
import {
  ProseMirrorCommands,
  ProseMirrorSchemaList,
  type ProseMirrorModel,
  type ProseMirrorState,
} from '../../utils/prosemirror'

/** Configuration for individual controls */
type ToolbarControl = {
  icon: JSX.Element
  label: string
  isActive: boolean
  disabled?: boolean
  action: ProseMirrorState.Command
}

/** Toolbar controls mapped to a group */
type GroupedToolbarControls = Record<string, ToolbarControl[]>

/** An index for each control's group */
type ControlGroupTypes = Partial<Record<ToolbarControlTypes, string>>

/** Chains multiple commands to dispatch each transitions in sequential order */
const chainTransactions =
  (...commands: ProseMirrorState.Command[]): ProseMirrorState.Command =>
  (state, dispatch): boolean => {
    const updateStateAndDispatch = (tr: ProseMirrorState.Transaction): void => {
      state = state.apply(tr)
      dispatch?.(tr)
    }
    const lastCommand = commands.pop()

    for (const command of commands) {
      command(state, updateStateAndDispatch)
    }

    return lastCommand?.(state, dispatch) ?? false
  }

/** Dispatches a transaction to create initial p tag required for pm commands */
const createInitialParagraph = (
  state: ProseMirrorState.EditorState,
  dispatch?: (tr: ProseMirrorState.Transaction) => void,
): boolean => {
  if (dispatch) {
    const { tr, schema } = state

    dispatch(tr.replaceSelectionWith(schema.nodes.paragraph.create()))
    return true
  }
  return false
}

/** Create command for toggling Marks */
const createToggleMarkCommand =
  (mark: ProseMirrorModel.MarkType): ProseMirrorState.Command =>
  (state, dispatch) => {
    const docIsEmpty = state.doc.content.size === 0

    if (docIsEmpty) {
      return chainTransactions(createInitialParagraph, ProseMirrorCommands.toggleMark(mark))(
        state,
        dispatch,
      )
    }
    return ProseMirrorCommands.toggleMark(mark)(state, dispatch)
  }

/** Create command for toggling Lists */
const createToggleListCommand =
  (node: ProseMirrorModel.NodeType): ProseMirrorState.Command =>
  (state, dispatch) => {
    const docIsEmpty = state.doc.content.size === 0

    if (docIsEmpty) {
      return chainTransactions(createInitialParagraph, ProseMirrorSchemaList.wrapInList(node))(
        state,
        dispatch,
      )
    }
    return ProseMirrorSchemaList.wrapInList(node)(state, dispatch)
  }

/** Create command for reducing indents in a List */
const createLiftListCommand = (): ProseMirrorState.Command => (state, dispatch) => {
  const { $from } = state.selection
  // calculate the parent node from the current tag selected
  const listItemNode = $from.node($from.depth - 1)?.type
  return ProseMirrorSchemaList.liftListItem(listItemNode)(state, dispatch)
}

/** Create command for indenting in a List */
const createIndentListCommand = (): ProseMirrorState.Command => (state, dispatch) => {
  const { $from } = state.selection
  const listItemNode = $from.node($from.depth - 1)?.type

  return ProseMirrorSchemaList.sinkListItem(listItemNode)(state, dispatch)
}

/** handler lift list disabled state */
const liftListIsDisabled = (state: ProseMirrorState.EditorState): boolean => {
  const { $from } = state.selection
  const listItemNode = $from.node($from.depth - 1)?.type
  const isValidListItem = listItemNode?.name === 'listItem' || false

  return !isValidListItem
}

/** handler indent list disabled state */
const indentListIsDisabled = (state: ProseMirrorState.EditorState): boolean => {
  const { $from, $to } = state.selection
  const listItemNode = $from.node($from.depth - 1)?.type
  const isValidListItem = listItemNode?.name === 'listItem' || false

  if (!isValidListItem) {
    return true
  }

  const range = $from.blockRange(
    $to,
    (node) => node.childCount > 0 && node.firstChild!.type === listItemNode,
  )

  return !range || range.startIndex === 0 ? true : false
}

/** Creates an object used as an index to map the controls to respective groups */
const createControlGroupIndex = (controls: ToolbarItems[]): ControlGroupTypes =>
  controls.reduce((groups, currentControl) => {
    if (!currentControl?.name) return groups
    return {
      ...groups,
      [currentControl.name]: currentControl.group ?? 'ungrouped',
    }
  }, {})

/** Creates an initial object used to map button configuration into its respective groups */
const createInitialControls = (controlGroupIndex: ControlGroupTypes): GroupedToolbarControls => {
  const uniqueGroups: string[] = Array.from(new Set(Object.values(controlGroupIndex)))

  const initialControlObject: Record<string, ToolbarControl[]> = uniqueGroups.reduce(
    (controlObject, controlKey) => {
      if (controlKey === 'ungrouped') return controlObject
      return {
        ...controlObject,
        [controlKey]: [],
      }
    },
    {},
  )
  // This ensure that ungrouped controls are always last
  initialControlObject.ungrouped = []
  return initialControlObject
}

/** Retrieves the name of the group a control belongs to */
const getGroupIndex = (
  controlGroupIndex: ControlGroupTypes,
  controlType?: ToolbarControlTypes,
): string => {
  if (controlType) {
    return controlGroupIndex[controlType] ?? 'ungrouped'
  }
  return 'ungrouped'
}

/** Filters out empty control groups and returns a multi dimensional array  */
const filterToolbarControls = (groupedControls: GroupedToolbarControls): ToolbarControl[][] =>
  Object.values(groupedControls).filter((controls) => controls.length > 0)

/** Builds an array of object used to map control configuration to rte toolbar buttons */
export const buildControlMap = (
  schema: ProseMirrorModel.Schema,
  editorState: ProseMirrorState.EditorState,
  controls?: ToolbarItems[],
): ToolbarControl[][] => {
  if (!controls) return []
  const controlGroupIndex: ControlGroupTypes = createControlGroupIndex(controls)
  const toolbarControls: GroupedToolbarControls = createInitialControls(controlGroupIndex)
  const listNodes = [schema.nodes.bulletList, schema.nodes.orderedList]

  if (schema.marks.strong) {
    const type = schema.marks.strong
    const groupIndex = getGroupIndex(controlGroupIndex, 'bold')
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: createToggleMarkCommand(type),
      label: 'Bold',
      icon: <Icon name="format_bold" isPresentational />,
    })
  }

  if (schema.marks.em) {
    const type = schema.marks.em
    const groupIndex = getGroupIndex(controlGroupIndex, 'italic')
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: createToggleMarkCommand(type),
      label: 'Italic',
      icon: <Icon name="format_italic" isPresentational />,
    })
  }

  if (schema.marks.underline) {
    const type = schema.marks.underline
    const groupIndex = getGroupIndex(controlGroupIndex, 'underline')
    toolbarControls[groupIndex].push({
      isActive: markIsActive(editorState, type),
      action: createToggleMarkCommand(type),
      label: 'Underline',
      icon: <Icon name="format_underlined" isPresentational />,
    })
  }

  if (schema.nodes.bulletList) {
    const type = schema.nodes.bulletList
    const groupIndex = getGroupIndex(controlGroupIndex, 'bulletList')
    toolbarControls[groupIndex].push({
      action: createToggleListCommand(type),
      isActive: listIsActive(editorState, type, listNodes),
      label: 'Bullet List',
      icon: <Icon name="format_list_bulleted" isPresentational shouldMirrorInRTL />,
    })
  }

  if (schema.nodes.orderedList) {
    const type = schema.nodes.orderedList
    const groupIndex = getGroupIndex(controlGroupIndex, 'orderedList')
    toolbarControls[groupIndex].push({
      action: createToggleListCommand(type),
      isActive: listIsActive(editorState, type, listNodes),
      label: 'Numbered List',
      icon: <Icon name="format_list_numbered" isPresentational shouldMirrorInRTL />,
    })
  }

  if (schema.nodes.orderedList || schema.nodes.bulletList) {
    const groupIndex = controlGroupIndex.orderedList ?? controlGroupIndex.bulletList ?? 'ungrouped'

    toolbarControls[groupIndex].push(
      {
        action: createLiftListCommand(),
        disabled: liftListIsDisabled(editorState),
        isActive: false,
        label: 'Decrease indent',
        icon: <Icon name="format_indent_decrease" isPresentational shouldMirrorInRTL />,
      },
      {
        action: createIndentListCommand(),
        disabled: indentListIsDisabled(editorState),
        isActive: false,
        label: 'Increase indent',
        icon: <Icon name="format_indent_increase" isPresentational shouldMirrorInRTL />,
      },
    )
  }

  if (schema.marks.link) {
    const type = schema.marks.link
    const groupIndex = getGroupIndex(controlGroupIndex, 'link')
    toolbarControls[groupIndex].push({
      action: createToggleMarkCommand(type),
      disabled: editorState.selection.empty,
      isActive: false,
      label: 'Link',
      icon: <Icon name="add_link" isPresentational />,
    })
  }

  return filterToolbarControls(toolbarControls)
}
