import { Filters } from "../../types"
import { FilterBarState, FiltersState, FiltersValues } from "../types"

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

  const filtersState = filters.reduce<FiltersState<ValuesMap>>(
    (acc, { id }) => {
      acc[id] = {
        ...state.filters[id],
        isActive: state.activeFilterIds.has(id),
        value: values[id],
      }
      return acc
    },
    {} as FiltersState<ValuesMap>
  )

  filters.forEach(({ id, isUsableWhen }) => {
    if (isUsableWhen) {
      const isUsable = isUsableWhen(filtersState)
      state.filters[id].isUsable = isUsable
      if (!isUsable) state.activeFilterIds.delete(id)
    }
  })

  return state
}
