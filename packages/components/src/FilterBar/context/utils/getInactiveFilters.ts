import { FilterState, FiltersState, FiltersValues } from "../types"

export const getInactiveFilters = <ValuesMap extends FiltersValues>({
  filters,
}: FiltersState<ValuesMap>): Array<FilterState<keyof ValuesMap, ValuesMap>> =>
  Object.values(filters).filter(({ isActive }) => !isActive)
