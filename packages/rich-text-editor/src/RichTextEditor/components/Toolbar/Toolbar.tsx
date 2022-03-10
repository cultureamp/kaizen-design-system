import React, { Children, useState } from "react"
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

const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
  console.log(document.activeElement)
  if (!determineValidKeypress(event)) return
  // event.preventDefault()
  if (event.key === "ArrowLeft") {
    console.log("left")
  } else {
    console.log("right")
  }
}

export const Toolbar: React.VFC<ToolbarProps> = props => {
  const { children: toolbarChildren, ...toolbarProps } = props
  let count = 0
  // TODO: extract all of the inner props
  // recursively dig through
  return (
    <div
      className={styles.toolbar}
      role="toolbar"
      onKeyDown={e => handleKeyDown(e)}
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
          <toolbarSection.type {...toolbarSectionProps}>
            {React.Children.map(sectionChildren, (toolbarItem, itemIndex) => {
              if (!React.isValidElement(toolbarItem)) {
                return sectionChildren
              }

              return (
                <toolbarItem.type {...toolbarItem.props}>
                  {React.Children.map(toolbarItem.props.children, toggle => {
                    count += 1
                    return React.cloneElement(toggle, {
                      tabIndex: itemIndex === 0 && sectionIndex === 0 ? 0 : -1,
                      id: `toggleId-${count}`,
                    })
                  })}
                </toolbarItem.type>
              )
            })}
          </toolbarSection.type>
        )
      })}
    </div>
  )
}

const validateElement = (
  element: React.ReactElement,
  node: React.ReactNode
) => {
  if (!React.isValidElement(element)) {
    return node
  }
}
