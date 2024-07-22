import React, { useEffect, useState, SyntheticEvent, useRef } from "react"
import ReactDOM from "react-dom"
import { MenuDropdown } from "../MenuDropdown"
import styles from "./StatelessMenu.module.scss"

export type StatelessMenuProps = {
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
   * @deprecated use data-testid instead
   */
  automationId?: string
  "data-testid"?: string
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
  /**
   * Render the tooltip inside a react portal, given the CSS selector.
   * This is typically used for instances where the menu is a descendant of an
   * `overflow: scroll` or `overflow: hidden` element.
   */
  portalSelector?: string
  isMenuVisible: boolean
  toggleMenuDropdown: () => void
  hideMenuDropdown: () => void
  renderButton: (args: {
    onClick: (e: any) => void
    onMouseDown: (e: any) => void
    "aria-haspopup": boolean
    "aria-expanded": boolean
  }) => React.ReactElement
  onClick?: (event: SyntheticEvent) => void
}

export const StatelessMenu = ({
  align = "left",
  dropdownWidth = "default",
  autoHide = "on",
  "data-testid": dataTestId,
  dropdownId,
  children,
  portalSelector,
  isMenuVisible,
  toggleMenuDropdown,
  hideMenuDropdown,
  renderButton,
  onClick,
}: StatelessMenuProps): JSX.Element => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLSpanElement | null>(null)
  const portalSelectorElementRef = useRef<Element | null>(null)

  const menuButton = renderButton({
    onClick: (e: React.MouseEvent<Element, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()
      toggleMenuDropdown()
    },
    onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) =>
      e.preventDefault(),
    "aria-haspopup": true,
    "aria-expanded": isMenuVisible,
  })

  useEffect(() => {
    portalSelectorElementRef.current = portalSelector
      ? document.querySelector(portalSelector)
      : null
  }, [portalSelector])

  useEffect(() => {
    if (portalSelector && !portalSelectorElementRef.current) {
      // eslint-disable-next-line no-console
      console.warn(
        "The portal could not be created using the selector: " + portalSelector
      )
    }
  }, [portalSelectorElementRef, portalSelector])

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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div data-testid={dataTestId} onClick={onClick}>
      <div className={styles.buttonWrapper} ref={setReferenceElement}>
        {menuButton}
      </div>
      {portalSelector && portalSelectorElementRef.current
        ? ReactDOM.createPortal(menu, portalSelectorElementRef.current)
        : menu}
    </div>
  )
}

StatelessMenu.displayName = "StatelessMenu"
