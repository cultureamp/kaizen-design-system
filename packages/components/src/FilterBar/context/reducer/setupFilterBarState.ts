import { Filters, FiltersValues } from "../../types"
import { FilterBarState } from "../types"
import { getFilterUsableState } from "../utils/getFilterUsableState"
import { transformToFiltersState } from "../utils/transformToFiltersState"

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

      return baseState
    },
    {
      filters: {},
      activeFilterIds: new Set(),
      values: {},
    } as FilterBarState<ValuesMap>
  )

  const filtersState = transformToFiltersState(state, values)

  filters.forEach(({ id, isUsableWhen }) => {
    const isUsable = getFilterUsableState(filtersState, isUsableWhen)
    state.filters[id].isUsable = isUsable

    if (!isUsable) {
      state.activeFilterIds.delete(id)
      return
    }

    state.values[id] = values[id]
  })

  return state
}
