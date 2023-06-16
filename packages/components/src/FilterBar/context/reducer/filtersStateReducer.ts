import { FilterState, FiltersState, FiltersValues } from "../types"
import { setFilterActive } from "./setFilterActive"
import { updateSingleFilter } from "./updateSingleFilter"
import { updateValues } from "./updateValues"

type Actions<ValuesMap> =
  | { type: "update_values"; values: Partial<ValuesMap> }
  | {
      type: "update_single_filter"
      id: keyof ValuesMap
      data: Partial<FilterState<keyof ValuesMap, ValuesMap>>
    }
  | { type: "set_filter_active"; id: keyof ValuesMap; value: boolean }

export const filtersStateReducer = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  action: Actions<ValuesMap>
): FiltersState<ValuesMap> => {
  switch (action.type) {
    case "update_values":
      return updateValues(state, action.values)

    case "update_single_filter":
      return updateSingleFilter(state, action.id, action.data)

    case "set_filter_active":
      return setFilterActive(state, action.id, action.value)
  }
}
