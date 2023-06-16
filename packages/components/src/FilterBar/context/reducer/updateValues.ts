import { FiltersState, FiltersValues } from "../types"

export const updateValues = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  values: Partial<ValuesMap>
): FiltersState<ValuesMap> =>
  Object.keys(state.filters).reduce<FiltersState<ValuesMap>>(
    (acc, key) => {
      const value = values[key]

      acc.filters[key as keyof ValuesMap] = {
        ...state.filters[key],
        value,
        isActive: value !== undefined ? true : state.filters[key].isActive,
      }

      if (value) acc.activeFilterIds.add(key)

      return acc
    },
    { ...state, filters: {} } as FiltersState<ValuesMap>
  )
