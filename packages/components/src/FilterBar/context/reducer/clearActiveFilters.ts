import { FiltersState, FiltersValues } from "../types"

export const clearActiveFilters = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>
): FiltersState<ValuesMap> => {
  state.activeFilterIds.forEach((id, _, ids) => {
    const filter = state.filters[id]

    if (filter.isRemovable) {
      filter.isActive = false
      ids.delete(id)
    }
  })

  return state
}
