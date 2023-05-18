import React from "react"
import {
  FilterBarProvider,
  FilterBarProviderProps,
  FiltersSelectedValues,
} from "./context/FilterBarContext"
import { FilterAddButton } from "./subcomponents/FilterAddButton"
import { FilterClearAllButton } from "./subcomponents/FilterClearAllButton"

export type FilterBarProps<SelectedValues extends FiltersSelectedValues> = Omit<
  FilterBarProviderProps<SelectedValues>,
  "children"
> & {
  // children: React.ReactNode
  // filters: FilterBarProviderProps["filters"]
  // onChange: (state: AllFiltersState) => void
}

export const FilterBar = <SelectedValues extends FiltersSelectedValues>({
  filters,
  ...providerProps
}: FilterBarProps<SelectedValues>): JSX.Element => (
  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    <FilterBarProvider<SelectedValues> filters={filters} {...providerProps}>
      {(activeFilters): JSX.Element => (
        <>
          {Object.values(activeFilters).map(({ id, Component }) => (
            <React.Fragment key={id}>{Component}</React.Fragment>
          ))}
          <FilterAddButton />
          <FilterClearAllButton />
        </>
      )}
    </FilterBarProvider>
  </div>
)
