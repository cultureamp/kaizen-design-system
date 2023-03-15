import React, { forwardRef } from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { isRefObject } from "../../../utils/isRefObject"
import {
  FilterButtonBase,
  FilterButtonBaseProps,
} from "../components/FilterButtonBase"
import styles from "./FilterButton.module.scss"

export interface FilterButtonProps
  extends Omit<FilterButtonBaseProps, "children"> {
  label: string
  selectedValue?: string | JSX.Element
  isOpen?: boolean
}

export type FilterRef = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterButton = forwardRef<FilterRef, FilterButtonProps>(
  (
    { label, selectedValue, isOpen = false, classNameOverride, ...restProps },
    ref
  ) => {
    const customRefObject = isRefObject(ref) ? ref.current : null
    const triggerButtonRef = customRefObject?.triggerButtonRef
    const selectedValuesLabel = selectedValue
    return (
      <FilterButtonBase
        ref={triggerButtonRef}
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
      </FilterButtonBase>
    )
  }
)

FilterButton.displayName = "FilterButton"
