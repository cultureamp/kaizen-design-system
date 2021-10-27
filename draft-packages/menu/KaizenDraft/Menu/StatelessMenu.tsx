import { default as React, useEffect, useState, SyntheticEvent } from "react"
import ReactDOM from "react-dom"
import styles from "./styles.scss"
import MenuDropdown from "./MenuDropdown"

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

export const StatelessMenu: React.FunctionComponent<StatelessMenuProps> = ({
  align = "left",
  dropdownWidth = "default",
  autoHide = "on",
  automationId,
  dropdownId,
  children,
  portalSelector,
  isMenuVisible,
  toggleMenuDropdown,
  hideMenuDropdown,
  renderButton,
  onClick,
}) => {
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLSpanElement | null>(null)
  const portalSelectorElement: Element | null = portalSelector
    ? document.querySelector(portalSelector)
    : null

  const menuButton = renderButton({
    onClick: (e: any) => {
      e.preventDefault()
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
    <div data-automation-id={automationId} onClick={onClick}>
      <div className={styles.buttonWrapper} ref={setReferenceElement}>
        {menuButton}
      </div>
      {portalSelector && portalSelectorElement
        ? ReactDOM.createPortal(menu, portalSelectorElement)
        : menu}
    </div>
  )
}

export default StatelessMenu
