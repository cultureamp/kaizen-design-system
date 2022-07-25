import React from "react"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { Icon } from "@kaizen/component-library"

import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import styles from "./TriggerButtonBase.scss"

export type TriggerButtonBaseProps = {
  children: React.ReactNode
}

export const TriggerButtonBase: React.VFC<TriggerButtonBaseProps> = ({
  children,
}) => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()

  return (
    <button {...buttonProps} ref={buttonRef} className={styles.button}>
      <span>{children}</span>
      <Icon
        icon={menuTriggerState.isOpen ? chevronUp : chevronDown}
        role="presentation"
      />
    </button>
  )
}

TriggerButtonBase.displayName = "TriggerButtonBase"
