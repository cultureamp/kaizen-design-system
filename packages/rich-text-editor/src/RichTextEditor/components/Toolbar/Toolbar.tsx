import React, { Children, useState, useContext, useRef, ReactNode } from "react"
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

const determineValidKeypress = (event: React.KeyboardEvent<HTMLElement>) => {
  enum validKey {
    left = "ArrowLeft",
    right = "ArrowRight",
  }
  return Object.values(validKey).includes(event.key)
}

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLElement>,
  buttonIndex: number,
  buttonFocusIndex: number,
  setFocusIndex: any,
  toolbarButtons: any
) => {
  // const toolbarState = useContext(ToolbarContext)
  if (!determineValidKeypress(e)) return
  let newFocusIndex
  const lastButtonIndex = toolbarButtons.current.length - 1

  console.log("current button index:", buttonIndex)
  console.log("buttons:", toolbarButtons.current)

  // e.preDefault()
  if (e.key === "ArrowLeft") {
    newFocusIndex = buttonIndex === 0 ? lastButtonIndex : buttonFocusIndex - 1
  } else {
    newFocusIndex = buttonIndex === lastButtonIndex ? 0 : buttonFocusIndex + 1
  }

  console.log("new Index:", newFocusIndex)
  console.log("Focusing on:", toolbarButtons.current[newFocusIndex])

  setFocusIndex(newFocusIndex)
  toolbarButtons.current[newFocusIndex].focus()
}

interface ToolbarContextProps {
  focusIndex: number
}

// const ToolbarContext = React.createContext<ToolbarContextProps>({
//   focusIndex: 0,
// })

export const Toolbar: React.VFC<ToolbarProps> = props => {
  const { children: toolbarChildren, ...toolbarProps } = props
  const [buttonFocusIndex, setButtonFocusIndex] = useState<number>(0)
  const toolbarButtonsRef = React.useRef<React.ReactNode[]>([])
  let buttonCount: number = 0

  return (
    // <ToolbarContext.Provider value={{ focusIndex: buttonFocusIndex }}>
    <div
      className={styles.toolbar}
      role="toolbar"
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
            {React.Children.map(sectionChildren, toolbarButton => {
              if (!React.isValidElement(toolbarButton)) {
                return
              }
              const buttonIndex = buttonCount
              buttonCount += 1
              return (
                <toolbarButton.type
                  {...toolbarButton.props}
                  id={`rte-button-${buttonIndex}`}
                  key={`rte-button-${buttonIndex}`}
                  tabIndex={buttonIndex === buttonFocusIndex ? 0 : -1}
                  onKeyDown={e =>
                    handleKeyDown(
                      e,
                      buttonIndex,
                      buttonFocusIndex,
                      setButtonFocusIndex,
                      toolbarButtonsRef
                    )
                  }
                  ref={(ref: React.RefObject<React.ReactNode | undefined>) =>
                    (toolbarButtonsRef.current[buttonIndex] = ref)
                  }
                />
              )
            })}
          </toolbarSection.type>
        )
      })}
    </div>
    // </ToolbarContext.Provider>
  )
}
