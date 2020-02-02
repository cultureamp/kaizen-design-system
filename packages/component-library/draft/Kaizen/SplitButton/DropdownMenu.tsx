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
        // If we can't completely fit the menu above the splitbuttons, then
        // just show the menu below, as per the normal behaviour.
        menu.style.top = `${buttonsBoundingRect.height - borderRadiusBuffer}px`
      }
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
