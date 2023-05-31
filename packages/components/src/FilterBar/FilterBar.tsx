import React from "react"
import {
  FilterBarProvider,
  FilterBarProviderProps,
} from "./context/FilterBarContext"
import { FiltersValues } from "./context/types"
import { FilterBarSelect } from "./subcomponents/FilterSelect/FilterSelect"
import styles from "./FilterBar.module.scss"

export type FilterBarProps<ValuesMap extends FiltersValues> = Omit<
  FilterBarProviderProps<ValuesMap>,
  "children"
>

export const FilterBar = <ValuesMap extends FiltersValues>({
  filters,
  ...providerProps
}: FilterBarProps<ValuesMap>): JSX.Element => (
  <FilterBarProvider<ValuesMap> filters={filters} {...providerProps}>
    {(activeFilters): JSX.Element => (
      <div className={styles.filterBar}>
        {Object.values(activeFilters).map(({ id, Component }) => (
          <React.Fragment key={id}>
            {React.cloneElement(Component, { id })}
          </React.Fragment>
        ))}
      </div>
    )}
  </FilterBarProvider>
)

FilterBar.displayName = "FilterBar"

FilterBar.Select = FilterBarSelect
