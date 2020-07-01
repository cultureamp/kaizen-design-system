import * as React from "react"

import { MenuProps } from "./Menu"
import MenuDropdown from "./MenuDropdown"
const styles = require("./styles.scss")

export type StatelessMenuProps = {
  isMenuVisible: boolean
  toggleMenuDropdown: any // TODO!
  hideMenuDropdown: any
} & MenuProps

export const StatelessMenu: React.FunctionComponent<StatelessMenuProps> = ({
  align = "left",
  automationId,
  button,
  isMenuVisible,
  toggleMenuDropdown,
  hideMenuDropdown,
  children,
}) => {
  const dropdownButtonContainer = React.createRef<HTMLDivElement>()
  return (
    <div
      className={styles.dropdown}
      data-automation-id={automationId}
      ref={dropdownButtonContainer}
    >
      {React.cloneElement(button, {
        onClick: () => {
          toggleMenuDropdown()
        },
        onMouseDown: (e: any) => e.preventDefault(), // TODO any
      })}
      {isMenuVisible &&
        renderMenuDropdown({
          align,
          children,
          dropdownButtonContainer,
          hideMenuDropdown,
        })}
    </div>
  )
}

const renderMenuDropdown = ({
  align,
  children,
  dropdownButtonContainer,
  hideMenuDropdown,
}) => {
  return (
    <MenuDropdown
      position={getPosition(dropdownButtonContainer)}
      align={align}
      hideMenuDropdown={hideMenuDropdown}
    >
      {children}
    </MenuDropdown>
  )
}

// TODO: add types
const getPosition = dropdownButtonContainer => {
  return dropdownButtonContainer && dropdownButtonContainer.current
    ? dropdownButtonContainer.current.getBoundingClientRect()
    : null
}
