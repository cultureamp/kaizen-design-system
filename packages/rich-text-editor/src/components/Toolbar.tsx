import React, { useEffect, useState } from "react"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import italicsIcon from "@kaizen/component-library/icons/italics.icon.svg"
import olIcon from "@kaizen/component-library/icons/numbered-list.icon.svg"
import link from "@kaizen/component-library/icons/add-link.icon.svg"
import underlineIcon from "@kaizen/component-library/icons/underline.icon.svg"
import { EditorState } from "prosemirror-state"
import { wrapInList } from "prosemirror-schema-list"
// import { MaybeCommand } from "../types"
// import { LinkButton } from "./LinkButton"
// import {
//   ToolbarControlLabels,
//   ToolbarControls,
// } from "../constants/toolbarControls"

// import { ToggleButton } from "./ToggleButton"
import styles from "./Toolbar.scss"

export type ToolbarProps = {
  controls: ToolbarControls[]
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
      if (controls[i] !== "divider") {
        return i
      }
    }

    return 0
  }

  const getPreviousFocusableControl = (index: number) => {
    for (let i = index - 1; i > -1; i--) {
      if (controls[i] !== "divider") {
        return i
      }
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

  return (
    <>
      {!isToolbarEmpty &&
        controls.map((control, index) => {
          let element

          switch (control) {
            case ToolbarControls.Bold:
              element = (
                <ToggleButton
                  key={ToolbarControlLabels.Bold}
                  icon={boldIcon}
                  label={ToolbarControlLabels.Bold}
                  dispatchTransaction={dispatchTransaction}
                  editorState={editorState}
                  markType={editorState.schema.marks.strong}
                  {...commonToolbarProps(index)}
                />
              )
              break
            case ToolbarControls.Italics:
              element = (
                <ToggleButton
                  key={ToolbarControlLabels.Italics}
                  icon={italicsIcon}
                  label={ToolbarControlLabels.Italics}
                  editorState={editorState}
                  dispatchTransaction={dispatchTransaction}
                  markType={editorState.schema.marks.em}
                  {...commonToolbarProps(index)}
                />
              )
              break
            case ToolbarControls.Underline:
              element = (
                <ToggleButton
                  key={ToolbarControlLabels.Underline}
                  icon={underlineIcon}
                  label={ToolbarControlLabels.Underline}
                  editorState={editorState}
                  dispatchTransaction={dispatchTransaction}
                  markType={editorState.schema.marks.underline}
                  {...commonToolbarProps(index)}
                />
              )
              break
            case ToolbarControls.UL:
              element = (
                <button
                  key={ToolbarControlLabels.UL}
                  type="button"
                  onClick={e => {
                    e.preventDefault()
                    dispatchTransaction(
                      wrapInList(editorState.schema.nodes.bullet_list)
                    )
                  }}
                >
                  {ToolbarControlLabels.UL}
                </button>
              )
              break
            case ToolbarControls.OL:
              element = (
                <ToggleButton
                  key={ToolbarControlLabels.OL}
                  icon={olIcon}
                  label={ToolbarControlLabels.OL}
                  editorState={editorState}
                  dispatchTransaction={dispatchTransaction}
                  markType={editorState.schema.marks.strong}
                  {...commonToolbarProps(index)}
                />
              )
              break
            case ToolbarControls.Link:
              element = (
                <LinkButton
                  key={ToolbarControlLabels.Link}
                  icon={link}
                  label={ToolbarControlLabels.Link}
                  dispatchTransaction={dispatchTransaction}
                  editorState={editorState}
                  {...commonToolbarProps(index)}
                />
              )
              break
            default:
              element = (
                <span
                  className={styles.dividerElement}
                  aria-hidden
                  key="divider"
                />
              )
          }
          return element
        })}
    </>
  )
}
