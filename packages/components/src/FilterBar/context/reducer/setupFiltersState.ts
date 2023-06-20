import { Filters } from "../../types"
import { FiltersState, FiltersValues } from "../types"

export const setupFiltersState = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>,
  values: Partial<ValuesMap>
): FiltersState<ValuesMap> =>
  filters.reduce<FiltersState<ValuesMap>>(
    (state, filter) => {
      const isActive = !filter.isRemovable || values[filter.id] !== undefined

      const filterAttributes = {
        isOpen: false,
        isRemovable: false,
        isActive,
        ...filter,
      }

      state.filters[filter.id] = filterAttributes
      if (isActive) state.activeFilterIds.add(filter.id)

      return state
    },
    { filters: {}, activeFilterIds: new Set() } as FiltersState<ValuesMap>
  )
