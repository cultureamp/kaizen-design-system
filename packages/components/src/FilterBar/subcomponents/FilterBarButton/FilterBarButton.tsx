import React from "react"
import { FilterButton, FilterButtonProps } from "~components/FilterButton"

export type FilterBarButtonProps = FilterButtonProps

export const FilterBarButton = (props: FilterButtonProps): JSX.Element => (
  <FilterButton {...props} />
)

FilterBarButton.displayName = "FilterBar.Button"
