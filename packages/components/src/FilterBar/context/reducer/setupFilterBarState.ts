import { Filters, FiltersValues } from "../../types"
import { FilterBarState } from "../types"

export const setupFilterBarState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>
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
        // A dependent filter is set to `null` here as it
        // will be re-evaluated in the `update_values` dispatch action.
        isUsable: hasDependency ? null : true,
      }

      if (hasDependency) {
        baseState.dependentFilterIds.add(id)
      }

      return baseState
    },
    {
      hasUpdatedValues: false,
      filters: {},
      // These will be set by the `update_values` dispatch action.
      activeFilterIds: new Set(),
      // To prevent an infinite loop calculating dependent filters,
      // `values` is set to `null` and default values will be
      // set by the `update_values` dispatch action.
      values: null,
      dependentFilterIds: new Set(),
    } as FilterBarState<ValuesMap>
  )

  return state
}
