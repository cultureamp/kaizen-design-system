import { type FiltersValues, type SourceFiltersState } from '../../types'
import { type FilterBarState, type InternalFilterState } from '../types'

export const getIsUsableWhenArgs = <ValuesMap extends FiltersValues>({
  filters,
  activeFilterIds,
  values,
}: FilterBarState<ValuesMap>): SourceFiltersState<ValuesMap> =>
  Object.values(filters).reduce<SourceFiltersState<ValuesMap>>(
    (acc, { id, name }: InternalFilterState<ValuesMap, keyof ValuesMap>) => {
      acc[id] = {
        id,
        name,
        isActive: activeFilterIds.has(id),
        value: values[id],
      }
      return acc
    },
    {} as SourceFiltersState<ValuesMap>,
  )
