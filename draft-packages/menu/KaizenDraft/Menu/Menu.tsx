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

export type MenuProps = GenericMenuProps & StatefulMenuProps

type Menu = React.FunctionComponent<MenuProps>

const Menu: Menu = props => {
  const { align = "left", menuVisible = false } = props

  const dropdownButtonContainer = React.createRef<HTMLDivElement>()

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(menuVisible)

  const toggleMenuDropdown = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const hideMenuDropdown = () => {
    setIsMenuVisible(false)
  }

  const { automationId, button, children } = props

  return render({
    ...props,
    align,
    isMenuVisible,
    dropdownButtonContainer,
    hideMenuDropdown,
    menuButton: React.cloneElement(button, {
      onClick: (e: any) => {
        e.stopPropagation()
        toggleMenuDropdown()
      },
      onMouseDown: e => e.preventDefault(),
    }),
  })
}

type RenderProps = {
  menuButton: React.ReactElement
  isMenuVisible: boolean
  dropdownButtonContainer: React.RefObject<HTMLDivElement>
  hideMenuDropdown: () => void
}

export const render = (props: GenericMenuProps & RenderProps) => {
  const menu = (
    <MenuDropdown
      position={getPosition(props.dropdownButtonContainer)}
      align={props.align}
      hideMenuDropdown={props.hideMenuDropdown}
    >
      {props.children}
    </MenuDropdown>
  )
  return (
    <div
      className={styles.dropdown}
      data-automation-id={props.automationId}
      ref={props.dropdownButtonContainer}
    >
      {props.menuButton}
      {props.isMenuVisible ? menu : null}
    </div>
  )
}

const getPosition = dropdownButtonContainer => {
  return dropdownButtonContainer && dropdownButtonContainer.current
    ? dropdownButtonContainer.current.getBoundingClientRect()
    : null
}

export default Menu
