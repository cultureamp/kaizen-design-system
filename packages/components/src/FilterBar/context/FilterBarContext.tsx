import React, { useContext, useEffect, useMemo, useReducer } from "react"
import { FilterAttributes, FilterState, Filters, FiltersValues } from "../types"
import { filterBarStateReducer } from "./reducer/filterBarStateReducer"
import { setupFilterBarState } from "./reducer/setupFilterBarState"
import { ActiveFiltersArray } from "./types"
import { getInactiveFilters } from "./utils/getInactiveFilters"
import { getMappedFilters } from "./utils/getMappedFilters"

export type FilterBarContextValue<
  Value,
  ValuesMap extends FiltersValues = Record<string, Value>
> = {
  getFilterState: (id: keyof ValuesMap) => FilterState<keyof ValuesMap, Value>
  toggleOpenFilter: (id: keyof ValuesMap, isOpen: boolean) => void
  updateValue: (id: keyof ValuesMap, value: Value) => void
  showFilter: (id: keyof ValuesMap) => void
  hideFilter: (id: keyof ValuesMap) => void
  getInactiveFilters: () => Array<
    Pick<FilterAttributes<ValuesMap>, "id" | "name">
  >
  clearAllFilters: () => void
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
  const mappedFilters = useMemo(() => getMappedFilters(filters), [filters])

  const [state, dispatch] = useReducer(
    filterBarStateReducer<ValuesMap>,
    setupFilterBarState<ValuesMap>(filters)
  )

  const value = {
    getFilterState: (id: keyof ValuesMap) => {
      if (!state.filters[id]) throw Error(`Filter ${String(id)} doesn't exist!`)
      return {
        ...state.filters[id],
        isActive: state.activeFilterIds.has(id),
        value: values[id],
      }
    },
    toggleOpenFilter: (id: keyof ValuesMap, isOpen: boolean): void => {
      dispatch({ type: "update_single_filter", id, data: { isOpen } })
    },
    updateValue: (id: keyof ValuesMap, newValue: any): void => {
      const validValue =
        typeof newValue === "object" && JSON.stringify(newValue) === "{}"
          ? undefined
          : newValue
      dispatch({
        type: "update_values",
        values: { ...values, [id]: validValue },
      })
    },
    showFilter: (id: keyof ValuesMap): void =>
      dispatch({ type: "activate_filter", id }),
    hideFilter: (id: keyof ValuesMap): void => {
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
    const shouldUpdateValues =
      state.values === null
        ? true
        : filters.some(({ id }) => state.values![id] !== values[id])
    if (shouldUpdateValues)
      dispatch({ type: "update_values", values: { ...values } })
  }, [values])

  useEffect(() => {
    const shouldUpdateValues =
      state.values === null
        ? false
        : filters.some(({ id }) => state.values![id] !== values[id])
    if (shouldUpdateValues) onValuesChange({ ...state.values! })
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
