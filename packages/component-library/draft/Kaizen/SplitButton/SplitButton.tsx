import classnames from "classnames"
import * as React from "react"
import Dropdown from "./Dropdown"
import { Dir } from "./types"
const styles = require("./styles.scss")

type AnchorCallback = (event: React.MouseEvent<HTMLAnchorElement>) => void
type ButtonCallback = (event: React.MouseEvent<HTMLButtonElement>) => void

type Variant = "default" | "primary"

export type SplitButtonProps = {
  automationId?: string
  label: string
  href?: string
  onClick?: AnchorCallback | ButtonCallback
  // Suggested components - MenuList > MenuItem
  dropdownContent?: React.ReactNode
  variant?: Variant
  dir?: Dir
  disabled?: boolean
  dropdownAltText: string // recommended text: "Open menu"
}

type SplitButton = React.FunctionComponent<SplitButtonProps>

const SplitButton: SplitButton = ({
  automationId,
  href,
  disabled,
  onClick,
  dropdownContent,
  label,
  dir = "ltr" as Dir,
  dropdownAltText,
  variant = "default",
}) => {
  // If the button has a route, it should be an `a` tag, since it is better
  // accessibility and routing. Otherwise, it should be a `button`.
  const btnProps = {
    className: classnames({
      [styles.default]: variant === "default",
      [styles.primary]: variant === "primary",
      [styles.disabled]: disabled,
    }),
    tabIndex: disabled ? -1 : 0,
    "data-automation-id": "split-button-button",
    disabled: disabled,
  }

  return (
    <div className={styles.root} dir={dir} data-automation-id={automationId}>
      {href ? (
        <a
          href={disabled ? undefined : href}
          onClick={disabled ? undefined : (onClick as AnchorCallback)}
          {...btnProps}
        >
          {label}
        </a>
      ) : (
        // @ts-ignore
        <button
          type="button"
          onClick={disabled ? undefined : (onClick as ButtonCallback)}
          {...btnProps}
        >
          {label}
        </button>
      )}
      <Dropdown
        automationId="split-button-dropdown"
        dir={dir}
        variant={variant}
        dropdownAltText={dropdownAltText}
      >
        {dropdownContent || null}
      </Dropdown>
    </div>
  )
}

export default SplitButton
