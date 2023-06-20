import { FilterState, FiltersState, FiltersValues } from "../types"
import { updateSingleFilter } from "./updateSingleFilter"

type Actions<ValuesMap> = {
  type: "update_single_filter"
  id: keyof ValuesMap
  data: Partial<FilterState<keyof ValuesMap, ValuesMap[keyof ValuesMap]>>
}

export const filtersStateReducer = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  action: Actions<ValuesMap>
): FiltersState<ValuesMap> => {
  switch (action.type) {
    case "update_single_filter":
      return updateSingleFilter(state, action.id, action.data)
  }
}
