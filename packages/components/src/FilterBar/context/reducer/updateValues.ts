import { FiltersState, FiltersValues } from "../types"

export const updateValues = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  values: Partial<ValuesMap>
): FiltersState<ValuesMap> =>
  Object.keys(state.filters).reduce<FiltersState<ValuesMap>>(
    (acc, key) => {
      const newState = {
        ...state.filters[key],
        value: values[key],
      }

      acc.filters[key as keyof ValuesMap] = newState
      if (state.activeFilters.has(key)) acc.activeFilters.set(key, newState)
      return acc
    },
    { filters: {}, activeFilters: new Map() } as FiltersState<ValuesMap>
  )
