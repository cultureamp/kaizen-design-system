import { FiltersValues } from "../../types"
import { FilterBarState, FilterStateEditableAttributes } from "../types"
import { updateSingleFilter } from "./updateSingleFilter"
import { updateValues } from "./updateValues"

type Actions<ValuesMap extends FiltersValues> =
  | { type: "update_values"; values: Partial<ValuesMap> }
  | {
      type: "update_single_filter"
      id: keyof ValuesMap
      data: Partial<FilterStateEditableAttributes>
    }
  | { type: "activate_filter"; id: keyof ValuesMap }
  | { type: "deactivate_filter"; id: keyof ValuesMap }

export const filterBarStateReducer = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  action: Actions<ValuesMap>
): FilterBarState<ValuesMap> => {
  switch (action.type) {
    case "update_values":
      const newState = updateValues(state, action.values)
      return { ...newState }

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
      state.values![action.id] = undefined
      return { ...state }
  }
}
