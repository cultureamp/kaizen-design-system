import { FiltersState, FiltersValues } from "../types"

export const setFilterActive = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  id: keyof ValuesMap
): FiltersState<ValuesMap> => {
  const newState = { ...state.filters[id], isActive: true }
  state.activeFilters.set(id, newState)

  return {
    filters: { ...state.filters, [id]: newState },
    activeFilters: state.activeFilters,
  }
}
