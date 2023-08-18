import { FiltersValues } from "../../types"
import { FilterBarState } from "../types"
import { getIsUsableWhenArgs } from "./getIsUsableWhenArgs"

export const updateDependentFilters = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>
): FilterBarState<ValuesMap> => {
  if (state.dependentFilterIds.size === 0) return state

  let hasChange = false

  const args = getIsUsableWhenArgs(state)

  Array.from(state.dependentFilterIds).forEach(id => {
    const isUsable = state.filters[id].isUsableWhen!(args)

    const shouldUpdate = state.filters[id].isUsable !== isUsable
    if (!shouldUpdate) return

    hasChange = true
    state.filters[id].isUsable = isUsable

    if (!isUsable) {
      state.activeFilterIds.delete(id)
      state.values[id] = undefined
      state.hasUpdatedValues = true
      return
    }

    if (!state.filters[id].isRemovable || state.values[id] !== undefined) {
      state.activeFilterIds.add(id)
    }
  })

  if (hasChange) updateDependentFilters(state)

  return state
}
