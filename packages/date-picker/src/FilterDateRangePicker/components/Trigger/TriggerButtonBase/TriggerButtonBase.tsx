import React, { ButtonHTMLAttributes, forwardRef } from "react"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import styles from "./TriggerButtonBase.module.scss"

export interface TriggerButtonBaseProps
  extends OverrideClassName<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: React.ReactNode
  isOpen?: boolean
}

export const TriggerButtonBase = forwardRef<
  HTMLButtonElement,
  TriggerButtonBaseProps
>(({ children, classNameOverride, isOpen = false, ...restProps }, ref) => (
  <button
    ref={ref}
    className={classNames(styles.button, classNameOverride)}
    aria-haspopup="true"
    aria-expanded={isOpen}
    {...restProps}
  >
    {children}
    <Icon
      icon={isOpen ? chevronUp : chevronDown}
      role="presentation"
      classNameOverride={styles.icon}
    />
  </button>
))

TriggerButtonBase.displayName = "TriggerButtonBase"
