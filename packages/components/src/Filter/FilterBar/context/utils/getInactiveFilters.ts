import { type FilterAttributes, type FiltersValues } from '../../types'
import { type FilterBarState } from '../types'

export const getInactiveFilters = <ValuesMap extends FiltersValues>({
  filters,
  activeFilterIds,
}: FilterBarState<ValuesMap>): FilterAttributes<ValuesMap>[] =>
  Object.values(filters).filter(({ id, isUsable }) => isUsable && !activeFilterIds.has(id))
