import { FilterBarState, FiltersValues } from "../types"
import { getFilterUsableState } from "../utils/getFilterUsableState"
import { transformToFiltersState } from "../utils/transformToFiltersState"

export const updateValues = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarState<ValuesMap> => {
  const filtersState = transformToFiltersState(state, values)

  Object.values(filtersState).forEach(({ id }) => {
    const { isUsableWhen } = state.filters[id]
    const isUsable = getFilterUsableState(filtersState, isUsableWhen)

    state.filters[id].isUsable = isUsable

    if (!isUsable) {
      state.activeFilterIds.delete(id)
      state.values[id as keyof ValuesMap] = undefined
      return
    }

    state.values[id as keyof ValuesMap] = values[id]

    if (values[id]) state.activeFilterIds.add(id)
  })

  return { ...state }
}
