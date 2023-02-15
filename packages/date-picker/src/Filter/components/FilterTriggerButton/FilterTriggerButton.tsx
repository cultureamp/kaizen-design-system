import React, { forwardRef } from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import chevronUp from "@kaizen/component-library/icons/chevron-up.icon.svg"
import { isRefObject } from "../../../utils/isRefObject"
import { FilterRef } from "../../FilterSolution2Ref"
import { useFilterContext } from "../../context/useFilterContext"
import { useFilterContextSol3 } from "../../context/useFilterContextSol3"
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


export type FilterTriggerButtonContextWithFilterRefProps = Omit<
  FilterTriggerButtonProps,
  "label"
>

export const FilterTriggerButtonContextWithFilterRef = forwardRef<
  FilterRef,
  FilterTriggerButtonContextWithFilterRefProps
>(({ selectedValue, isOpen = false, classNameOverride, ...restProps }, ref) => {
  const customRefObject = isRefObject(ref) ? ref.current : null
  const triggerButtonRef = customRefObject?.triggerButtonRef

  // const { label, selectedValuesLabel } = useFilterContext()
  const { label } = useFilterContext()
  // Maybe we shouldn't check; would we ever receive an empty string?
  // Maybe we would want to show it to show something went wrong?
  // const hasSelectedValue = selectedValue && selectedValue !== ""

  const selectedValuesLabel = selectedValue

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

FilterTriggerButtonContextWithFilterRef.displayName = "FilterTriggerButtonContextWithFilterRef"

export type FilterTriggerButtonSol3Props = Omit<
  FilterTriggerButtonProps,
  "label" | "isOpen"
>

export const FilterTriggerButtonSol3 = forwardRef<
  HTMLButtonElement,
  FilterTriggerButtonSol3Props
>(({ selectedValue, classNameOverride, onClick, ...restProps }, ref) => {
  const { label, selectedValuesLabel, isOpen, setIsOpen } =
    useFilterContextSol3()
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
      onClick={(e): void => {
        setIsOpen(!isOpen)
        onClick?.(e)
      }}
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

FilterTriggerButtonSol3.displayName = "FilterTriggerButtonSol3"
