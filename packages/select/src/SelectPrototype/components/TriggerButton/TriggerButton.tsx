import React, { HTMLAttributes } from "react"
import { AriaButtonProps, useButton } from "@react-aria/button"
import { useFocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import { SelectState } from "@react-stately/select"
import { DOMAttributes, FocusableElement } from "@react-types/shared"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"

import { ItemType } from "../../types"
import styles from "./TriggerButton.module.scss"

export interface TriggerButtonProps
  extends OverrideClassName<HTMLAttributes<HTMLButtonElement>> {
  placeholder?: string
  triggerProps: AriaButtonProps<"button">
  valueProps: DOMAttributes<FocusableElement>
  buttonRef: React.RefObject<HTMLButtonElement>
  state: SelectState<ItemType>
}

export const TriggerButton: React.VFC<TriggerButtonProps> = ({
  placeholder,
  state,
  classNameOverride,
  triggerProps,
  buttonRef,
  valueProps,
}) => {
  const value = state?.selectedItem?.rendered
  const { buttonProps } = useButton(triggerProps, buttonRef)
  const { isFocusVisible, focusProps } = useFocusRing()

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
