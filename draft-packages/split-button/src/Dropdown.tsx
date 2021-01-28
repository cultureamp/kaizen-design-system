import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import styles from "../styles/styles.scss"
import { Dir } from "./types"

type Variant = "default" | "primary"

export type DropdownProps = {
  automationId?: string
  dir?: Dir
  dropdownAltText: string
  variant?: Variant
  onOpenDropdown: () => void
}

class Dropdown extends React.Component<DropdownProps> {
  static displayName = "Dropdown"
  static defaultProps = {
    dir: "ltr",
    variant: "default",
  }

  constructor(props: DropdownProps) {
    super(props)
  }

  toggleDropdownMenu = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const { onOpenDropdown } = this.props
    onOpenDropdown()
  }

  render() {
    const { automationId, dropdownAltText, variant } = this.props
    return (
      <div className={styles.dropdown}>
        <button
          className={classnames({
            [styles.dropdownButtonDefault]: variant === "default",
            [styles.dropdownButtonPrimary]: variant === "primary",
          })}
          onClick={this.toggleDropdownMenu}
          onMouseDown={e => e.preventDefault()}
          data-automation-id={automationId}
        >
          <span className={styles.dropdownIcon}>
            <Icon icon={chevronDown} role="img" title={dropdownAltText} />
          </span>
        </button>
      </div>
    )
  }
}
export default Dropdown
