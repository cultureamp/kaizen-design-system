import React, { forwardRef } from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { isRefObject } from "../../utils/isRefObject"
import { FilterButton, FilterButtonProps } from "../_primitives/FilterButton"
import styles from "./FilterTriggerButton.module.scss"

export interface FilterTriggerButtonProps
  extends Omit<FilterButtonProps, "children"> {
  label: string
  selectedValue?: string | JSX.Element
  isOpen?: boolean
}

export type FilterRef = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterTriggerButton = forwardRef<
  // FilterRef,
  HTMLButtonElement,
  FilterTriggerButtonProps
>(
  (
    { label, selectedValue, isOpen = false, classNameOverride, ...restProps },
    ref
  ) => {
    // const customRefObject = isRefObject(ref) ? ref.current : null
    // const triggerButtonRef = customRefObject.triggerButtonRef
    const selectedValuesLabel = selectedValue

    return (
      <FilterButton
        // ref={triggerButtonRef}
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
      </FilterButton>
    )
  }
)

FilterTriggerButton.displayName = "FilterTriggerButton"
