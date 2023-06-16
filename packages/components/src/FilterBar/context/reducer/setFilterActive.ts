import { FiltersState, FiltersValues } from "../types"

export const setFilterActive = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  id: keyof ValuesMap,
  isActive: boolean
): FiltersState<ValuesMap> => {
  const newState = { ...state.filters[id], isActive }

  if (isActive) {
    state.activeFilterIds.add(id)
  } else {
    state.activeFilterIds.delete(id)
  }

  return {
    filters: { ...state.filters, [id]: newState },
    activeFilterIds: state.activeFilterIds,
  }
}
