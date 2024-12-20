import { type FiltersValues } from '../../types'
import {
  type FilterBarState,
  type FilterBarStateFilters,
  type FilterStateEditableAttributes,
} from '../types'

export const updateSingleFilter = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  id: keyof ValuesMap,
  data: Partial<FilterStateEditableAttributes>,
): FilterBarStateFilters<ValuesMap> => ({
  ...state.filters,
  [id]: { ...state.filters[id], ...data },
})
