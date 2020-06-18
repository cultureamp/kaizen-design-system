import * as React from "react"
// TODO: get this from @kaizen/draft-button once published version offers ButtonProps
import { Button, ButtonProps } from "../../../button"
import MenuDropdown from "./MenuDropdown"

const styles = require("./styles.scss")

type MenuState = {
  isMenuVisible: boolean
}

export type MenuProps = {
  button: React.ReactElement<ButtonProps>
  menuVisible?: boolean
  automationId?: string
}

export default class Menu extends React.Component<MenuProps, MenuState> {
  static displayName = "Menu"
  static defaultProps = {
    iconPosition: "start",
  }

  dropdownButtonContainer = React.createRef<HTMLDivElement>()

  constructor(props: MenuProps) {
    super(props)

    this.state = {
      isMenuVisible: Boolean(props.menuVisible),
    }
  }

  toggleMenu = (e: MouseEvent) => {
    e.stopPropagation()

    const currentState = this.state.isMenuVisible
    this.setState({
      isMenuVisible: !currentState,
    })
  }

  hideMenu = () => {
    this.setState({
      isMenuVisible: false,
    })
  }

  getPosition() {
    return this.dropdownButtonContainer && this.dropdownButtonContainer.current
      ? this.dropdownButtonContainer.current.getBoundingClientRect()
      : null
  }

  renderMenuDropdown() {
    return (
      <MenuDropdown
        hideMenuDropdown={this.hideMenu}
        position={this.getPosition()}
      >
        {this.props.children}
      </MenuDropdown>
    )
  }

  render() {
    const { automationId, button } = this.props
    return (
      <div
        className={styles.dropdown}
        data-automation-id={automationId}
        ref={this.dropdownButtonContainer}
      >
        {React.cloneElement(button, {
          onClick: this.toggleMenu,
          onMouseDown: e => e.preventDefault(),
        })}
        {this.state.isMenuVisible && this.renderMenuDropdown()}
      </div>
    )
  }
}
