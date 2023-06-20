import { FilterBarState, FilterState, FiltersValues } from "../types"

export const getInactiveFilters = <ValuesMap extends FiltersValues>({
  filters,
  activeFilterIds,
}: FilterBarState<ValuesMap>): Array<FilterState<keyof ValuesMap, ValuesMap>> =>
  Object.values(filters).filter(({ id }) => !activeFilterIds.has(id))
