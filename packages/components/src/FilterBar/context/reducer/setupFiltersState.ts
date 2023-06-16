import { Filters } from "../../types"
import { FiltersState, FiltersValues } from "../types"

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
      if (isActive) acc.activeFilterIds.add(filter.id)

      return acc
    },
    { filters: {}, activeFilterIds: new Set() } as FiltersState<ValuesMap>
  )
