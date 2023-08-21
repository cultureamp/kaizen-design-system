import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useFloating } from "@floating-ui/react-dom"
import { FocusOn } from "react-focus-on"
import { OverrideClassName } from "~types/OverrideClassName"
import { FilterPopover } from "./components/FilterPopover"
import { FilterTriggerRef } from "./types"

export interface FilterProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  renderTrigger: (triggerProps: {
    onClick: () => void
    isOpen: boolean
  }) => JSX.Element & { ref?: React.RefObject<FilterTriggerRef> }
  onMount?: (triggerRef: React.RefObject<HTMLButtonElement>) => void
}

export const Filter = ({
  children,
  isOpen,
  setIsOpen,
  renderTrigger,
  classNameOverride,
  onMount,
  ...restProps
}: FilterProps): JSX.Element => {
  // const [isRefLoaded, setIsRefLoaded] = useState<boolean>(false)

  // const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)

  const { refs, elements } = useFloating()

  const trigger = renderTrigger({
    onClick: (): void => setIsOpen(!isOpen),
    isOpen,
  })

  // const inbuiltButtonRef = useRef<HTMLButtonElement>(null)
  const inbuiltRef = useRef<FilterTriggerRef>({
    // triggerRef: setAnchor,
    triggerRef: refs.setReference,
  })
  // const shouldUseInbuiltRef = trigger.ref === undefined
  const filterButtonRef = trigger.ref ?? inbuiltRef
// console.log("anchor", anchor)
  // useEffect(() => {
  //   // if (filterButtonRef.current?.triggerRef) {
  //   //   setIsRefLoaded(true)
  //   //   onMount?.(filterButtonRef.current.triggerRef)
  //   // }
  //   if (refs.reference.current) {
  //     setIsRefLoaded(true)
  //     onMount?.(refs.reference)
  //   }
  // }, [refs.reference.current, onMount])

  return (
    <div className={classNameOverride} {...restProps}>
      {React.cloneElement(trigger, {
        ref: filterButtonRef,
      })}

      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        ref={setAnchor}
        // ref={refs.setReference}
        type="button"
      >
        Pancakes!
      </button> */}
      {/* {isRefLoaded && isOpen && ( */}
      {isOpen && (
        <Portal
          scrollLock={false}
          onClickOutside={(): void => setIsOpen(false)}
          onEscapeKey={(): void => setIsOpen(false)}
          shards={[
            refs.reference,
          ]}
        >
        {/* <FilterPopover referenceElement={anchor}>{children}</FilterPopover> */}
        <FilterPopover ref={refs.setFloating}  elements={elements}>
          {children}
        </FilterPopover>
        </Portal>
      )}
    </div>
  )
}

Filter.displayName = "Filter"

const Portal = ({children, ...props}) => createPortal((
    <FocusOn
      {...props}
    >
    {children}
    </FocusOn>
  ), document.body)
