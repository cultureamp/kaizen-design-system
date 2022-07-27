import React from "react"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { ToolbarSectionProps } from "../ToolbarSection"
import styles from "./Toolbar.module.scss"

export interface ToolbarProps
  extends OverrideClassName<React.HTMLAttributes<HTMLElement>> {
  children: React.ReactNode
  /*
   * Connect the Toolbar with the editable content area through its ID
   */
  "aria-controls": string
  /*
   * Provide an accessible name for screen readers for the Toolbar
   */
  "aria-label": string
}

const determineValidKeypress = (event: React.KeyboardEvent<HTMLElement>) => {
  const validKeys = {
    left: "ArrowLeft",
    right: "ArrowRight",
  }
  return Object.values(validKeys).includes(event.key)
}

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLElement>,
  buttonIndex: number,
  buttonFocusIndex: number,
  setFocusIndex: React.Dispatch<React.SetStateAction<number>>,
  toolbarButtons: React.MutableRefObject<any>
) => {
  if (!determineValidKeypress(e)) return
  let newFocusIndex
  const lastButtonIndex = toolbarButtons.current.length - 1
  if (e.key === "ArrowLeft") {
    newFocusIndex = buttonIndex === 0 ? lastButtonIndex : buttonFocusIndex - 1
  } else {
    newFocusIndex = buttonIndex === lastButtonIndex ? 0 : buttonFocusIndex + 1
  }

  setFocusIndex(newFocusIndex)
  toolbarButtons.current[newFocusIndex].focus()
}

export const Toolbar: React.VFC<ToolbarProps> = props => {
  const {
    children: toolbarChildren,
    classNameOverride,
    ...toolbarProps
  } = props
  const [buttonFocusIndex, setButtonFocusIndex] = React.useState<number>(0)
  const toolbarButtonsRef = React.useRef<React.ReactNode[]>([])
  let buttonCount: number = 0

  return (
    <div
      className={classNames(styles.toolbar, classNameOverride)}
      role="toolbar"
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
                  ref={(ref: React.ReactNode | undefined) =>
                    (toolbarButtonsRef.current[buttonIndex] = ref)
                  }
                />
              )
            })}
          </toolbarSection.type>
        )
      })}
    </div>
  )
}
