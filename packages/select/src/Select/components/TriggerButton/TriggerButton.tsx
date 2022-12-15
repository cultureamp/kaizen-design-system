import React, { HTMLAttributes } from "react"
import { AriaButtonProps, useButton } from "@react-aria/button"
import { useFocusRing } from "@react-aria/focus"
import { mergeProps, useObjectRef } from "@react-aria/utils"
import { DOMAttributes, FocusableElement } from "@react-types/shared"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { useSelectContext } from "../../context"
import styles from "./TriggerButton.module.scss"

export type TriggerButtonProps = OverrideClassName<
  HTMLAttributes<HTMLButtonElement>
> & {
  placeholder?: string
  triggerProps: AriaButtonProps<"button">
  valueProps: DOMAttributes<FocusableElement>
  status?: "error" | "caution"
}

export const TriggerButton = React.forwardRef<
  HTMLButtonElement,
  TriggerButtonProps
>(
  (
    {
      placeholder = "Select",
      classNameOverride,
      triggerProps,
      valueProps,
      status,
    },
    buttonRef
  ) => {
    const { state } = useSelectContext()
    const value = state?.selectedItem?.rendered
    const ref = useObjectRef(buttonRef)
    const { buttonProps } = useButton(triggerProps, ref)
    const { isFocusVisible, focusProps } = useFocusRing()

    return (
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={classnames([
          styles.button,
          (value === null || value === undefined) && styles.placeholder,
          isFocusVisible && styles.isFocusVisible,
          status === "error" && styles.error,
          status === "caution" && styles.caution,
          classNameOverride,
        ])}
        disabled={triggerProps.isDisabled}
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
)

TriggerButton.displayName = "TriggerButton"
