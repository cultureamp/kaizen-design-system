import {
  FilterBarState,
  FilterBarStateFilters,
  FiltersValues,
  InternalFilterState,
} from "../types"

export const updateSingleFilter = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  id: keyof ValuesMap,
  data: Partial<InternalFilterState>
): FilterBarStateFilters<ValuesMap> => ({
  ...state.filters,
  [id]: { ...state.filters[id], ...data },
})
