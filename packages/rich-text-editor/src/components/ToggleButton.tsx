import React from "react"
import { EditorState } from "prosemirror-state"
import { MarkType } from "prosemirror-model"
// import { CommandOrTransaction } from "@cultureamp/rich-text-editor"
import { addMark } from "../commands/addMark"
import { removeMark } from "../commands/removeMark"
import { CheckableIconButton } from "./CheckableIconButton"
import { EditorMarkButton } from "./EditorMarkButton"

type ToggleButtonProps = {
  activeIcon?: React.SVGAttributes<SVGSymbolElement>
  activeLabel?: string
  icon: React.SVGAttributes<SVGSymbolElement>
  label: string
  dispatchTransaction: (maybeCommand: CommandOrTransaction) => void
  editorState: EditorState
  markType: MarkType
  tabIndex: number
  onFocus: (e: React.KeyboardEvent, index: number) => void
  index: number
  componentRef: React.RefObject<HTMLDivElement>
}

export function ToggleButton({
  activeIcon,
  activeLabel,
  icon,
  label,
  editorState,
  markType,
  dispatchTransaction,
  tabIndex,
  onFocus,
  index,
  componentRef,
}: ToggleButtonProps) {
  const add = addMark(markType)
  const remove = removeMark(markType)

  return (
    <EditorMarkButton markType={markType} editorState={editorState}>
      {({ active, contained }) => {
        let action = add
        if (active) {
          action = remove
        }
        function onMouseDown(
          event: React.MouseEvent<Element, globalThis.MouseEvent>
        ) {
          event.preventDefault()
          dispatchTransaction(action)
        }
        function onKeyboardSpace(event: React.KeyboardEvent) {
          dispatchTransaction(action)
        }
        return (
          <CheckableIconButton
            checked={active}
            onMouseDown={onMouseDown}
            onKeyboardSpace={onKeyboardSpace}
            label={active && activeLabel ? activeLabel : label}
            icon={active && activeIcon ? activeIcon : icon}
            tabIndex={tabIndex}
            onFocus={onFocus}
            index={index}
            componentRef={componentRef}
          />
        )
      }}
    </EditorMarkButton>
  )
}
