import React from "react"
import classNames from "classnames"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"

import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import styles from "./TriggerButtonBase.module.scss"

export type TriggerButtonBaseProps = {
  children: React.ReactNode
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
}

export const TriggerButtonBase = ({
  children,
  classNameOverride,
}: TriggerButtonBaseProps): JSX.Element => {
  const { buttonProps, buttonRef, menuTriggerState, isReversed } =
    useMenuTriggerContext()

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={classNames([
        styles.button,
        isReversed && styles.reversed,
        classNameOverride,
      ])}
    >
      {children}

      <Icon
        icon={menuTriggerState.isOpen ? chevronUp : chevronDown}
        role="presentation"
        classNameOverride={styles.icon}
      />
    </button>
  )
}

TriggerButtonBase.displayName = "TriggerButtonBase"
