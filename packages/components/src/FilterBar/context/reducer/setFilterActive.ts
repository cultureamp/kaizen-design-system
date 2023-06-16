import { FiltersState, FiltersValues } from "../types"
import { updateSingleFilter } from "./updateSingleFilter"

export const setFilterActive = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  id: keyof ValuesMap,
  isActive: boolean
): FiltersState<ValuesMap> => {
  if (isActive) {
    state.activeFilterIds.add(id)
  } else {
    state.activeFilterIds.delete(id)
  }

  return updateSingleFilter(state, id, { isActive })
}
