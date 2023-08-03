import React, { forwardRef, useState } from "react"
import { v4 } from "uuid"
import { FilterTriggerRef } from "~components/Filter"
import { useFilterBarContext } from "~components/FilterBar/context/FilterBarContext"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/FilterButton"

export type FilterBarButtonProps = FilterButtonProps & {
  isRemovable: boolean | undefined
}

export const FilterBarButton = forwardRef<
  FilterTriggerRef,
  FilterBarButtonProps
>(({ id: propsId, isRemovable = false, ...props }, ref): JSX.Element => {
  const [id] = useState<string>(propsId || v4())
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
