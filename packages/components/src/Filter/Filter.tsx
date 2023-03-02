import React, { HTMLAttributes, useRef } from "react"
import classnames from "classnames"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "@kaizen/component-base"
import { FilterPopover } from "./components/FilterPopover"
import {
  FilterRef,
  FilterTriggerButtonProps,
} from "./components/FilterTriggerButton"
import styles from "./Filter.module.scss"

export interface FilterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  filterButton: (
    triggerButtonProps: Partial<FilterTriggerButtonProps>
  ) => JSX.Element & { ref?: React.RefObject<FilterRef> }
}

export const Filter = ({
  children,
  isOpen,
  setIsOpen,
  filterButton,
  classNameOverride,
  ...restProps
}: FilterProps): JSX.Element => {
  const filterButtonComponent = filterButton({
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
  const inbuiltRef = useRef<FilterRef>({
    triggerButtonRef: inbuiltButtonRef,
  })
  const filterButtonRef = filterButtonComponent.ref ?? inbuiltRef

  return (
    <div
      className={classnames(styles.filter, classNameOverride)}
      {...restProps}
    >
      {React.cloneElement(filterButtonComponent, {
        ref: filterButtonRef,
      })}
      {isOpen && (
        <FocusOn
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
        >
          <FilterPopover
            referenceElement={
              filterButtonRef.current?.triggerButtonRef?.current || null
            }
          >
            {children}
          </FilterPopover>
        </FocusOn>
      )}
    </div>
  )
}

Filter.displayName = "Filter"
