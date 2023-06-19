import React, { HTMLAttributes } from "react"
import { AriaButtonProps, useButton } from "@react-aria/button"
import { mergeProps, useObjectRef } from "@react-aria/utils"
import { DOMAttributes, FocusableElement } from "@react-types/shared"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { useSelectContext } from "../../context"
import styles from "./TriggerButton.module.scss"
export interface TriggerButtonProps
  extends OverrideClassName<HTMLAttributes<HTMLButtonElement>> {
  placeholder?: string
  /**
   * Use the `reversed` styles.
   */
  isReversed?: boolean
  /** Props for the popup trigger element. */
  triggerProps: AriaButtonProps<"button">
  /** Props for the element representing the selected value. */
  valueProps: DOMAttributes<FocusableElement>
  /**
   * Updates the styling of the validation.
   */
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
      isReversed,
      triggerProps,
      valueProps,
      status,
      ...restProps
    },
    buttonRef
  ) => {
    const { state } = useSelectContext()
    const value = state?.selectedItem?.rendered
    const ref = useObjectRef(buttonRef)
    const { buttonProps } = useButton(triggerProps, ref)

    return (
      <button
        type="button"
        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        role="combobox"
        {...mergeProps(buttonProps, restProps)}
        ref={ref}
        className={classnames(
          styles.button,
          (value === null || value === undefined) && styles.placeholder,
          status === "error" && styles.error,
          status === "caution" && styles.caution,
          triggerProps.isDisabled && styles.disabled,
          isReversed && styles.reversed,
          classNameOverride
        )}
      >
        <span {...valueProps} className={styles.value}>
          {value ?? placeholder}
        </span>
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
