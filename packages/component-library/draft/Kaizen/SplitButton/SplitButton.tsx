import classnames from "classnames"
import * as React from "react"
import Dropdown from "./Dropdown"
import { Dir } from "./types"
const styles = require("./styles.scss")

type AnchorCallback = (event: React.MouseEvent<HTMLAnchorElement>) => void
type ButtonCallback = (event: React.MouseEvent<HTMLButtonElement>) => void

export type SplitButtonProps = {
  automationId?: string
  label: string
  href?: string
  onClick?: AnchorCallback | ButtonCallback
  // Suggested components - MenuList > MenuItem
  dropdownContent?: React.ReactNode
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
}) => {
  // If the button has a route, it should be an `a` tag, since it is better
  // accessibility and routing. Otherwise, it should be a `button`.
  const btnProps = {
    // tslint:disable-next-line: object-literal-key-quotes
    className: classnames({
      [styles.button]: true,
      [styles.disabled]: disabled,
    }),
    // tslint:disable-next-line: object-literal-key-quotes
    tabIndex: disabled ? -1 : 0,
    "data-automation-id": "split-button-button",
    disabled,
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
        dropdownAltText={dropdownAltText}
      >
        {dropdownContent || null}
      </Dropdown>
    </div>
  )
}

export default SplitButton
