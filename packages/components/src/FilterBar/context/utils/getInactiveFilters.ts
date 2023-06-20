import { FilterBarState, FilterBarStateFilters, FiltersValues } from "../types"

export const getInactiveFilters = <ValuesMap extends FiltersValues>({
  filters,
  activeFilterIds,
}: FilterBarState<ValuesMap>): Array<FilterBarStateFilters<ValuesMap>> =>
  Object.values(filters).filter(({ id }) => !activeFilterIds.has(id))
