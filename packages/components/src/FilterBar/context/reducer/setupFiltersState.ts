import { Filters } from "../../types"
import { FilterBarState, FiltersValues } from "../types"

export const setupFiltersState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarState<ValuesMap> =>
  filters.reduce<FilterBarState<ValuesMap>>(
    (state, { Component: _, ...filter }) => {
      state.filters[filter.id] = {
        isOpen: false,
        isUsable: true,
        ...filter,
      }

      if (!filter.isRemovable || values[filter.id] !== undefined)
        state.activeFilterIds.add(filter.id)

      return state
    },
    { filters: {}, activeFilterIds: new Set() } as FilterBarState<ValuesMap>
  )
