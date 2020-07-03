import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

type MenuDropdownProps = {
  hideMenuDropdown: () => void
  position?: {
    top: number
    bottom: number
    left: number
    right: number
  } | null
  align?: "left" | "right"
  width?: "default" | "contain"
}

export default class MenuDropdown extends React.Component<MenuDropdownProps> {
  static displayName = "MenuDropdown"
  menu = React.createRef<HTMLDivElement>()

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

  handleDocumentClick = (e: MouseEvent) => {
    if (
      this.menu &&
      this.menu.current &&
      e.target instanceof Node &&
      !this.menu.current.contains(e.target)
    ) {
      this.props.hideMenuDropdown()
    }
  }

  handleDocumentResize = () => {
    this.props.hideMenuDropdown()
  }

  render(): JSX.Element {
    const {
      hideMenuDropdown,
      children,
      align = "left",
      width = "default",
    } = this.props

    return (
      <div
        className={classnames(styles.menuContainer, {
          [styles.defaultWidth]: width == "default",
          [styles.alignRight]: align == "right",
        })}
        ref={this.menu}
        onClick={() => hideMenuDropdown()}
      >
        {children}
      </div>
    )
  }
}
