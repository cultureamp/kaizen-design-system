import { FiltersState, FiltersValues, InternalFilterState } from "../types"

export const updateSingleFilter = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  id: keyof ValuesMap,
  data: Partial<
    InternalFilterState<keyof ValuesMap, ValuesMap[keyof ValuesMap]>
  >
): FiltersState<ValuesMap> => {
  const newFilterState = { ...state.filters[id], ...data }

  const { isActive } = data
  if (isActive !== undefined) {
    if (isActive) {
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
