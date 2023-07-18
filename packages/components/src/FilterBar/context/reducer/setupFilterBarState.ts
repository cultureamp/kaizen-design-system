import { Filters, FiltersValues } from "../../types"
import { FilterBarState } from "../types"
import { updateDependentFilters } from "../utils/updateDependentFilters"

export const setupFilterBarState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarState<ValuesMap> => {
  const state = filters.reduce<FilterBarState<ValuesMap>>(
    (baseState, { id, name, isRemovable, isUsableWhen }) => {
      const hasDependency = isUsableWhen !== undefined
      const isUsable = true

      baseState.filters[id] = {
        id,
        name,
        isRemovable: isRemovable ?? false,
        isUsableWhen,
        isOpen: false,
        isUsable,
      }

      if (hasDependency) {
        baseState.dependentFilterIds.add(id)
      }

      if (isUsable && (!isRemovable || values[id] !== undefined)) {
        baseState.activeFilterIds.add(id)
      }

      return baseState
    },
    {
      filters: {},
      activeFilterIds: new Set(),
      values,
      dependentFilterIds: new Set(),
      hasUpdatedValues: false,
    } as FilterBarState<ValuesMap>
  )

  return updateDependentFilters(state)
}
