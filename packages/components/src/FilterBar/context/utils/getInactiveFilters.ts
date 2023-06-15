import { FilterState, FiltersState, FiltersValues } from "../types"

export const getInactiveFilters = <ValuesMap extends FiltersValues>(
  filtersState: FiltersState<ValuesMap>
): Array<FilterState<keyof ValuesMap, ValuesMap>> =>
  Object.values(filtersState).filter(({ isActive }) => !isActive)
