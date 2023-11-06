import React, { forwardRef } from "react"
import { FilterTriggerRef } from "~components/Filter/Filter"
import { useFilterBarContext } from "~components/Filter/FilterBar/context/FilterBarContext"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/Filter/FilterButton"

export type FilterBarButtonProps = FilterButtonProps & {
  id: string
  isRemovable: boolean | undefined
}

export const FilterBarButton = forwardRef<
  FilterTriggerRef,
  FilterBarButtonProps
>(({ id, isRemovable = false, ...props }, ref): JSX.Element => {
  const { hideFilter } = useFilterBarContext()

  return isRemovable ? (
    <FilterButtonRemovable
      ref={ref}
      triggerButtonProps={props}
      removeButtonProps={{ onClick: () => hideFilter(id) }}
    />
  ) : (
    <FilterButton ref={ref} {...props} />
  )
})

FilterBarButton.displayName = "FilterBar.Button"
