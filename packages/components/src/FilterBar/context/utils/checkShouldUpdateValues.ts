import { FiltersValues } from "~components/FilterBar/types"
import { FilterBarState } from "../types"

export const checkShouldUpdateValues = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>
): boolean =>
  Object.values(state.filters).some(
    ({ id }) => state.values![id] !== values[id]
  )
