import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import Dropdown from "./Dropdown"
import DropdownMenu from "./DropdownMenu"
import { Dir } from "./types"
import styles from "./styles.scss"

type AnchorCallback = (event: React.MouseEvent<HTMLAnchorElement>) => void
type ButtonCallback = (event: React.MouseEvent<HTMLButtonElement>) => void

type Variant = "default" | "primary"

export interface SplitButtonProps
  extends OverrideClassName<Omit<HTMLAttributes<HTMLDivElement>, "onClick">> {
  label: string
  href?: string
  onClick?: AnchorCallback | ButtonCallback
  // Suggested components - MenuList > MenuItem
  dropdownContent?: React.ReactNode
  variant?: Variant
  dir?: Dir
  disabled?: boolean
  dropdownAltText: string // recommended text: "Open menu"
  /**
   * **Deprecated:** Use test id compatible with your testing library (eg. `data-testid`).
   * @deprecated
   */
  automationId?: string
}

/**
 * @deprecated Draft SplitButton is deprecated. Use "@kaizen/split-button" instead.
 */
export const SplitButton: React.FunctionComponent<SplitButtonProps> = ({
  label,
  href,
  onClick,
  dropdownContent,
  variant = "default",
  dir = "ltr",
  disabled,
  dropdownAltText,
  automationId,
  classNameOverride,
  ...restProps
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
    disabled,
  }

  const dropdownButtonsContainerRef = React.useRef<HTMLDivElement>(null)

  const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(false)

  const toggleDropdownMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const getButtonsBoundingRect = () =>
    dropdownButtonsContainerRef.current
      ? dropdownButtonsContainerRef.current.getBoundingClientRect()
      : null

  return (
    <div
      className={classnames(styles.root, classNameOverride)}
      dir={dir}
      data-automation-id={automationId}
      {...restProps}
    >
      <div
        className={styles.buttonsContainer}
        ref={dropdownButtonsContainerRef}
      >
        {href ? (
          <a
            href={disabled ? undefined : href}
            onClick={disabled ? undefined : (onClick as AnchorCallback)}
            {...btnProps}
          >
            {label}
          </a>
        ) : (
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
          onOpenDropdown={toggleDropdownMenu}
        />
      </div>
      {isMenuVisible && (
        <DropdownMenu
          hideDropdownMenu={toggleDropdownMenu}
          dir={dir}
          buttonsBoundingRect={getButtonsBoundingRect()}
        >
          {dropdownContent}
        </DropdownMenu>
      )}
    </div>
  )
}
