import React, { useContext, useEffect, useReducer } from "react"
import { Filters } from "../types"
import { filtersStateReducer, setupFiltersState } from "./filtersStateReducer"
import { FilterState, FiltersState, FiltersValues } from "./types"

export type FilterBarContextValue<
  Value,
  ValuesMap extends FiltersValues = Record<string, Value>
> = {
  getFilterState: (id: keyof ValuesMap) => FilterState<keyof ValuesMap, Value>
  toggleOpenFilter: (id: keyof ValuesMap, isOpen: boolean) => void
  updateValue: (id: keyof ValuesMap, value: Value) => void
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
  children: (activeFilters: FiltersState<ValuesMap>) => JSX.Element
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
    setupFiltersState<ValuesMap>(filters)
  )

  const value = {
    getFilterState: (
      id: keyof ValuesMap
    ): FilterState<typeof id, ValuesMap[typeof id]> => {
      if (!state[id]) throw Error(`Filter ${String(id)} doesn't exist!`)
      return state[id]
    },
    toggleOpenFilter: (id: keyof ValuesMap, isOpen: boolean): void => {
      dispatch({ type: "update_single", id, data: { isOpen } })
    },
    updateValue: (id: keyof ValuesMap, newValue: any): void => {
      onValuesChange({
        ...values,
        [id]: newValue,
      })
    },
  } satisfies FilterBarContextValue<any, ValuesMap>

  useEffect(() => {
    dispatch({ type: "update_values", values })
  }, [values])

  const activeFilters = state

  return (
    <FilterBarContext.Provider
      // @note: Context object cannot be generic, thus the type-casting to a looser type
      value={value as FilterBarContextValue<any, Record<string, any>>}
    >
      {children(activeFilters)}
    </FilterBarContext.Provider>
  )
}
