import React from "react"
import {
  FilterBarProvider,
  FilterBarProviderProps,
} from "./context/FilterBarContext"
import { FilterAddButton } from "./subcomponents/FilterAddButton"
import { FilterClearAllButton } from "./subcomponents/FilterClearAllButton"

export type FilterBarProps = Omit<FilterBarProviderProps, "children"> & {
  // children: React.ReactNode
  // filters: FilterBarProviderProps["filters"]
  // onChange: (state: AllFiltersState) => void
}

export const FilterBar = ({
  filters,
  ...providerProps
}: FilterBarProps): JSX.Element => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <FilterBarProvider filters={filters} {...providerProps}>
      {filters.map(({ Component }) => Component)}
      <FilterAddButton />
      <FilterClearAllButton />
    </FilterBarProvider>
  </div>
)
