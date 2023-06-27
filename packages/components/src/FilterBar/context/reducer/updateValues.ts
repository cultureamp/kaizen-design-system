import { FiltersValues } from "../../types"
import { FilterBarState } from "../types"
import { updateStateDependentFilters } from "../utils/updateStateDependentFilters"

export const updateValues = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarState<ValuesMap> => {
  Object.values(state.filters).forEach(({ id, isRemovable }) => {
    if (!isRemovable || values[id] !== undefined) state.activeFilterIds.add(id)
  })

  return updateStateDependentFilters(state, values)
}
