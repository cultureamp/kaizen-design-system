import { ButtonProps } from "@kaizen/draft-button"
import React, { useState } from "react"
import MenuDropdown from "./MenuDropdown"

const styles = require("./styles.scss")

export type GenericMenuProps = {
  align?: "left" | "right"
  menuVisible?: boolean
  automationId?: string
  children: React.ReactNode
}

type StatefulMenuProps = {
  button: React.ReactElement<ButtonProps>
}

type Menu = React.FunctionComponent<GenericMenuProps & StatefulMenuProps>

const Menu: Menu = props => {
  const { align = "left" } = props

  const dropdownButtonContainer = React.createRef<HTMLDivElement>()

  const [isMenuVisible, setIsMenuVisible] = useState(props.menuVisible)

  const toggleMenuDropdown = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const hideMenuDropdown = () => {
    setIsMenuVisible(false)
  }

  const { automationId, button, children } = props

  return render({
    menuButton: React.cloneElement(button, {
      onClick: e => {
        e.preventDefault()
        toggleMenuDropdown()
      },
      onMouseDown: e => e.preventDefault(),
    }),
    isMenuVisible,
    automationId,
    dropdownButtonContainer,
    align,
    children,
    hideMenuDropdown,
  })
}

export const renderMenuDropdown = ({
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

export const render = ({
  menuButton,
  isMenuVisible,
  automationId,
  dropdownButtonContainer,
  align,
  children,
  hideMenuDropdown,
}) => {
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

const getPosition = dropdownButtonContainer => {
  return dropdownButtonContainer && dropdownButtonContainer.current
    ? dropdownButtonContainer.current.getBoundingClientRect()
    : null
}

export default Menu
