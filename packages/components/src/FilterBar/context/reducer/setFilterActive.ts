import { FiltersState, FiltersValues } from "../types"

export const setFilterActive = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  id: keyof ValuesMap,
  isActive: boolean
): FiltersState<ValuesMap> => {
  const newState = { ...state.filters[id], isActive }

  if (isActive) {
    state.activeFilters.set(id, newState)
  } else {
    state.activeFilters.delete(id)
  }

  return {
    filters: { ...state.filters, [id]: newState },
    activeFilters: state.activeFilters,
  }
}
