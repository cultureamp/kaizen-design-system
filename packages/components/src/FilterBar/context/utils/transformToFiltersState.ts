import { FilterBarState, FiltersState, FiltersValues } from "../types"

export const transformToFiltersState = <ValuesMap extends FiltersValues>(
  { filters, activeFilterIds }: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>
): FiltersState<ValuesMap> =>
  Object.values(filters).reduce<FiltersState<ValuesMap>>((acc, filter) => {
    acc[filter.id as keyof ValuesMap] = {
      ...filters[filter.id],
      isActive: activeFilterIds.has(filter.id),
      value: values[filter.id],
    }
    return acc
  }, {} as FiltersState<ValuesMap>)
