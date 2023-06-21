import { BaseFilterState, FilterBarState, FiltersValues } from "../types"

export const getInactiveFilters = <ValuesMap extends FiltersValues>({
  filters,
  activeFilterIds,
}: FilterBarState<ValuesMap>): Array<BaseFilterState<keyof ValuesMap>> =>
  Object.values(filters).filter(({ id }) => !activeFilterIds.has(id))
