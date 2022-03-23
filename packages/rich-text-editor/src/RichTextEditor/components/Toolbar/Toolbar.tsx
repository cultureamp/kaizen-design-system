import React, { Children, useState, useRef, ReactNode } from "react"
import classnames from "classnames"
import { ToolbarSectionProps } from "../ToolbarSection"
import { ToolbarItem, ToolbarItemProps } from "../ToolbarItem"
import styles from "./Toolbar.scss"

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /*
   * Connect the Toolbar with the editable content area though its ID
   */
  "aria-controls": string
  /*
   * Provide an accessible name for screen readers for the Toolbar
   */
  "aria-label": string
}

const determineValidKeypress = (event: React.KeyboardEvent<HTMLDivElement>) => {
  enum validKey {
    left = "ArrowLeft",
    right = "ArrowRight",
  }
  return Object.values(validKey).includes(event.key)
}

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  buttonRefs: React.RefObject<any[]>,
  buttonFocusIndex: number,
  setButtonFocusIndex: any
) => {
  const buttons = buttonRefs.current
  if (!determineValidKeypress(e) || !buttons || buttons.length === 0) return
  const activeButton = buttons[buttonFocusIndex] as HTMLElement
  console.log(buttonFocusIndex)

  // e.preDefault()
  if (e.key === "ArrowLeft") {
    setFocusToPrevious(buttonFocusIndex, setButtonFocusIndex, buttons)
  } else {
    setFocusToNext(buttonFocusIndex, setButtonFocusIndex, buttons)
  }
}

const setFocusToPrevious = (currentButtonIndex, setCurrentIndex, buttons) => {
  let newButton
  // if is first set to last item to loop back around
  if (currentButtonIndex === 0) {
    newButton = buttons[buttons.length - 1]
    setCurrentIndex(buttons.length - 1)
  } else {
    newButton = buttons[currentButtonIndex - 1]
    setCurrentIndex(currentButtonIndex - 1)
  }
  newButton.tabIndex = 0
  newButton.focus()
}

const setFocusToNext = (currentButtonIndex, setCurrentIndex, buttons) => {
  let newButton
  // if is first set to last item to loop back around
  if (currentButtonIndex === buttons.length - 1) {
    newButton = buttons[0]
    setCurrentIndex(0)
  } else {
    newButton = buttons[currentButtonIndex + 1]
    setCurrentIndex(currentButtonIndex + 1)
  }
  newButton.tabIndex = 0
  newButton.focus()
}

export const Toolbar: React.VFC<ToolbarProps> = props => {
  const { children: toolbarChildren, ...toolbarProps } = props
  const toolbarButtonsRef = React.useRef<React.ReactNode[]>([])
  const [buttonFocusIndex, setButtonFocusIndex] = useState<number>(0)
  let count: number = 0

  return (
    <div
      className={styles.toolbar}
      role="toolbar"
      onKeyDown={e =>
        handleKeyDown(
          e,
          toolbarButtonsRef,
          buttonFocusIndex,
          setButtonFocusIndex
        )
      }
      tabIndex={0}
      {...toolbarProps}
    >
      {React.Children.map(toolbarChildren, (toolbarSection, sectionIndex) => {
        if (!React.isValidElement(toolbarSection)) {
          return toolbarChildren
        }
        const {
          children: sectionChildren,
          ...toolbarSectionProps
        }: ToolbarSectionProps = toolbarSection.props

        return (
          <toolbarSection.type
            {...toolbarSectionProps}
            key={`rte-section-${sectionIndex}`}
          >
            {React.Children.map(sectionChildren, (toolbarItem, itemIndex) => {
              if (!React.isValidElement(toolbarItem)) {
                return sectionChildren
              }

              return (
                <toolbarItem.type
                  {...toolbarItem.props}
                  key={`rte-item-${sectionIndex}`}
                >
                  {React.Children.map(
                    toolbarItem.props.children,
                    toolbarButton => {
                      count += 1
                      return React.cloneElement(toolbarButton, {
                        key: `rte-button-${count}`,
                        tabIndex:
                          itemIndex === 0 && sectionIndex === 0 ? 0 : -1,
                        ref: (
                          ref: React.RefObject<React.ReactNode | undefined>
                        ) => toolbarButtonsRef.current.push(ref),
                      })
                    }
                  )}
                </toolbarItem.type>
              )
            })}
          </toolbarSection.type>
        )
      })}
    </div>
  )
}
