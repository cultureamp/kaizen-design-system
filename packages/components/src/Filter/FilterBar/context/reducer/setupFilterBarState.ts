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

      baseState.filters[id] = {
        id,
        name,
        isRemovable: isRemovable ?? false,
        isUsableWhen,
        isOpen: false,
        isUsable: true,
      }

      if (hasDependency) {
        baseState.dependentFilterIds.add(id)
      }

      if (!isRemovable || values[id] !== undefined) {
        baseState.activeFilterIds.add(id)
      }

      if (isRemovable) {
        baseState.hasRemovableFilter = true
      }

      return baseState
    },
    {
      filters: {},
      activeFilterIds: new Set(),
      values,
      dependentFilterIds: new Set(),
      hasUpdatedValues: false,
      hasRemovableFilter: false,
      focusId: undefined,
    } as FilterBarState<ValuesMap>
  )

  return updateDependentFilters(state)
}
