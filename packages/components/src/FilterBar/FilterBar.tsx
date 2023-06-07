import React from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  FilterBarProvider,
  FilterBarProviderProps,
} from "./context/FilterBarContext"
import { FiltersValues } from "./context/types"
import {
  FilterBarMultiSelect,
  FilterBarSelect,
  FilterBarDatePicker,
} from "./subcomponents"
import styles from "./FilterBar.module.scss"

export type FilterBarProps<ValuesMap extends FiltersValues> = OverrideClassName<
  Omit<FilterBarProviderProps<ValuesMap>, "children">
>

export const FilterBar = <ValuesMap extends FiltersValues>({
  filters,
  classNameOverride,
  ...providerProps
}: FilterBarProps<ValuesMap>): JSX.Element => (
  <FilterBarProvider<ValuesMap> filters={filters} {...providerProps}>
    {(activeFilters): JSX.Element => (
      <div className={classnames(styles.filterBar, classNameOverride)}>
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
FilterBar.MultiSelect = FilterBarMultiSelect
FilterBar.DatePicker = FilterBarDatePicker
