import { FilterAttributes, FiltersValues } from "../../types"
import { FilterBarState } from "../types"

export const getInactiveFilters = <ValuesMap extends FiltersValues>({
  filters,
  activeFilterIds,
}: FilterBarState<ValuesMap>): Array<
  Pick<FilterAttributes<ValuesMap>, "id" | "name">
> =>
  Object.values(filters).filter(
    ({ id, isUsable }) => isUsable && !activeFilterIds.has(id)
  )
