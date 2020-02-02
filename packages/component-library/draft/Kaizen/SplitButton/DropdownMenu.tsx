import * as React from "react"
import { RefObject } from "react"
import { Dir } from "./types"
const styles = require("./styles.scss")

type Props = {
  children: React.ReactNode
  buttonsBoundingRect: ClientRect | null // get by calling getBoundingClientRect()
  hideDropdownMenu: () => void
  dir?: Dir
}

export default class DropdownMenu extends React.Component<Props> {
  static displayName = "DropdownMenu"
  static defaultProps = {
    dir: "ltr",
  }

  _menuRef: RefObject<HTMLDivElement> | null

  constructor(props: Props) {
    super(props)
    this._menuRef = React.createRef()
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
    const menu = this._menuRef && this._menuRef.current
    if (!buttonsBoundingRect || !menu) {
      return
    }
    const menuRect = menu.getBoundingClientRect()
    // Used to hide the border of the buttonsContainer class
    const borderRadiusBuffer = 2

    if (buttonsBoundingRect.bottom + menuRect.height <= window.innerHeight) {
      // Show menu below the split buttons
      menu.style.top = `${buttonsBoundingRect.height - borderRadiusBuffer}px`
    } else {
      if (menuRect.height <= buttonsBoundingRect.top) {
        // Show menu above the split buttons
        menu.style.top = `${-menuRect.height + borderRadiusBuffer}px`
      } else {
        // We can't completely fit the menu above or below the split buttons,
        // so we'll position them where we can
        let offset =
          buttonsBoundingRect.bottom + menuRect.height - window.innerHeight
        // Don't let the menu go above the top of the viewport
        let top = Math.max(
          -buttonsBoundingRect.top,
          buttonsBoundingRect.height - offset
        )
        // Remove the awkward view of the menu showing half on top of the split buttons
        if (top > 0 && top < buttonsBoundingRect.height) {
          top = 0
        }
        menu.style.top = `${top}px`
      }
    }

    if (this.props.dir === "rtl") {
      menu.style.left = "0px"
    } else {
      menu.style.right = "0px"
    }
  }

  handleDocumentClick = (e: MouseEvent) => {
    if (
      this._menuRef &&
      this._menuRef.current &&
      e.target instanceof Node &&
      !this._menuRef.current.contains(e.target)
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
        ref={this._menuRef}
        onClick={() => props.hideDropdownMenu()}
      >
        {props.children}
      </div>
    )
  }
}
