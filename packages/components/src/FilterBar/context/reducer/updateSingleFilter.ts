import { FilterState, FiltersState, FiltersValues } from "../types"

export const updateSingleFilter = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  id: keyof ValuesMap,
  data: Partial<FilterState<keyof ValuesMap, ValuesMap[keyof ValuesMap]>>
): FiltersState<ValuesMap> => {
  const newFilterState = { ...state.filters[id], ...data }

  if (data.isActive !== undefined) {
    if (data.isActive) {
      state.activeFilterIds.add(id)
    } else {
      state.activeFilterIds.delete(id)
    }
  }

  return {
    filters: { ...state.filters, [id]: newFilterState },
    activeFilterIds: state.activeFilterIds,
  }
}
