import { type FiltersValues } from '../../types'
import { type FilterBarState } from '../types'
import { updateDependentFilters } from '../utils/updateDependentFilters'

export const updateValues = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>,
): FilterBarState<ValuesMap> => {
  Object.values(state.filters).forEach(({ id, isRemovable, isUsable }) => {
    if (isUsable && (!isRemovable || values[id] !== undefined)) {
      state.activeFilterIds.add(id)
    }
  })

  return updateDependentFilters({ ...state, hasUpdatedValues: true, values })
}
