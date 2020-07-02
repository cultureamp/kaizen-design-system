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

  const getPosition = () => {
    return dropdownButtonContainer && dropdownButtonContainer.current
      ? dropdownButtonContainer.current.getBoundingClientRect()
      : null
  }

  const renderMenuDropdown = () => {
    return (
      <MenuDropdown
        hideMenuDropdown={hideMenu}
        position={getPosition()}
        align={initializedProps.align}
      >
        {initializedProps.children}
      </MenuDropdown>
    )
  }

  const render = () => {
    const { automationId, button } = initializedProps
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
        {isMenuVisible && renderMenuDropdown()}
      </div>
    )
  }

  return render()
}

export default Menu
