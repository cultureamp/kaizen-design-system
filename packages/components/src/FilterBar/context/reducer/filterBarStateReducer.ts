import { FilterBarState, FiltersValues, InternalFilterState } from "../types"
import { updateSingleFilter } from "./updateSingleFilter"

type Actions<ValuesMap extends FiltersValues> =
  | {
      type: "update_single_filter"
      id: keyof ValuesMap
      data: Partial<InternalFilterState>
    }
  | { type: "activate_filter"; id: keyof ValuesMap }
  | { type: "deactivate_filter"; id: keyof ValuesMap }
  | {
      type: "clear_all_filters"
      onValuesChange: (values: Partial<ValuesMap>) => void
    }

export const filterBarStateReducer = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  action: Actions<ValuesMap>
): FilterBarState<ValuesMap> => {
  switch (action.type) {
    case "update_single_filter":
      return {
        ...state,
        filters: updateSingleFilter(state, action.id, action.data),
      }

    case "activate_filter":
      state.activeFilterIds.add(action.id)
      return { ...state }

    case "deactivate_filter":
      state.activeFilterIds.delete(action.id)
      return { ...state }

    case "clear_all_filters":
      state.activeFilterIds.forEach(id => {
        if (state.filters[id].isRemovable) state.activeFilterIds.delete(id)
      })
      action.onValuesChange({})
      return { ...state }
  }
}
