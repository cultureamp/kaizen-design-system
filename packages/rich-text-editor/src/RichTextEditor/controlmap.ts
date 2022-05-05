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
import { ToolbarControls } from "./RichTextEditor"

interface toolbarControl {
  [key: string]: {
    icon: React.SVGAttributes<SVGSymbolElement>
    label: string
    isActive: boolean
    action: (
      state: EditorState<any>,
      dispatch?: ((tr: Transaction<any>) => void) | undefined
    ) => boolean
  }
}

function toggleMarkCommand(mark: MarkType): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => toggleMark(mark)(state, dispatch)
}

function toggleListCommand(node: NodeType): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => wrapInList(node)(state, dispatch)
}

function liftOrIndentList(action: "lift" | "indent"): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined
  ) => {
    const { $from } = state.selection
    // calculate the parent node from the current tag selected
    const topLevelListNode = $from.node($from.depth - 1)?.type
    const islistNode =
      (topLevelListNode?.name && topLevelListNode.name === "list_item") || false

    if (!islistNode) {
      return false
    }

    if (action === "lift") {
      return liftListItem(topLevelListNode)(state, dispatch)
    } else {
      return sinkListItem(topLevelListNode)(state, dispatch)
    }
  }
}

export function buildControlMap(
  schema: Schema,
  editorState: EditorState,
  controls: ToolbarControls[][]
) {
  // creates an initial array of objects for the controls to be sorted into
  const toolbarControls = Array.from({ length: controls.length }, () => ({}))
  // console.log("toolbar initial", toolbarControls)

  const controlGroupings = controls.reduce(
    (prevSection, section, sectionIndex) => {
      const innerControls = section.map(item => [item, sectionIndex])
      if (innerControls && innerControls.length) {
        return [...prevSection, ...innerControls]
      }
      return [...prevSection]
    },
    []
  )

  // console.log("controlGroupings", controlGroupings)
  const controlsSections = new Map(controlGroupings)
  // console.log("control section Map", controlsSections)

  // const ideaObj = [
  //   {
  //     bold: {
  //       isActive: markIsActive(editorState, type),
  //       action: toggleMarkCommand(type),
  //       label: "Bold",
  //       icon: boldIcon,
  //     },
  //     italic: {
  //       isActive: markIsActive(editorState, type),
  //       action: toggleMarkCommand(type),
  //       label: "Italic",
  //       icon: italicIcon,
  //     },
  //   },
  //   {
  //     underline: {
  //       isActive: markIsActive(editorState, type),
  //       action: toggleMarkCommand(type),
  //       label: "Underline",
  //       icon: underlineIcon,
  //     },
  //   },
  //   {
  //     bullet_list: {
  //       action: toggleListCommand(schema.nodes.bullet_list),
  //       isActive: false,
  //       label: "Bullet List",
  //       icon: bulletListIcon,
  //     },
  //   },
  // ]

  if (schema.marks.bold) {
    const type = schema.marks.bold
    const groupIndex = controlsSections.get("bold")
    toolbarControls[groupIndex]["bold"] = {
      isActive: markIsActive(editorState, type),
      action: toggleMarkCommand(type),
      label: "Bold",
      icon: boldIcon,
    }
  }

  if (schema.marks.italic) {
    const type = schema.marks.italic
    const groupIndex = controlsSections.get("italic") || 0
    toolbarControls[groupIndex]["italic"] = {
      isActive: markIsActive(editorState, type),
      action: toggleMarkCommand(type),
      label: "Italic",
      icon: italicIcon,
    }
  }

  if (schema.marks.underline) {
    const type = schema.marks.underline
    const groupIndex = controlsSections.get("underline") || 0
    toolbarControls[groupIndex]["underline"] = {
      isActive: markIsActive(editorState, type),
      action: toggleMarkCommand(type),
      label: "Underline",
      icon: underlineIcon,
    }
  }

  if (schema.nodes.bullet_list) {
    const groupIndex = controlsSections.get("bullet_list") || 0
    toolbarControls[groupIndex]["bullet_list"] = {
      action: toggleListCommand(schema.nodes.bullet_list),
      isActive: false,
      label: "Bullet List",
      icon: bulletListIcon,
    }
  }

  if (schema.nodes.ordered_list) {
    const groupIndex = controlsSections.get("ordered_list") || 0
    toolbarControls[groupIndex]["ordered_list"] = {
      action: toggleListCommand(schema.nodes.ordered_list),
      isActive: false,
      label: "Numbered List",
      icon: numberedListIcon,
    }
  }

  if (schema.nodes.ordered_list || schema.nodes.bullet_list) {
    const groupIndex =
      controlsSections.get("bullet_list") ||
      controlsSections.get("ordered_list") ||
      0
    toolbarControls[groupIndex]["lift_list"] = {
      action: liftOrIndentList("lift"),
      isActive: false,
      label: "Decrease indent",
      icon: decreaseIndentIcon,
    }
    toolbarControls[groupIndex]["indent_list"] = {
      action: liftOrIndentList("indent"),
      isActive: false,
      label: "Increase indent",
      icon: increaseIndentIcon,
    }
  }

  // console.log("toolbarControls", toolbarControls)
  return toolbarControls
}
