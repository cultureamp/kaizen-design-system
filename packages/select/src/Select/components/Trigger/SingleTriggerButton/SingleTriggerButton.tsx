import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { useMenuTriggerContext } from "../../../provider/MenuTriggerProvider"
import { RootProps } from "../../Root"

import styles from "./SingleTriggerButton.module.scss"

export interface SingleTriggerButtonProps
  extends OverrideClassName<HTMLAttributes<HTMLButtonElement>> {
  placeholder: string
  selectedOptionLabel: RootProps["selectedKey"]
}

export const SingleTriggerButton: React.VFC<SingleTriggerButtonProps> = ({
  selectedOptionLabel,
  classNameOverride,
  placeholder,
}) => {
  const { buttonProps, buttonRef, menuTriggerState, isFullWidth } =
    useMenuTriggerContext()

  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={buttonRef}
      className={classnames([
        styles.button,
        isFullWidth && styles.fullWidth,
        selectedOptionLabel === null && styles.placeholder,
        isFocusVisible && styles.isFocusVisible,
        classNameOverride,
      ])}
    >
      <span>{selectedOptionLabel ?? placeholder}</span>
      <Icon
        icon={menuTriggerState.isOpen ? chevronUp : chevronDown}
        role="presentation"
        classNameOverride={styles.icon}
      />
    </button>
  )
}

SingleTriggerButton.displayName = "SingleTriggerButton"
