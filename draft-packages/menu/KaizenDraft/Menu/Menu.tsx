import { ButtonProps } from "@kaizen/draft-button"
import ReactDOM from "react-dom"
import React, { useEffect, useRef, useState } from "react"
import MenuDropdown from "./MenuDropdown"
import styles from "./styles.scss"

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
   * Determines when the menu should automatically hide.
   * @default: "on"
   */
  autoHide?: "on" | "outside-click-only" | "off"
  /**
   * The content to appear inside the dropdown when it is open
   */
  children: React.ReactNode
  portalSelector?: string
}

type ButtonPropsWithOptionalAria = ButtonProps & {
  "aria-haspopup"?: boolean
  "aria-expanded"?: boolean
}

type StatefulMenuProps = {
  button: React.ReactElement<ButtonPropsWithOptionalAria>
}

export type MenuProps = GenericMenuProps & StatefulMenuProps

type Menu = React.FunctionComponent<MenuProps>

const Menu: Menu = ({
  align = "left",
  dropdownWidth = "default",
  autoHide = "on",
  automationId,
  dropdownId,
  children,
  button,
  portalSelector,
  menuVisible = false,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(menuVisible)

  const toggleMenuDropdown = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const hideMenuDropdown = () => {
    setIsMenuVisible(false)
  }

  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLSpanElement | null>(null)
  const portalSelectorElement: Element | null = portalSelector
    ? document.querySelector(portalSelector)
    : null

  const menuButton = React.cloneElement(button, {
    onClick: (e: any) => {
      e.stopPropagation()
      toggleMenuDropdown()
    },
    onMouseDown: (e: any) => e.preventDefault(),
    "aria-haspopup": true,
    "aria-expanded": isMenuVisible,
  })

  useEffect(() => {
    if (portalSelector && !portalSelectorElement) {
      // eslint-disable-next-line no-console
      console.warn(
        "The portal could not be created using the selector: " + portalSelector
      )
    }
  }, [portalSelectorElement, portalSelector])

  const menu = isMenuVisible ? (
    <MenuDropdown
      referenceElement={referenceElement}
      align={align}
      hideMenuDropdown={hideMenuDropdown}
      width={dropdownWidth}
      id={dropdownId}
      autoHide={autoHide}
    >
      {children}
    </MenuDropdown>
  ) : null

  return (
    <div data-automation-id={automationId}>
      <div className={styles.buttonWrapper} ref={setReferenceElement}>
        {menuButton}
      </div>
      {portalSelector && portalSelectorElement
        ? ReactDOM.createPortal(menu, portalSelectorElement)
        : menu}
    </div>
  )
}

export default Menu
