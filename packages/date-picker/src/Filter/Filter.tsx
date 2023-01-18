import React, { HTMLAttributes, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { isRefObject } from "../utils/isRefObject"
import { FilterPopover } from "./components/FilterPopover"
import styles from "./Filter.module.scss"

export interface FilterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  filterButton: React.ReactElement
}

export const FilterWithRef = React.forwardRef<HTMLButtonElement, FilterProps>(({
  children,
  filterButton,
  classNameOverride,
  ...restProps
}, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className={classnames(
        styles.filterDateRangePickerContainer,
        classNameOverride
      )}
      {...restProps}
    >
      {React.cloneElement(filterButton, {
        // ref,
        ref: filterButton.ref ?? ref,
        onClick: () => setIsOpen(!isOpen),
        isOpen,
        ...filterButton.props,
      })}
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FilterPopover
            referenceElement={ref.current}
            // Does the popper need this or just the contents?
            // aria-label={label}
          >
            {children}
          </FilterPopover>
        </FocusOn>
      )}
    </div>
  )
})

FilterWithRef.displayName = "FilterWithRef"

export type FilterRef = {
  triggerButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterWithForcedShapeRef = React.forwardRef<FilterRef, FilterProps>(({
  children,
  filterButton,
  classNameOverride,
  ...restProps
}, ref) => {
  const customRefObject = isRefObject(ref) ? ref.current : null
  const triggerButtonRef = customRefObject?.triggerButtonRef
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className={classnames(
        styles.filterDateRangePickerContainer,
        classNameOverride
      )}
      {...restProps}
    >
      {React.cloneElement(filterButton, {
        ref,
        onClick: () => setIsOpen(!isOpen),
        isOpen,
        ...filterButton.props,
      })}
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FilterPopover
            referenceElement={triggerButtonRef?.current || null}
            // Does the popper need this or just the contents?
            // aria-label={label}
          >
            {children}
          </FilterPopover>
        </FocusOn>
      )}
    </div>
  )
})

FilterWithForcedShapeRef.displayName = "FilterWithForcedShapeRef"

export const FilterConsumerRef = React.forwardRef<HTMLButtonElement, FilterProps>(({
  children,
  filterButton,
  classNameOverride,
  ...restProps
}, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div
      className={classnames(
        styles.filterDateRangePickerContainer,
        classNameOverride
      )}
      {...restProps}
    >
      {React.cloneElement(filterButton, {
        onClick: () => setIsOpen(!isOpen),
        isOpen,
        ...filterButton.props,
      })}
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FilterPopover
            referenceElement={ref.current}
            // Does the popper need this or just the contents?
            // aria-label={label}
          >
            {children}
          </FilterPopover>
        </FocusOn>
      )}
    </div>
  )
})

FilterConsumerRef.displayName = "FilterConsumerRef"
