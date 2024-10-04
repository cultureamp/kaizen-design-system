import React, { forwardRef, useEffect } from "react"
import { FilterTriggerRef } from "~components/Filter/Filter"
import { useFilterBarContext } from "~components/Filter/FilterBar/context/FilterBarContext"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/Filter/FilterButton"

export type FilterBarButtonProps = FilterButtonProps & {
  filterId: string
  isRemovable: boolean | undefined
}

export const FilterBarButton = forwardRef<
  FilterTriggerRef,
  FilterBarButtonProps
>(({ filterId, isRemovable = false, ...props }, ref): JSX.Element => {
  const { hideFilter, focusId, setFocus } = useFilterBarContext()

  useEffect(() => {
    if (focusId === filterId) {
      console.log("focusId", focusId, ref)
      ref.current?.triggerRef?.current.focus()
      setFocus(undefined)
    }
    // console.log("getFocusId", getFocusId(), filterId)
  }, [focusId])
  // console.log("getFocusId", gteFocusId())

  return isRemovable ? (
    <FilterButtonRemovable
      ref={ref}
      triggerButtonProps={props}
      removeButtonProps={{ onClick: () => hideFilter(filterId) }}
    />
  ) : (
    <FilterButton ref={ref} {...props} />
  )
})

FilterBarButton.displayName = "FilterBar.Button"
