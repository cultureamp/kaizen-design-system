import { Filters, FiltersValues } from '../../types'
import { FilterBarState, FilterStateEditableAttributes } from '../types'
import { updateDependentFilters } from '../utils/updateDependentFilters'
import { updateSingleFilter } from './updateSingleFilter'
import { updateValues } from './updateValues'

type Actions<ValuesMap extends FiltersValues> =
  | { type: 'update_values'; values: Partial<ValuesMap> }
  | { type: 'complete_update_values' }
  | {
      type: 'update_single_filter'
      id: keyof ValuesMap
      data: Partial<FilterStateEditableAttributes>
    }
  | { type: 'activate_filter'; id: keyof ValuesMap }
  | { type: 'deactivate_filter'; id: keyof ValuesMap }
  | { type: 'update_filter_labels'; data: Filters<ValuesMap> }
  | { type: 'set_focus'; id: keyof ValuesMap | undefined }

export const filterBarStateReducer = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  action: Actions<ValuesMap>,
): FilterBarState<ValuesMap> => {
  switch (action.type) {
    case 'set_focus':
      return {
        ...state,
        focusId: action.id,
      }

    case 'update_values':
      return { ...updateValues(state, action.values) }

    case 'complete_update_values':
      return {
        ...state,
        hasUpdatedValues: false,
      }

    case 'update_single_filter':
      return {
        ...state,
        filters: updateSingleFilter(state, action.id, action.data),
      }

    case 'activate_filter':
      state.activeFilterIds.add(action.id)
      return { ...updateDependentFilters(state) }

    case 'deactivate_filter':
      state.activeFilterIds.delete(action.id)
      delete state.values[action.id]
      return {
        ...updateDependentFilters(state),
        hasUpdatedValues: true,
      }

    case 'update_filter_labels':
      return {
        ...state,
        filters: Object.values(state.filters).reduce((acc, filter) => {
          acc[filter.id] = {
            ...filter,
            name: action.data.find(({ id }) => id === filter.id)?.name ?? filter.name,
          }
          return acc
        }, {}),
      }
  }
}
