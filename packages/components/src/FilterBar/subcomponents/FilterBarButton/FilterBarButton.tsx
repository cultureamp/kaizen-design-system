import React, { forwardRef } from "react"
import { FilterTriggerRef } from "~components/Filter"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/FilterButton"

export type FilterBarButtonProps = FilterButtonProps & {
  isRemovable?: boolean
}

export const FilterBarButton = forwardRef<
  FilterTriggerRef,
  FilterBarButtonProps
>(
  ({ isRemovable, ...props }, ref): JSX.Element =>
    isRemovable ? (
      <FilterButtonRemovable
        ref={ref}
        triggerButtonProps={props}
        removeButtonProps={{ onClick: () => undefined }}
      />
    ) : (
      <FilterButton ref={ref} {...props} />
    )
)

FilterBarButton.displayName = "FilterBar.Button"
