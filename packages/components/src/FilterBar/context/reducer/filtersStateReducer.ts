import { Filters } from "../../types"
import { FilterState, FiltersState, FiltersValues } from "../types"
import { setFilterActive } from "./setFilterActive"
import { updateSingleFilter } from "./updateSingleFilter"
import { updateValues } from "./updateValues"

export const setupFiltersState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>
): FiltersState<ValuesMap> =>
  filters.reduce<FiltersState<ValuesMap>>(
    (acc, filter) => {
      const isActive = !filter.isRemovable

      const state = {
        isOpen: false,
        isRemovable: false,
        isActive,
        ...filter,
      }

      acc.filters[filter.id] = state
      if (isActive) acc.activeFilters.set(filter.id, state)

      return acc
    },
    { filters: {}, activeFilters: new Map() } as FiltersState<ValuesMap>
  )

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
