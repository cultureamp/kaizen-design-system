import { FiltersValues } from "../../types"
import { FilterBarState } from "../types"
import { getFilterConditionalArgs } from "./getFilterConditionalArgs"

export const updateStateDependentFilters = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarState<ValuesMap> => {
  const usableConditionArgs = getFilterConditionalArgs(state, values)

  Object.values(state.filters).forEach(({ id, isUsableWhen }) => {
    const isUsable = isUsableWhen === undefined
      ? true
      : isUsableWhen(usableConditionArgs)

    state.filters[id].isUsable = isUsable

    if (!isUsable) {
      state.activeFilterIds.delete(id)
      state.values[id as keyof ValuesMap] = undefined
      return
    }

    state.values[id as keyof ValuesMap] = values[id]
  })

  return state
}
