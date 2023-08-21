import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
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
  // renderTrigger,
  classNameOverride,
  // onMount,
  ...restProps
}: FilterProps): JSX.Element => {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)

  // const { refs, elements } = useFloating()

  return (
    <div className={classNameOverride} {...restProps}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        ref={setAnchor}
        // ref={refs.setReference}
        type="button"
      >
        Pancakes!
      </button>
      {isOpen && (
        <FilterPopover referenceElement={anchor}>{children}</FilterPopover>
        // <FilterPopover ref={refs.setFloating}  elements={elements}>
        //   {children}
        // </FilterPopover>
      )}
    </div>
  )
}

Filter.displayName = "Filter"
