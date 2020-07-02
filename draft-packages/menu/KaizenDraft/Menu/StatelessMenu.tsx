import { default as React, ReactElement } from "react"

import { MenuProps } from "./Menu"
import MenuDropdown from "./MenuDropdown"
const styles = require("./styles.scss")

export type StatelessMenuProps = {
  isMenuVisible: boolean
  toggleMenuDropdown: any // TODO!
  hideMenuDropdown: any
  renderButton: (args: {
    onClick: () => void
    onMouseDown: (e: any) => void
  }) => React.ReactElement
} & MenuProps

export const StatelessMenu: React.FunctionComponent<StatelessMenuProps> = ({
  align = "left",
  automationId,
  renderButton,
  isMenuVisible,
  toggleMenuDropdown,
  hideMenuDropdown,
  children,
}) => {
  const dropdownButtonContainer = React.createRef<HTMLDivElement>()

  const menuButton = renderButton({
    onMouseDown: (e: any) => e.preventDefault(),
    onClick: () => {
      toggleMenuDropdown()
    },
  })
  const menu = renderMenuDropdown({
    align,
    children,
    dropdownButtonContainer,
    hideMenuDropdown,
  })
  return (
    <div
      className={styles.dropdown}
      data-automation-id={automationId}
      ref={dropdownButtonContainer}
    >
      {menuButton}
      {isMenuVisible ? menu : null}
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
