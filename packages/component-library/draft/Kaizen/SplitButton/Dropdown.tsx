import { Icon } from "@cultureamp/kaizen-component-library"
import classnames from "classnames"
import * as React from "react"
import { SyntheticEvent } from "react"
import DropdownMenu from "./DropdownMenu"
import { Dir } from "./types"

const chevronDown = require("@cultureamp/kaizen-component-library/icons/chevron-down.icon.svg")
  .default
const styles = require("./styles.scss")

type Props = {
  children: React.ReactNode
  menuVisible?: boolean
  automationId?: string
  dir?: Dir
  dropdownAltText: string
  primary?: boolean
}

type State = {
  isMenuVisible: boolean
}

export default class Dropdown extends React.Component<Props, State> {
  static displayName = "Dropdown"
  static defaultProps = {
    dir: "ltr",
    primary: false,
  }
  dropdownButton: HTMLButtonElement | null = null

  constructor(props: Props) {
    super(props)

    this.state = {
      isMenuVisible: Boolean(props.menuVisible),
    }
  }

  toggleDropdownMenu = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const currentState = this.state.isMenuVisible
    this.setState({
      isMenuVisible: !currentState,
    })
  }

  hideDropdownMenu = () => {
    this.setState({
      isMenuVisible: false,
    })
  }

  getPosition() {
    return this.dropdownButton
      ? this.dropdownButton.getBoundingClientRect()
      : null
  }

  renderDropdownMenu() {
    const { dir } = this.props
    return (
      <DropdownMenu
        hideDropdownMenu={this.hideDropdownMenu}
        position={this.getPosition()}
        dir={dir}
      >
        {this.props.children}
      </DropdownMenu>
    )
  }

  render() {
    const { automationId, dropdownAltText, primary } = this.props
    return (
      <div className={styles.dropdown}>
        <button
          className={classnames({
            [styles.dropdownButtonDefault]: true,
            [styles.dropdownButtonPrimary]: primary,
          })}
          onClick={this.toggleDropdownMenu}
          onMouseDown={e => e.preventDefault()}
          ref={k => (this.dropdownButton = k)}
          data-automation-id={automationId}
        >
          <span className={styles.dropdownIcon}>
            <Icon icon={chevronDown} role="img" title={dropdownAltText} />
          </span>
        </button>
        {this.state.isMenuVisible && this.renderDropdownMenu()}
      </div>
    )
  }
}
