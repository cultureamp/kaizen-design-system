import React, { useEffect, useState, Fragment } from "react"
import { EditorState } from "prosemirror-state"
// import { MaybeCommand } from "../types"
import { ToggleButton } from "./ToggleButton"
import styles from "./Toolbar.scss"

export type ToolbarProps = {
  marks: any
  editorState: EditorState
  dispatchTransaction: (command: MaybeCommand) => void
  componentRef: React.RefObject<HTMLDivElement>
}

export function Toolbar({
  marks,
  editorState,
  dispatchTransaction,
  componentRef,
}: ToolbarProps) {
  const isToolbarEmpty = marks.flat().length === 0

  const [currentFocusIndex, setCurrentFocusIndex] = useState(0)

  const getNextFocusableControl = (index: number) => {
    for (let i = index + 1; i < marks.flat().length; i++) {
      return i
    }
    return 0
  }

  const getPreviousFocusableControl = (index: number) => {
    for (let i = index - 1; i > -1; i--) {
      return i
    }
    return marks.flat().length - 1
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

  const renderControlGroups = (controlGroups: any) => {
    let counter = 0
    return controlGroups.map((controlGroup, index) =>
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

  const renderControl = (mark: any, index: number) => (
    <ToggleButton
      icon={mark.spec.control.icon}
      label={mark.spec.control.label}
      dispatchTransaction={dispatchTransaction}
      editorState={editorState}
      markType={mark}
      {...commonToolbarProps(index)}
    />
  )

  return <>{renderControlGroups(marks)}</>
}
