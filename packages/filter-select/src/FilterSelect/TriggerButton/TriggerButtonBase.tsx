import React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import clear from "@kaizen/component-library/icons/clear.icon.svg"

import { useMenuTriggerContext } from "../provider/MenuTriggerProvider"
import styles from "./TriggerButton.scss"

export interface TriggerButtonBaseProps {
  children: React.ReactNode
  isRemovalbe?: boolean
  onRemove?: () => void
  hasSelectedValues?: boolean
}
export const TriggerButtonBase = ({
  children,
  isRemovalbe = false,
  hasSelectedValues = false,
}: TriggerButtonBaseProps) => {
  const { buttonProps, buttonRef, menuTiggerState } = useMenuTriggerContext()

  const buttonStyle = classNames(
    styles.button,
    hasSelectedValues ? styles.hasSelectedValues : "",
    menuTiggerState.isOpen ? styles.isOpen : ""
  )

  return (
    <div className={styles.trigger}>
      <button {...buttonProps} ref={buttonRef} className={buttonStyle}>
        <span>{children}</span>
        {(!isRemovalbe || (isRemovalbe && !hasSelectedValues)) && (
          <span className={styles.iconWrapper}>
            <Icon icon={chevronDown} role="presentation" />
          </span>
        )}
      </button>
      {isRemovalbe && hasSelectedValues && (
        <button
          className={classNames(buttonStyle, styles.removeButton)}
          aria-label="remove filter"
        >
          <Icon icon={clear} title={"remove filter"} />
        </button>
      )}
    </div>
  )
}
