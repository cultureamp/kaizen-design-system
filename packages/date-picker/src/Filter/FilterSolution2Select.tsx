import React, { forwardRef, HTMLAttributes, useRef, useState } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { isRefObject } from "../utils/isRefObject"
import { FilterPopover } from "./components/FilterPopover"
import styles from "./Filter.module.scss"

export interface FilterSolution2SelectProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  // This ensures `ref` exists
  // The `any` can probably be scoped better
  filterButton: React.FunctionComponentElement<any>
}

export const FilterSolution2Select = React.forwardRef<HTMLButtonElement, FilterSolution2SelectProps>(
  ({ children, filterButton, classNameOverride, ...restProps }, ref) => {
    // If the consumer uses the legacy `createRef`, it will not work
    const consumerRef = isRefObject(ref) ? ref : null
    const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <div
        className={classnames(
          styles.filter,
          classNameOverride
        )}
        {...restProps}
      >
        {React.cloneElement(filterButton, {
          ref: filterButton.ref ?? consumerRef ?? inbuiltButtonRef,
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
              referenceElement={consumerRef?.current ?? inbuiltButtonRef.current}
              // Does the popper need this or just the contents?
              // aria-label={label}
            >
              {children}
            </FilterPopover>
          </FocusOn>
        )}
      </div>
    )
  }
)
FilterSolution2Select.displayName = "FilterSolution2Select"
