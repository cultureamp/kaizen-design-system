import { FiltersState, FiltersValues, InternalFilterState } from "../types"

export const getInactiveFilters = <ValuesMap extends FiltersValues>({
  filters,
}: FiltersState<ValuesMap>): Array<
  InternalFilterState<keyof ValuesMap, ValuesMap>
> => Object.values(filters).filter(({ isActive }) => !isActive)
