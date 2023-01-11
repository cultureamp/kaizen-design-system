import React, { HTMLAttributes } from "react"
import { useObjectRef } from "@react-aria/utils"
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
  valueProps: DOMAttributes<FocusableElement>
  status?: "error" | "caution"
  isOpen?: boolean
  isDisabled?: boolean
}

export const TriggerButton = React.forwardRef<
  HTMLButtonElement,
  TriggerButtonProps
>(
  (
    {
      placeholder = "Select",
      classNameOverride,
      valueProps,
      status,
      isDisabled,
      isOpen,
      ...restProps
    },
    buttonRef
  ) => {
    const { state } = useSelectContext()
    const value = state?.selectedItem?.rendered
    const ref = useObjectRef(buttonRef)

    return (
      <button
        ref={ref}
        className={classnames([
          styles.button,
          (value === null || value === undefined) && styles.placeholder,
          status === "error" && styles.error,
          status === "caution" && styles.caution,
          isDisabled && styles.disabled,
          classNameOverride,
        ])}
        aria-haspopup="true"
        aria-expanded={isOpen}
        disabled={isDisabled}
        {...restProps}
      >
        <span {...valueProps} className={styles.value}>
          {value ?? placeholder}
        </span>
        <Icon
          icon={isOpen ? chevronUp : chevronDown}
          role="presentation"
          classNameOverride={styles.icon}
        />
      </button>
    )
  }
)

TriggerButton.displayName = "TriggerButton"
