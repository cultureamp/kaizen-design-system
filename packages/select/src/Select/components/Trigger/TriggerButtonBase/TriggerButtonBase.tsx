import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"

import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import styles from "./TriggerButtonBase.module.scss"

export interface TriggerButtonBaseProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

export const TriggerButtonBase: React.VFC<TriggerButtonBaseProps> = ({
  children,
  classNameOverride,
}) => {
  const { buttonProps, buttonRef, menuTriggerState, isFullWidth } =
    useMenuTriggerContext()

  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <>
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={buttonRef}
        className={classNames([
          styles.button,
          isFullWidth && styles.fullWidth,
          classNameOverride,
          isFocusVisible && styles.isFocusVisible,
        ])}
      >
        {children}
        <Icon
          icon={menuTriggerState.isOpen ? chevronUp : chevronDown}
          role="presentation"
          classNameOverride={styles.icon}
        />
      </button>
    </>
  )
}

TriggerButtonBase.displayName = "TriggerButtonBase"
