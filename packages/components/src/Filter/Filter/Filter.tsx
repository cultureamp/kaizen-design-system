import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "../../types"
import { FilterRef, FilterButtonProps } from "../FilterButton"
import { FilterPopover } from "./components/FilterPopover"

export interface FilterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  filterButton: (
    triggerButtonProps: Partial<FilterButtonProps>
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
  const [isRefLoaded, setIsRefLoaded] = useState<boolean>(false)

  const filterButtonComponent = filterButton({
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
  const inbuiltRef = useRef<FilterRef>({
    triggerButtonRef: inbuiltButtonRef,
  })
  const filterButtonRef = filterButtonComponent.ref ?? inbuiltRef

  useEffect(() => {
    if (filterButtonRef.current?.triggerButtonRef?.current) {
      setIsRefLoaded(true)
    }
  }, [filterButtonRef.current?.triggerButtonRef?.current])

  return (
    <div className={classNameOverride} {...restProps}>
      {React.cloneElement(filterButtonComponent, {
        ref: filterButtonRef,
      })}
      {isRefLoaded && isOpen && (
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
