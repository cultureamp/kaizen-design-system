import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import { SelectProps } from "@react-stately/select"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { useSelectContext } from "../../provider/SelectProvider"
import styles from "./TriggerButton.module.scss"

export interface TriggerButtonProps
  extends OverrideClassName<HTMLAttributes<HTMLButtonElement>> {
  placeholder: string
}

export const TriggerButton: React.VFC<TriggerButtonProps> = ({
  classNameOverride,
  placeholder,
}) => {
  const { buttonProps, buttonRef, state, valueProps } = useSelectContext()
  const { isFocusVisible, focusProps } = useFocusRing()
  const value = state?.selectedItem?.rendered

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={buttonRef}
      className={classnames([
        styles.button,
        value === null && styles.placeholder,
        isFocusVisible && styles.isFocusVisible,
        classNameOverride,
      ])}
    >
      <span {...valueProps}>{value ?? placeholder}</span>
      <Icon
        icon={state.isOpen ? chevronUp : chevronDown}
        role="presentation"
        classNameOverride={styles.icon}
      />
    </button>
  )
}

TriggerButton.displayName = "TriggerButton"
