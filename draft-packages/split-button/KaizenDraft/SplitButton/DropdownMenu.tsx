import React, { RefObject } from "react"
import { Dir } from "./types"
const styles = require("./styles.scss")

type Props = {
  children: React.ReactNode
  buttonsBoundingRect: ClientRect | null // get by calling getBoundingClientRect()
  hideDropdownMenu: () => void
  dir?: Dir
}

export const calculateMenuTop = (
  buttonsBoundingRect: ClientRect,
  menuBoundingRect: ClientRect,
  viewportHeight
): number => {
  // Used to hide the border of the buttonsContainer class
  const borderRadiusBuffer = 2

  // If there's not enough room to show the menu below the split buttons,
  // but enough room to show it above...
  if (
    buttonsBoundingRect.bottom + menuBoundingRect.height > viewportHeight &&
    menuBoundingRect.height <= buttonsBoundingRect.top
  ) {
    // Show menu above the split buttons
    return -menuBoundingRect.height + borderRadiusBuffer
  }

  // Regular behaviour, show menu below the split buttons
  return buttonsBoundingRect.height - borderRadiusBuffer
}

export default class DropdownMenu extends React.Component<Props> {
  static displayName = "DropdownMenu"
  static defaultProps = {
    dir: "ltr",
  }

  menuRef: RefObject<HTMLDivElement> | null

  constructor(props: Props) {
    super(props)
    this.menuRef = React.createRef()
  }

  componentDidMount() {
    document.addEventListener("click", this.handleDocumentClick, false)
    window.addEventListener("resize", this.handleDocumentResize, false)
    this.positionMenu()
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick, false)
    window.removeEventListener("resize", this.handleDocumentResize, false)
  }

  positionMenu() {
    const { buttonsBoundingRect } = this.props
    const menu = this.menuRef && this.menuRef.current
    if (!buttonsBoundingRect || !menu) {
      return
    }
    const menuBoundingRect = menu.getBoundingClientRect()

    menu.style.top = `${calculateMenuTop(
      buttonsBoundingRect,
      menuBoundingRect,
      window.innerHeight
    )}px`
  }

  handleDocumentClick = (e: MouseEvent) => {
    if (
      this.menuRef &&
      this.menuRef.current &&
      e.target instanceof Node &&
      !this.menuRef.current.contains(e.target)
    ) {
      this.props.hideDropdownMenu()
    }
  }

  handleDocumentResize = () => {
    this.props.hideDropdownMenu()
  }

  render() {
    const props = this.props
    return (
      <div
        className={styles.menuContainer}
        ref={this.menuRef}
        onClick={() => props.hideDropdownMenu()}
      >
        {props.children}
      </div>
    )
  }
}
