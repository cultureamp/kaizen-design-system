import { FiltersValues } from "../../types"
import { FilterBarState } from "../types"
import { getFilterConditionalArgs } from "./getFilterConditionalArgs"

export const updateDependentFilters = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarState<ValuesMap> => {
  let hasChange = false
  const newValues = { ...values }

  const args = getFilterConditionalArgs(state, values)

  Array.from(state.dependentFilterIds).forEach(id => {
    const isUsable = state.filters[id].isUsableWhen!(args)

    const shouldUpdate = state.filters[id].isUsable !== isUsable
    if (!shouldUpdate) return

    hasChange = true
    state.filters[id].isUsable = isUsable

    if (isUsable) {
      newValues[id] = values[id]
      if (!state.filters[id].isRemovable || values[id] !== undefined) {
        state.activeFilterIds.add(id)
        if (state.values) state.values[id] = values[id]
      }
    } else {
      state.activeFilterIds.delete(id)
      if (state.values) state.values[id] = undefined
      newValues[id] = undefined
    }
  })

  if (hasChange) updateDependentFilters({ ...state }, newValues)

  return { ...state }
}
