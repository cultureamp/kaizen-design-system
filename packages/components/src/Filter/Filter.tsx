import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "~types/OverrideClassName"
import { FilterPopover } from "./components/FilterPopover"
import { FilterTriggerRef } from "./types"

export interface FilterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  renderTrigger: (triggerProps: {
    onClick: () => void
    isOpen: boolean
  }) => JSX.Element & { ref?: React.RefObject<FilterTriggerRef> }
  onTriggerLoaded?: (triggerRef: React.RefObject<HTMLButtonElement>) => void
}

export const Filter = ({
  children,
  isOpen,
  setIsOpen,
  renderTrigger,
  classNameOverride,
  onTriggerLoaded,
  ...restProps
}: FilterProps): JSX.Element => {
  const [isRefLoaded, setIsRefLoaded] = useState<boolean>(false)

  const trigger = renderTrigger({
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
  const inbuiltRef = useRef<FilterTriggerRef>({
    triggerRef: inbuiltButtonRef,
  })
  const filterButtonRef = trigger.ref ?? inbuiltRef

  useEffect(() => {
    if (filterButtonRef.current?.triggerRef?.current) {
      setIsRefLoaded(true)
      onTriggerLoaded?.(filterButtonRef.current.triggerRef)
    }
  }, [filterButtonRef.current?.triggerRef?.current, onTriggerLoaded])

  return (
    <div className={classNameOverride} {...restProps}>
      {React.cloneElement(trigger, {
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
              filterButtonRef.current?.triggerRef?.current || null
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
