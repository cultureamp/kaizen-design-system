import { FiltersValues } from "~components/FilterBar/types"
import { FilterBarState } from "../types"

const checkArraysMatch = (a1: any[], a2: any[]): boolean => {
  if (a1.length !== a2.length) return false
  return a1.every((v, i) => v === a2[i])
}

export const checkShouldUpdateValues = <ValuesMap extends FiltersValues>(
  state: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>
): boolean =>
  Object.values(state.filters).some(({ id }) => {
    const stateValue = state.values![id]
    const value = values[id]

    if (Array.isArray(stateValue) && Array.isArray(value)) {
      return !checkArraysMatch(stateValue, value)
    }

    return stateValue !== value
  })
