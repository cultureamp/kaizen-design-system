// please don't leave this big copy pasta'd component

import React, { useEffect, useState, Fragment } from "react"
import { EditorState } from "prosemirror-state"
import { MarkType, Schema } from "prosemirror-model"
// import { MaybeCommand } from "../types"

import { ToggleButton } from "./ToggleButton"
import styles from "./Toolbar.scss"

export type ToolbarProps = {
  schema: Schema<string, string>
  editorState: EditorState
  dispatchTransaction: (command: MaybeCommand) => void
  componentRef: React.RefObject<HTMLDivElement>
}

export function CustomToolbar({
  editorState,
  schema,
  dispatchTransaction,
  componentRef,
}: ToolbarProps) {
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0)
  const marks = Object.keys(schema.marks)

  // Create an array of marks, filtering out any that don't have a `control` property
  const controlsWithGroup = marks.reduce((acc: MarkType[], curr: string) => {
    const markItself = schema.marks[curr]
    if (!markItself.spec.control) {
      return acc
    }
    return [...acc, markItself]
  }, [])

  // Pull out all of the groups that we have controls for
  const groups: number[] = marks.map(m => schema.marks[m].spec.control.group)

  // Uniquify the array of groups
  const uniqueGroups = groups.filter((x, i, a) => a.indexOf(x) === i)

  // Sort the set of unique group numbers
  uniqueGroups.sort((a, b) => a - b)

  // Using the unique groups array, we can now create our grouped 2d array of controls
  const controls: MarkType[][] = uniqueGroups.map(g =>
    controlsWithGroup.filter(c => c.spec.control.group === g)
  )

  const isToolbarEmpty = controls.flat().length <= 0

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

  const renderControlGroups = (controlGroups: MarkType[][]) => {
    let counter = 0
    return controlGroups.map((controlGroup: any, groupIndex: number) =>
      controlGroup.map((control, controlIndex: number) => {
        const controlMarkup = (
          <Fragment key={control.name}>
            {groupIndex > 0 && controlIndex === 0 && (
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

  const renderControl = (mark: MarkType, index: number) => (
    <ToggleButton
      icon={mark.spec.control.icon}
      label={mark.spec.control.label}
      dispatchTransaction={dispatchTransaction}
      editorState={editorState}
      markType={mark}
      {...commonToolbarProps(index)}
    />
  )

  return <>{renderControlGroups(controls)}</>
}
