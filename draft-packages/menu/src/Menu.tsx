import { ButtonProps } from "@kaizen/draft-button"
import React, { useRef, useState } from "react"
import styles from "../styles/styles.scss"
import MenuDropdown from "./MenuDropdown"

export type GenericMenuProps = {
  /**
   * Whether the menu is to be used on the left or right
   * side of the viewport. If left, the left of the dropdown
   * is aligned to the left of the button (and vice versa)
   * @default "left"
   */
  align?: "left" | "right"

  /**
   * The width of the dropdown.
   * "default": a fixed width of 248px
   * "contain": contain the children's width (will be same width as children)
   * @default "default"
   */
  dropdownWidth?: "default" | "contain"

  /**
   * The initial state of the dropdown. Once initalised, further changes to this
   * prop will not have any affect, as the state is handled internally to the component.
   * @default: false
   */
  menuVisible?: boolean
  automationId?: string
  dropdownId?: string

  /**
   * The content to appear inside the dropdown when it is open
   */
  children: React.ReactNode
}

type StatefulMenuProps = {
  button: React.ReactElement<ButtonProps>
}

export type MenuProps = GenericMenuProps & StatefulMenuProps

type Menu = React.FunctionComponent<MenuProps>

const Menu: Menu = props => {
  const {
    align = "left",
    dropdownWidth = "default",
    menuVisible = false,
  } = props

  const dropdownButtonContainer: React.RefObject<HTMLDivElement> = useRef(null)

  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(menuVisible)

  const toggleMenuDropdown = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const hideMenuDropdown = () => {
    setIsMenuVisible(false)
  }

  const { button } = props

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
      onMouseDown: (e: any) => e.preventDefault(),
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
      width={props.dropdownWidth}
      id={props.dropdownId}
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

const getPosition = (
  dropdownButtonContainer: React.RefObject<HTMLDivElement>
) =>
  dropdownButtonContainer && dropdownButtonContainer.current
    ? dropdownButtonContainer.current.getBoundingClientRect()
    : null

export default Menu
