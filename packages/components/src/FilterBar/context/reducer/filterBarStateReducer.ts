import { FilterBarState, FiltersValues, InternalFilterState } from "../types"
import { updateSingleFilter } from "./updateSingleFilter"

type Actions<ValuesMap> =
  | {
      type: "update_single_filter"
      id: keyof ValuesMap
      data: Partial<InternalFilterState>
    }
  | { type: "activate_filter"; id: keyof ValuesMap }
  | { type: "activate_filters_with_values"; values: Partial<ValuesMap> }
  | { type: "deactivate_filter"; id: keyof ValuesMap }

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

    case "activate_filters_with_values":
      Object.keys(action.values).forEach(id => {
        if (action.values[id]) state.activeFilterIds.add(id)
      })
      return { ...state }

    case "deactivate_filter":
      state.activeFilterIds.delete(action.id)
      return { ...state }
  }
}
