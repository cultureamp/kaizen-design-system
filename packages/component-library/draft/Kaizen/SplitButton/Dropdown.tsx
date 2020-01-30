import { Icon } from "@kaizen/component-library"
import classnames from "classnames"
import * as React from "react"
import { SyntheticEvent } from "react"
import { Dir } from "./types"

const chevronDown = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const styles = require("./styles.scss")

type Variant = "default" | "primary"

type Props = {
  automationId?: string
  dir?: Dir
  dropdownAltText: string
  variant?: Variant
  onOpenDropdown: () => void
}

export default class Dropdown extends React.Component<Props> {
  static displayName = "Dropdown"
  static defaultProps = {
    dir: "ltr",
    variant: "default",
  }

  constructor(props: Props) {
    super(props)
  }

  toggleDropdownMenu = (e: SyntheticEvent<HTMLButtonElement>) => {
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
