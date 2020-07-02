import { ButtonProps } from "@kaizen/draft-button"
import React, { useState } from "react"
import MenuDropdown from "./MenuDropdown"

const styles = require("./styles.scss")

type MenuState = {
  isMenuVisible: boolean
}

export type MenuProps = {
  align?: "left" | "right"
  button: React.ReactElement<ButtonProps>
  menuVisible?: boolean
  automationId?: string
}

type Menu = React.FunctionComponent<MenuProps>

const Menu: Menu = (props: MenuProps) => {
  const { align = "left" } = props

  const initializedProps = { ...props, align }

  const dropdownButtonContainer = React.createRef<HTMLDivElement>()

  const [isMenuVisible, setIsMenuVisible] = useState(
    initializedProps.menuVisible
  )

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const hideMenu = () => {
    setIsMenuVisible(false)
  }

  const { automationId, button, children } = initializedProps
  const menu = renderMenuDropdown({
    align,
    children,
    dropdownButtonContainer,
    hideMenuDropdown: hideMenu,
  })
  return (
    <div
      className={styles.dropdown}
      data-automation-id={automationId}
      ref={dropdownButtonContainer}
    >
      {React.cloneElement(button, {
        onClick: e => {
          e.preventDefault()
          toggleMenu()
        },
        onMouseDown: e => e.preventDefault(),
      })}
      {isMenuVisible ? menu : null}
    </div>
  )
}

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

const getPosition = dropdownButtonContainer => {
  return dropdownButtonContainer && dropdownButtonContainer.current
    ? dropdownButtonContainer.current.getBoundingClientRect()
    : null
}

export default Menu
