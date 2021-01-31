import classnames from "classnames"
import * as React from "react"

import styles from "./styles.scss"

type MenuDropdownProps = {
  id?: string
  hideMenuDropdown: () => void
  position?: {
    top: number
    bottom: number
    left: number
    right: number
  } | null
  align?: "left" | "right"
  width?: "default" | "contain"
  autoHide?: "on" | "outside-click-only" | "off"
}

class MenuDropdown extends React.Component<MenuDropdownProps> {
  static displayName = "MenuDropdown"
  menu = React.createRef<HTMLDivElement>()

  componentDidMount() {
    const { autoHide } = this.props
    if (autoHide !== "off") {
      document.addEventListener(
        "click",
        this.handleDocumentClickForAutoHide,
        false
      )
    }
    window.addEventListener("resize", this.handleDocumentResize, false)
    this.positionMenu()
  }

  componentWillUnmount() {
    const { autoHide } = this.props
    if (autoHide !== "off") {
      document.removeEventListener(
        "click",
        this.handleDocumentClickForAutoHide,
        false
      )
    }
    window.removeEventListener("resize", this.handleDocumentResize, false)
  }

  componentWillUpdate(newProps) {
    // Hm, I don't like hooks, but in this situation they would have been handy
    if (this.props.autoHide === "off" && newProps.autoHide !== "off") {
      document.addEventListener(
        "click",
        this.handleDocumentClickForAutoHide,
        false
      )
    } else if (this.props.autoHide !== "off" && newProps.autoHide === "off") {
      document.removeEventListener(
        "click",
        this.handleDocumentClickForAutoHide,
        false
      )
    }
  }

  positionMenu() {
    const menu = this.menu

    if (!this.props.position || !menu) {
      return
    }

    if (menu.current) {
      const pos = this.props.position
      const { innerHeight } = window
      const rect = menu.current.getBoundingClientRect()

      menu.current.style.bottom =
        pos.bottom > innerHeight - rect.height ? "24px" : "auto"
    }
  }

  // This callback handler will not run when autoHide === "off"
  handleDocumentClickForAutoHide = (e: MouseEvent) => {
    if (
      this.menu?.current &&
      e.target instanceof Node &&
      !this.menu.current.contains(e.target)
    ) {
      this.props.hideMenuDropdown()
    }
  }

  handleDocumentResize = () => {
    this.props.hideMenuDropdown()
  }

  handleRootClick = (): void => {
    const { autoHide, hideMenuDropdown } = this.props
    if (autoHide === "on") {
      // ie. is not equal to "off" | "outside-click-only"
      hideMenuDropdown()
    }
  }

  render(): JSX.Element {
    const { children, align = "left", width = "default" } = this.props

    return (
      <div
        id={this.props.id}
        className={classnames(styles.menuContainer, {
          [styles.defaultWidth]: width == "default",
          [styles.alignRight]: align == "right",
        })}
        ref={this.menu}
        onClick={this.handleRootClick}
      >
        {children}
      </div>
    )
  }
}
export default MenuDropdown
