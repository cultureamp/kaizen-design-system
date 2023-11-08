import React from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { ToolbarSectionProps } from "../ToolbarSection"
import styles from "./Toolbar.module.scss"

export type ToolbarProps = {
  children: React.ReactNode
  /*
   * Connect the Toolbar with the editable content area through its ID
   */
  "aria-controls": string
  /*
   * Provide an accessible name for screen readers for the Toolbar
   */
  "aria-label": string
} & OverrideClassName<React.HTMLAttributes<HTMLElement>>

const determineValidKeypress = (
  event: React.KeyboardEvent<HTMLElement>
): boolean => {
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
): void => {
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

export const Toolbar = (props: ToolbarProps): JSX.Element => {
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
      className={classnames(styles.toolbar, classNameOverride)}
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
                  key={`rte-button-${buttonIndex}`}
                  tabIndex={buttonIndex === buttonFocusIndex ? 0 : -1}
                  onKeyDown={(e: React.KeyboardEvent<HTMLElement>): void =>
                    handleKeyDown(
                      e,
                      buttonIndex,
                      buttonFocusIndex,
                      setButtonFocusIndex,
                      toolbarButtonsRef
                    )
                  }
                  ref={(ref: React.ReactNode | undefined): React.ReactNode =>
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

Toolbar.displayName = "Toolbar"
