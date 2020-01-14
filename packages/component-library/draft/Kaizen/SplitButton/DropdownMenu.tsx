import * as React from "react"
import { Dir } from "./types"
const styles = require("./styles.scss")

type Props = {
  children: React.ReactNode
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
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleDocumentClick, false)
    window.removeEventListener("resize", this.handleDocumentResize, false)
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
