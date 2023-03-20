import React, { forwardRef } from "react"
import { Icon } from "@components/Icon"
import chevronDown from "@icons/chevron-down.icon.svg"
import chevronUp from "@icons/chevron-up.icon.svg"
import classnames from "classnames"
import { FilterBaseButton, FilterBaseButtonProps } from "../FilterBaseButton"
import styles from "./FilterTriggerButton.module.scss"

export interface FilterTriggerButtonProps
  extends Omit<FilterBaseButtonProps, "children"> {
  label: string
  selectedValue?: string | JSX.Element
  isOpen?: boolean
}

export const FilterTriggerButton = forwardRef<
  HTMLButtonElement,
  FilterTriggerButtonProps
>(
  (
    { label, selectedValue, isOpen = false, classNameOverride, ...restProps },
    ref
  ) => {
    const hasSelectedValue = selectedValue && selectedValue !== ""

    return (
      <FilterBaseButton
        ref={ref}
        classNameOverride={classnames(
          styles.filterTriggerButton,
          classNameOverride
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
        {...restProps}
      >
        <span className={styles.labelContainer}>
          {hasSelectedValue ? (
            <>
              <span className={styles.hasSelectedValues}>
                <span>{label}</span>
                <span className={styles.labelSeparator}>:</span>
              </span>
              <span>{selectedValue}</span>
            </>
          ) : (
            label
          )}
        </span>
        <Icon icon={isOpen ? chevronUp : chevronDown} role="presentation" />
      </FilterBaseButton>
    )
  }
)

FilterTriggerButton.displayName = "FilterTriggerButton"
