import { Filters, FiltersValues } from "../../types"
import { FilterBarState } from "../types"
import { updateStateDependentFilters } from "../utils/updateStateDependentFilters"

export const setupFilterBarState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarState<ValuesMap> => {
  const state = filters.reduce<FilterBarState<ValuesMap>>(
    (baseState, { Component: _, ...filter }) => {
      baseState.filters[filter.id] = {
        isRemovable: false,
        isOpen: false,
        isUsable: true,
        ...filter,
      }

      if (!filter.isRemovable || values[filter.id] !== undefined)
        baseState.activeFilterIds.add(filter.id)

      baseState.values[filter.id] = values[filter.id]

      return baseState
    },
    {
      filters: {},
      activeFilterIds: new Set(),
      values: {},
    } as FilterBarState<ValuesMap>
  )

  return updateStateDependentFilters(state, values)
}
