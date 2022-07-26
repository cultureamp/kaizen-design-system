import React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { Icon } from "@kaizen/component-library"

import classNames from "classnames"
import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import styles from "./TriggerButtonBase.scss"

export type TriggerButtonBaseProps = {
  children: React.ReactNode
  ClassNameOverriden?: string
}

export const TriggerButtonBase: React.VFC<TriggerButtonBaseProps> = ({
  children,
  ClassNameOverriden,
}) => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={classNames(styles.button, ClassNameOverriden)}
    >
      <span>{children}</span>
      <Icon
        icon={menuTriggerState.isOpen ? chevronUp : chevronDown}
        role="presentation"
      />
    </button>
  )
}

TriggerButtonBase.displayName = "TriggerButtonBase"
