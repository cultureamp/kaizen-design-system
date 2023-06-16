import React, { forwardRef } from "react"
import { FilterTriggerRef } from "~components/Filter"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
  FilterButtonRemovableProps,
} from "~components/FilterButton"

export type FilterBarButtonProps = FilterButtonProps & {
  isRemovable: boolean
  onRemove: FilterButtonRemovableProps["removeButtonProps"]["onClick"]
}

export const FilterBarButton = forwardRef<
  FilterTriggerRef,
  FilterBarButtonProps
>(
  ({ isRemovable, onRemove, ...props }, ref): JSX.Element =>
    isRemovable ? (
      <FilterButtonRemovable
        ref={ref}
        triggerButtonProps={props}
        removeButtonProps={{ onClick: onRemove }}
      />
    ) : (
      <FilterButton ref={ref} {...props} />
    )
)

FilterBarButton.displayName = "FilterBar.Button"
