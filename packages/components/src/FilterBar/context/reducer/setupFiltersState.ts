import { Filters } from "../../types"
import { FilterBarState, FiltersValues } from "../types"
import { getFilterUsableState } from "../utils/getFilterUsableState"
import { transformToFiltersState } from "../utils/transformToFiltersState"

export const setupFiltersState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarState<ValuesMap> => {
  const state = filters.reduce<FilterBarState<ValuesMap>>(
    (baseState, { Component: _, ...filter }) => {
      baseState.filters[filter.id] = {
        isOpen: false,
        isUsable: true,
        ...filter,
      }

      if (!filter.isRemovable || values[filter.id] !== undefined)
        baseState.activeFilterIds.add(filter.id)

      return baseState
    },
    { filters: {}, activeFilterIds: new Set() } as FilterBarState<ValuesMap>
  )

  const filtersState = transformToFiltersState(state, values)

  filters.forEach(({ id, isUsableWhen }) => {
    // if (isUsableWhen) {
    const isUsable = getFilterUsableState(filtersState, isUsableWhen)
    state.filters[id].isUsable = isUsable
    if (!isUsable) state.activeFilterIds.delete(id)
    // }
  })

  return state
}
