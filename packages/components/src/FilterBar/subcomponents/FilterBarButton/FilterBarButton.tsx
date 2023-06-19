import React, { forwardRef } from "react"
import { FilterTriggerRef } from "~components/Filter"
import { useFilterBarContext } from "~components/FilterBar/context/FilterBarContext"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/FilterButton"

export type FilterBarButtonProps = FilterButtonProps & {
  id: string
  isRemovable: boolean
}

export const FilterBarButton = forwardRef<
  FilterTriggerRef,
  FilterBarButtonProps
>(({ id, isRemovable, ...props }, ref): JSX.Element => {
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
