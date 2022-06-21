import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { Dir } from "./types"

import styles from "./styles.scss"

type Variant = "default" | "primary"

export type DropdownProps = {
  automationId?: string
  dir?: Dir
  dropdownAltText: string
  variant?: Variant
  onOpenDropdown: () => void
}

/**
 * @deprecated Draft SplitButton/Dropdown is deprecated.
 */
class Dropdown extends React.Component<DropdownProps> {
  constructor(props: DropdownProps) {
    super(props)
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

  toggleDropdownMenu = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const { onOpenDropdown } = this.props
    onOpenDropdown()
  }

  static displayName = "Dropdown"
  static defaultProps = {
    dir: "ltr",
    variant: "default",
  }
}
export default Dropdown
