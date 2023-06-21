import {
  FilterBarState,
  FilterBarStateFilters,
  FilterStateEditableAttributes,
  FiltersValues,
} from "../types"

export const updateSingleFilter = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  id: keyof ValuesMap,
  data: Partial<FilterStateEditableAttributes>
): FilterBarStateFilters<ValuesMap> => ({
  ...state.filters,
  [id]: { ...state.filters[id], ...data },
})
