import { Filters } from "../types"
import { FilterState, FiltersState, FiltersValues } from "./types"

export const setupFiltersState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>
): FiltersState<ValuesMap> =>
  filters.reduce<FiltersState<ValuesMap>>((acc, filter) => {
    acc[filter.id] = {
      isOpen: false,
      isRemovable: false,
      ...filter,
    }
    return acc
  }, {} as FiltersState<ValuesMap>)

type Actions<ValuesMap> =
  | { type: "update_values"; values: Partial<ValuesMap> }
  | {
      type: "update_single_filter"
      id: keyof ValuesMap
      data: Partial<FilterState<keyof ValuesMap, ValuesMap>>
    }

export const filtersStateReducer = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  action: Actions<ValuesMap>
): FiltersState<ValuesMap> => {
  switch (action.type) {
    case "update_values":
      return Object.keys(state).reduce<FiltersState<ValuesMap>>((acc, key) => {
        acc[key as keyof ValuesMap] = {
          ...state[key],
          value: action.values[key],
        }
        return acc
      }, {} as FiltersState<ValuesMap>)

    case "update_single_filter":
      return {
        ...state,
        [action.id]: { ...state[action.id], ...action.data },
      }
  }
}
