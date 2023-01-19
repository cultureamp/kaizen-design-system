import React, { forwardRef } from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { isRefObject } from "../../../utils/isRefObject"
import { FilterRef } from "../../FilterSolution2"
import { useFilterContext } from "../../context/useFilterContext"
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

export const FilterTriggerButtonWithFilterRef = forwardRef<
  FilterRef,
  FilterTriggerButtonProps
>(
  (
    { label, selectedValue, isOpen = false, classNameOverride, ...restProps },
    ref
  ) => {
    const customRefObject = isRefObject(ref) ? ref.current : null
    const triggerButtonRef = customRefObject?.triggerButtonRef
    const hasSelectedValue = selectedValue && selectedValue !== ""

    return (
      <FilterBaseButton
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

FilterTriggerButtonWithFilterRef.displayName =
  "FilterTriggerButtonWithFilterRef"

export type FilterTriggerButtonContextProps = Omit<
  FilterTriggerButtonProps,
  "label"
>

export const FilterTriggerButtonContext = forwardRef<
  HTMLButtonElement,
  FilterTriggerButtonContextProps
>(({ selectedValue, isOpen = false, classNameOverride, ...restProps }, ref) => {
  const { label, selectedValuesLabel } = useFilterContext()
  // Maybe we shouldn't check; would we ever receive an empty string?
  // Maybe we would want to show it to show something went wrong?
  // const hasSelectedValue = selectedValue && selectedValue !== ""

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
    </FilterBaseButton>
  )
})

FilterTriggerButtonContext.displayName = "FilterTriggerButtonContext"
