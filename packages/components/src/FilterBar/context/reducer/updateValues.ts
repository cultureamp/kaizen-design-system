import { FiltersState, FiltersValues } from "../types"

export const updateValues = <ValuesMap extends FiltersValues>(
  state: FiltersState<ValuesMap>,
  values: Partial<ValuesMap>
): FiltersState<ValuesMap> =>
  Object.keys(state.filters).reduce<FiltersState<ValuesMap>>(
    (newState, key) => {
      const value = values[key]
      const isActive = value !== undefined ? true : state.filters[key].isActive

      newState.filters[key as keyof ValuesMap] = {
        ...state.filters[key],
        value,
        isActive,
      }

      if (isActive) newState.activeFilterIds.add(key)

      return newState
    },
    { ...state, filters: {} } as FiltersState<ValuesMap>
  )
