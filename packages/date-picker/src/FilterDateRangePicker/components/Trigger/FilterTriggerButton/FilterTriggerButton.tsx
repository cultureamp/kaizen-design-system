import React, { forwardRef } from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { FilterButtonBase, FilterButtonBaseProps } from "../FilterButtonBase"
import styles from "./FilterTriggerButton.module.scss"

export interface FilterTriggerButtonProps
  extends Omit<FilterButtonBaseProps, "children"> {
  label: string
  selectedValue?: string
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
      <FilterButtonBase
        ref={ref}
        classNameOverride={classnames(
          styles.filterTriggerButton,
          classNameOverride
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
        {...restProps}
      >
        <span>
          {hasSelectedValue ? (
            <>
              <span className={styles.hasSelectedValues}>{label}:&nbsp;</span>
              <span>{selectedValue}</span>
            </>
          ) : (
            label
          )}
        </span>
        <Icon icon={isOpen ? chevronUp : chevronDown} role="presentation" />
      </FilterButtonBase>
    )
  }
)

FilterTriggerButton.displayName = "FilterTriggerButton"
