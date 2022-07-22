import React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { Icon } from "@kaizen/component-library"
import classNames from "classnames"

import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import styles from "./TriggerButtonBase.scss"

export type TriggerButtonBaseProps = {
  children: React.ReactNode
  hasSelectedValues?: boolean
}

export const TriggerButtonBase: React.VFC<TriggerButtonBaseProps> = ({
  children,
  hasSelectedValues = false,
}) => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()

  const buttonStyle = classNames(
    styles.button,
    hasSelectedValues ? styles.hasSelectedValues : "",
    menuTriggerState.isOpen ? styles.isOpen : ""
  )

  return (
    <button {...buttonProps} ref={buttonRef} className={buttonStyle}>
      <span>{children}</span>
      <span className={styles.iconWrapper}>
        <Icon icon={chevronDown} role="presentation" />
      </span>
    </button>
  )
}

TriggerButtonBase.displayName = "TriggerButtonBase"
