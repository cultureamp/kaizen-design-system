import React, { useEffect, useState, Fragment } from "react"
import { EditorState } from "prosemirror-state"
import { Schema } from "prosemirror-model"
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
  schema: Schema<string, string>
  editorState: EditorState
  dispatchTransaction: (command: MaybeCommand) => void
  componentRef: React.RefObject<HTMLDivElement>
}

export function Toolbar({
  controls,
  editorState,
  schema,
  dispatchTransaction,
  componentRef,
}: ToolbarProps) {
  const isToolbarEmpty = controls.length === 0

  const [currentFocusIndex, setCurrentFocusIndex] = useState(0)

  const getNextFocusableControl = (index: number) => {
    for (let i = index + 1; i < controls.flat().length; i++) {
      return i
    }
    return 0
  }

  const getPreviousFocusableControl = (index: number) => {
    for (let i = index - 1; i > -1; i--) {
      return i
    }
    return controls.flat().length - 1
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

  const renderControlGroups = (controlGroups: ToolbarControls[][]) => {
    let counter = 0
    return controlGroups.map((controlGroup: ToolbarControls[], index) =>
      controlGroup.map(control => {
        const controlMarkup = (
          <Fragment key={control}>
            {index > 0 && (
              <span className={styles.dividerElement} aria-hidden={true} />
            )}
            {renderControl(control, counter)}
          </Fragment>
        )
        counter += 1
        return controlMarkup
      })
    )
  }

  const renderControl = (control: ToolbarControls, index: number) => {
    const controlProperties = toolbarControls.get(control)
    if (!controlProperties) return
    const markType = schema.marks[control]

    return (
      <ToggleButton
        icon={controlProperties.icon}
        label={controlProperties.label}
        dispatchTransaction={dispatchTransaction}
        editorState={editorState}
        markType={markType}
        {...commonToolbarProps(index)}
      />
    )
  }

  return <>{renderControlGroups(controls)}</>
}
