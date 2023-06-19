import { FilterState, FiltersState, FiltersValues } from "../types"
import { deactivateFilters } from "./deactivateFilters"
import { updateSingleFilter } from "./updateSingleFilter"
import { updateValues } from "./updateValues"

type Actions<ValuesMap> =
  | { type: "update_values"; values: Partial<ValuesMap> }
  | {
      type: "update_single_filter"
      id: keyof ValuesMap
      data: Partial<FilterState<keyof ValuesMap, ValuesMap[keyof ValuesMap]>>
    }
  | { type: "deactivate_filters" }

export const filtersStateReducer = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  action: Actions<ValuesMap>
): FiltersState<ValuesMap> => {
  switch (action.type) {
    case "update_values":
      return updateValues(state, action.values)

    case "update_single_filter":
      return updateSingleFilter(state, action.id, action.data)

    case "deactivate_filters":
      return deactivateFilters(state)
  }
}
