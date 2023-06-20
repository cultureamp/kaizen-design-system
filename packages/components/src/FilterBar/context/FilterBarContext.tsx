import React, { useContext, useReducer } from "react"
import { Filters } from "../types"
import { filtersStateReducer } from "./reducer/filtersStateReducer"
import { setupFiltersState } from "./reducer/setupFiltersState"
import { ActiveFiltersArray, FilterState, FiltersValues } from "./types"
import { getInactiveFilters } from "./utils/getInactiveFilters"

export type FilterBarContextValue<
  Value,
  ValuesMap extends FiltersValues = Record<string, Value>
> = {
  getFilterState: (id: keyof ValuesMap) => FilterState<keyof ValuesMap, Value>
  toggleOpenFilter: (id: keyof ValuesMap, isOpen: boolean) => void
  updateValue: (id: keyof ValuesMap, value: Value) => void
  showFilter: (id: keyof ValuesMap) => void
  hideFilter: (id: keyof ValuesMap) => void
  getInactiveFilters: () => Array<FilterState<keyof ValuesMap, Value>>
}

const FilterBarContext = React.createContext<FilterBarContextValue<any> | null>(
  null
)

export const useFilterBarContext = <
  Value,
  Values extends FiltersValues = Record<string, Value>
>(): FilterBarContextValue<Value, Values> => {
  const context = useContext(FilterBarContext)

  if (!context) {
    throw new Error(
      "useFilterBarContext must be used within the FilterBarContext.Provider"
    )
  }

  return context as FilterBarContextValue<Value, Values>
}

export type FilterBarProviderProps<ValuesMap extends FiltersValues> = {
  children: (activeFilters: ActiveFiltersArray<ValuesMap>) => JSX.Element
  filters: Filters<ValuesMap>
  values: Partial<ValuesMap>
  onValuesChange: (values: Partial<ValuesMap>) => void
}

export const FilterBarProvider = <ValuesMap extends FiltersValues>({
  children,
  filters,
  values,
  onValuesChange,
}: FilterBarProviderProps<ValuesMap>): JSX.Element => {
  const [state, dispatch] = useReducer(
    filtersStateReducer<ValuesMap>,
    setupFiltersState<ValuesMap>(filters, values)
  )

  const value = {
    getFilterState: (
      id: keyof ValuesMap
    ): FilterState<typeof id, ValuesMap[typeof id]> => {
      if (!state.filters[id]) throw Error(`Filter ${String(id)} doesn't exist!`)
      return { ...state.filters[id], value: values[id] }
    },
    toggleOpenFilter: (id: keyof ValuesMap, isOpen: boolean): void => {
      dispatch({ type: "update_single_filter", id, data: { isOpen } })
    },
    updateValue: (id: keyof ValuesMap, newValue: any): void => {
      const validValue =
        typeof newValue === "object" && JSON.stringify(newValue) === "{}"
          ? undefined
          : newValue
      onValuesChange({
        ...values,
        [id]: validValue,
      })
    },
    showFilter: (id: keyof ValuesMap): void =>
      dispatch({ type: "update_single_filter", id, data: { isActive: true } }),
    hideFilter: (id: keyof ValuesMap): void => {
      dispatch({ type: "update_single_filter", id, data: { isActive: false } })
      onValuesChange({ ...values, [id]: undefined })
    },
    getInactiveFilters: () => getInactiveFilters<ValuesMap>(state),
  } satisfies FilterBarContextValue<any, ValuesMap>

  const activeFilters = Array.from(
    state.activeFilterIds,
    id => state.filters[id]
  )

  return (
    <FilterBarContext.Provider
      // @note: Context object cannot be generic, thus the type-casting to a looser type
      value={value as FilterBarContextValue<any, Record<string, any>>}
    >
      {children(activeFilters)}
    </FilterBarContext.Provider>
  )
}
