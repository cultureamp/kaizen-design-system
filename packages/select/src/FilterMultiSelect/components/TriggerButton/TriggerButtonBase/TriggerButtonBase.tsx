import React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { Icon } from "@kaizen/component-library"
import classNames from "classnames"
import clear from "@kaizen/component-library/icons/clear.icon.svg"

import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import styles from "./TriggerButtonBase.scss"

interface RemovableProps {
  isRemovable: true
  onRemove: () => void
}

interface RemovableUndefinedProps {
  isRemovable?: false
  onRemove?: never
}

export type OptionalRemovable = RemovableProps | RemovableUndefinedProps

export type TriggerButtonBaseProps = {
  label: string
  children: React.ReactNode
  hasSelectedValues?: boolean
} & OptionalRemovable

// TODO: do we want to make it a components rather than subcomponents?
export const TriggerButtonBase: React.VFC<TriggerButtonBaseProps> = ({
  label,
  children,
  isRemovable,
  hasSelectedValues = false,
  onRemove,
}) => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()

  const buttonStyle = classNames(
    styles.button,
    hasSelectedValues ? styles.hasSelectedValues : "",
    menuTriggerState.isOpen ? styles.isOpen : ""
  )

  return (
    <div className={styles.trigger}>
      <button {...buttonProps} ref={buttonRef} className={buttonStyle}>
        <span>{children}</span>
        {(!isRemovable || (isRemovable && !hasSelectedValues)) && (
          <span className={styles.iconWrapper}>
            <Icon icon={chevronDown} role="presentation" />
          </span>
        )}
      </button>
      {isRemovable && hasSelectedValues && (
        <button
          className={classNames(buttonStyle, styles.removeButton)}
          aria-label={`Remove ${label} filter`}
          onClick={() => onRemove()}
        >
          <Icon icon={clear} role="presentation" />
        </button>
      )}
    </div>
  )
}

TriggerButtonBase.displayName = "TriggerButtonBase"
