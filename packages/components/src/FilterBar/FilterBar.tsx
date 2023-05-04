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
      {(activeFilters): JSX.Element => {
        console.log("activeFilters", activeFilters)
        return (
        <>
          {Object.values(activeFilters).map(({ id, Component }) => (
            <React.Fragment key={id}>
              {Component}
            </React.Fragment>
          ))}
          <FilterAddButton />
          <FilterClearAllButton />
        </>
      )
}}
    </FilterBarProvider>
  </div>
)
