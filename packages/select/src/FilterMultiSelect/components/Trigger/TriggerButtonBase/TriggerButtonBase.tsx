import React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { Icon } from "@kaizen/component-library"

import classNames from "classnames"
import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import styles from "./TriggerButtonBase.module.scss"

export type TriggerButtonBaseProps = {
  children: React.ReactNode
  classNameOverride?: string // TODO: migrate it to use OverrideClassName<T> and omit the props controlled by React-Aria
}

export const TriggerButtonBase: React.VFC<TriggerButtonBaseProps> = ({
  children,
  classNameOverride,
}) => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={classNames(styles.button, classNameOverride)}
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
