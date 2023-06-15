import { Filters } from "../types"
import { FilterState, FiltersState, FiltersValues } from "./types"

export const setupFiltersState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>
): FiltersState<ValuesMap> =>
  filters.reduce<FiltersState<ValuesMap>>(
    (acc, filter) => {
      const isActive = !filter.isRemovable

      const state = {
        isOpen: false,
        isRemovable: false,
        isActive,
        ...filter,
      }

      acc.filters[filter.id] = state
      if (isActive) acc.activeFilters.set(filter.id, state)

      return acc
    },
    { filters: {}, activeFilters: new Map() } as FiltersState<ValuesMap>
  )

type Actions<ValuesMap> =
  | { type: "update_values"; values: Partial<ValuesMap> }
  | {
      type: "update_single_filter"
      id: keyof ValuesMap
      data: Partial<FilterState<keyof ValuesMap, ValuesMap>>
    }

export const filtersStateReducer = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  action: Actions<ValuesMap>
): FiltersState<ValuesMap> => {
  switch (action.type) {
    case "update_values":
      return Object.keys(state.filters).reduce<FiltersState<ValuesMap>>(
        (acc, key) => {
          const newState = {
            ...state.filters[key],
            value: action.values[key],
          }

          acc.filters[key as keyof ValuesMap] = newState
          if (state.activeFilters.has(key)) acc.activeFilters.set(key, newState)
          return acc
        },
        { filters: {}, activeFilters: new Map() } as FiltersState<ValuesMap>
      )

    case "update_single_filter":
      const filterId = action.id
      const newFilterState = { ...state.filters[filterId], ...action.data }

      if (state.activeFilters.has(filterId))
        state.activeFilters.set(filterId, newFilterState)

      return {
        filters: { ...state.filters, [filterId]: newFilterState },
        activeFilters: state.activeFilters,
      }
  }
}
