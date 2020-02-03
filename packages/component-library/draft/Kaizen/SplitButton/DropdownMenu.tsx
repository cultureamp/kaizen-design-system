import * as React from "react"
import { Dir } from "./types"
const styles = require("./styles.scss")

type Props = {
  children: React.ReactNode
  position: {
    top: number
    bottom: number
    left: number
    right: number
  } | null
  hideDropdownMenu: () => void
  dir?: Dir
}

export default class DropdownMenu extends React.Component<Props> {
  static displayName = "DropdownMenu"
  static defaultProps = {
    dir: "ltr",
  }
  menu: HTMLDivElement | null = null

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
    const pos = this.props.position
    const { innerHeight } = window
    const rect = menu.getBoundingClientRect()

    if (pos.bottom > innerHeight - rect.height) {
      const bottom = rect.height + 40
      menu.style.bottom = `${bottom}px`
      menu.style.top = "auto"
    } else {
      menu.style.top = "-2px" // This is to hide the border of the buttonsContainer class
      menu.style.bottom = "auto"
    }
    if (this.props.dir === "rtl") {
      menu.style.left = "0px"
    } else {
      menu.style.right = "0px"
    }
  }

  handleDocumentClick = (e: MouseEvent) => {
    if (
      this.menu &&
      e.target instanceof Node &&
      !this.menu.contains(e.target)
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
        ref={m => (this.menu = m)}
        onClick={() => props.hideDropdownMenu()}
      >
        {props.children}
      </div>
    )
  }
}
