import { FilterState, FiltersState, FiltersValues } from "../types"

export const updateSingleFilter = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  id: keyof ValuesMap,
  data: Partial<FilterState<keyof ValuesMap, ValuesMap>>
): FiltersState<ValuesMap> => {
  const newFilterState = { ...state.filters[id], ...data }

  return {
    filters: { ...state.filters, [id]: newFilterState },
    activeFilterIds: state.activeFilterIds,
  }
}
