import React, { useContext, useEffect, useMemo, useReducer } from "react"
import { FilterAttributes, FilterState, Filters, FiltersValues } from "../types"
import { filterBarStateReducer } from "./reducer/filterBarStateReducer"
import { setupFilterBarState } from "./reducer/setupFilterBarState"
import { ActiveFiltersArray } from "./types"
import { checkShouldUpdateValues } from "./utils/checkShouldUpdateValues"
import { getInactiveFilters } from "./utils/getInactiveFilters"
import { getMappedFilters } from "./utils/getMappedFilters"
import { getValidValue } from "./utils/getValidValue"

export type FilterBarContextValue<
  Value,
  ValuesMap extends FiltersValues = Record<string, Value>,
> = {
  getFilterState: <Id extends keyof ValuesMap>(
    id: Id
  ) => FilterState<keyof ValuesMap, ValuesMap[Id]>
  getActiveFilterValues: () => Partial<ValuesMap>
  toggleOpenFilter: <Id extends keyof ValuesMap>(
    id: Id,
    isOpen: boolean
  ) => void
  updateValue: <Id extends keyof ValuesMap>(
    id: Id,
    value: ValuesMap[Id]
  ) => void
  showFilter: <Id extends keyof ValuesMap>(id: Id) => void
  hideFilter: <Id extends keyof ValuesMap>(id: Id) => void
  getInactiveFilters: () => Array<FilterAttributes<ValuesMap>>
  clearAllFilters: () => void
}

const FilterBarContext = React.createContext<FilterBarContextValue<any> | null>(
  null
)

export const useFilterBarContext = <
  Value,
  Values extends FiltersValues = Record<string, Value>,
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
  const mappedFilters = useMemo(() => getMappedFilters(filters), [filters])

  const [state, dispatch] = useReducer(
    filterBarStateReducer<ValuesMap>,
    setupFilterBarState<ValuesMap>(filters)
  )

  const value = {
    getFilterState: <Id extends keyof ValuesMap>(id: Id) => ({
      ...state.filters[id],
      isActive: state.activeFilterIds.has(id),
      value: values[id],
    }),
    getActiveFilterValues: () => values,
    toggleOpenFilter: <Id extends keyof ValuesMap>(
      id: Id,
      isOpen: boolean
    ): void => {
      dispatch({ type: "update_single_filter", id, data: { isOpen } })
    },
    updateValue: <Id extends keyof ValuesMap>(
      id: Id,
      newValue: ValuesMap[Id]
    ): void => {
      dispatch({
        type: "update_values",
        values: { ...values, [id]: getValidValue(newValue) },
      })
    },
    showFilter: <Id extends keyof ValuesMap>(id: Id): void =>
      dispatch({ type: "activate_filter", id }),
    hideFilter: <Id extends keyof ValuesMap>(id: Id): void => {
      dispatch({ type: "deactivate_filter", id })
    },
    getInactiveFilters: () => getInactiveFilters<ValuesMap>(state),
    clearAllFilters: () => {
      state.activeFilterIds.forEach(id => {
        if (mappedFilters[id].isRemovable)
          dispatch({ type: "deactivate_filter", id })
      })
      dispatch({ type: "update_values", values: {} })
    },
  } satisfies FilterBarContextValue<any, ValuesMap>

  useEffect(() => {
    const shouldUpdate =
      state.values === null || checkShouldUpdateValues<ValuesMap>(state, values)
    if (shouldUpdate) dispatch({ type: "update_values", values: { ...values } })
  }, [values])

  useEffect(() => {
    const shouldUpdate =
      state.values !== null && checkShouldUpdateValues<ValuesMap>(state, values)
    if (shouldUpdate) onValuesChange({ ...state.values! })
  }, [state])

  const activeFilters = Array.from(
    state.activeFilterIds,
    id => mappedFilters[id]
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
