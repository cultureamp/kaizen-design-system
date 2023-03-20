import React, { forwardRef } from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import { FilterTriggerRef } from "../../Filter/types"
import {
  FilterButtonBase,
  FilterButtonBaseProps,
} from "../components/FilterButtonBase"
import styles from "./FilterButton.module.scss"
import chevronDown from "~icons/chevron-down.icon.svg"
import chevronUp from "~icons/chevron-up.icon.svg"
import { isRefObject } from "~utils/isRefObject"

export interface FilterButtonProps
  extends Omit<FilterButtonBaseProps, "children"> {
  label: string
  selectedValue?: string | JSX.Element
  isOpen?: boolean
}

export const FilterButton = forwardRef<FilterTriggerRef, FilterButtonProps>(
  (
    { label, selectedValue, isOpen = false, classNameOverride, ...restProps },
    ref
  ) => {
    const customRefObject = isRefObject(ref) ? ref.current : null
    const triggerRef = customRefObject?.triggerRef
    const selectedValuesLabel = selectedValue
    return (
      <FilterButtonBase
        ref={triggerRef}
        classNameOverride={classnames(styles.filterButton, classNameOverride)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        {...restProps}
      >
        <span className={styles.labelContainer}>
          {selectedValuesLabel ? (
            <>
              <span className={styles.hasSelectedValues}>
                <span>{label}</span>
                <span className={styles.labelSeparator}>:</span>
              </span>
              <span>{selectedValuesLabel}</span>
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

FilterButton.displayName = "FilterButton"
