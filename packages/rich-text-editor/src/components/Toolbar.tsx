import React, { useEffect, useState } from "react"
import { EditorState } from "prosemirror-state"
// import { MaybeCommand } from "../types"
// import {
//   ToolbarControlLabels,
//   ToolbarControls,
// } from "../constants/toolbarControls"
import { ToolbarControls, toolbarControls } from "../constants"

import { ToggleButton } from "./ToggleButton"
import styles from "./Toolbar.scss"

export type ToolbarProps = {
  controls: ToolbarControls[][]
  editorState: EditorState
  dispatchTransaction: (command: MaybeCommand) => void
  componentRef: React.RefObject<HTMLDivElement>
}

export function Toolbar({
  controls,
  editorState,
  dispatchTransaction,
  componentRef,
}: ToolbarProps) {
  const isToolbarEmpty = controls.length === 0

  const [currentFocusIndex, setCurrentFocusIndex] = useState(0)

  const getNextFocusableControl = (index: number) => {
    for (let i = index + 1; i < controls.length; i++) {
      return i
    }
    return 0
  }

  const getPreviousFocusableControl = (index: number) => {
    for (let i = index - 1; i > -1; i--) {
      return i
    }
    return 0
  }

  const onFocus = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      setCurrentFocusIndex(getNextFocusableControl(index))
    } else if (e.key === "ArrowLeft") {
      setCurrentFocusIndex(getPreviousFocusableControl(index))
    }
  }

  const commonToolbarProps = (index: number) => ({
    tabIndex: index === currentFocusIndex ? 0 : -1,
    onFocus,
    index,
    componentRef,
  })

  useEffect(() => {
    const documentFocusListener = () => {
      // if focus moves outside of the component, we want to reset the first control to have tabindex=0
      // the timeout ensures this event listener fires after the keyUp event on the button
      setTimeout(() => {
        if (componentRef.current) {
          if (!componentRef.current.contains(document.activeElement)) {
            setCurrentFocusIndex(0)
          }
        }
      }, 1)
    }

    document.body.addEventListener("focusout", documentFocusListener)

    return () => {
      document.body.addEventListener("focusout", documentFocusListener)
    }
  })

  const renderControl = (control: ToolbarControls, index: number) => {
    const controlProperties = toolbarControls.get(control)
    if (!controlProperties) return

    return (
      <ToggleButton
        key={control}
        icon={controlProperties.icon}
        label={controlProperties.label}
        dispatchTransaction={dispatchTransaction}
        editorState={editorState}
        markType={controlProperties.markType}
        {...commonToolbarProps(index)}
      />
    )
  }

  return (
    <>
      {renderControl("bold", 0)}
      {renderControl("em", 1)}
    </>
  )
}
