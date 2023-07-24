import React from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import {
  FilterBarProvider,
  FilterBarProviderProps,
} from "./context/FilterBarContext"
import {
  FilterBarDatePicker,
  FilterBarDateRangePicker,
  FilterBarMultiSelect,
  FilterBarSelect,
} from "./subcomponents"
import { AddFiltersMenu } from "./subcomponents/AddFiltersMenu"
import { ClearAllButton } from "./subcomponents/ClearAllButton"
import { FiltersValues } from "./types"
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
        <div className={styles.filtersContainer}>
          {Object.values(activeFilters).map(({ id, Component }) => (
            // `id` will always be `string`, but keyof ValuesMap transformed it
            <React.Fragment key={id as string}>
              {React.cloneElement(Component, { id })}
            </React.Fragment>
          ))}
          <AddFiltersMenu />
        </div>

        <div>
          <ClearAllButton />
        </div>
      </div>
    )}
  </FilterBarProvider>
)

FilterBar.displayName = "FilterBar"

FilterBar.DatePicker = FilterBarDatePicker
FilterBar.DateRangePicker = FilterBarDateRangePicker
FilterBar.MultiSelect = FilterBarMultiSelect
FilterBar.Select = FilterBarSelect
