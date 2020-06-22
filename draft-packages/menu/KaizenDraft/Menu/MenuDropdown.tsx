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

      if (pos.bottom > innerHeight - rect.height) {
        menu.current.style.bottom = "24px"
        menu.current.style.top = "auto"
      } else {
        menu.current.style.top = "24px"
        menu.current.style.bottom = "auto"
      }
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
    const { hideMenuDropdown, children } = this.props

    return (
      <div
        className={styles.menuContainer}
        ref={this.menu}
        onClick={() => hideMenuDropdown()}
      >
        {children}
      </div>
    )
  }
}
