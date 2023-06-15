import { FilterState, FiltersState, FiltersValues } from "../types"

export const updateSingleFilter = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  id: keyof ValuesMap,
  data: Partial<FilterState<keyof ValuesMap, ValuesMap>>
): FiltersState<ValuesMap> => {
  const filterId = id
  const newFilterState = { ...state.filters[filterId], ...data }

  if (state.activeFilters.has(filterId))
    state.activeFilters.set(filterId, newFilterState)

  return {
    filters: { ...state.filters, [filterId]: newFilterState },
    activeFilters: state.activeFilters,
  }
}
