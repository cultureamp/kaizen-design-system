import { FiltersState, FiltersValues, InternalFilterState } from "../types"
import { updateSingleFilter } from "./updateSingleFilter"

type Actions<ValuesMap> = {
  type: "update_single_filter"
  id: keyof ValuesMap
  data: Partial<
    InternalFilterState<keyof ValuesMap, ValuesMap[keyof ValuesMap]>
  >
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
