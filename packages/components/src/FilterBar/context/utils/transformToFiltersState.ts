import { FilterBarUsableArgs, FiltersValues } from "../../types"
import { FilterBarState, InternalFilterState } from "../types"

export const transformToFiltersState = <ValuesMap extends FiltersValues>(
  { filters, activeFilterIds }: FilterBarState<ValuesMap>,
  values: Partial<ValuesMap>
): FilterBarUsableArgs<ValuesMap> =>
  Object.values(filters).reduce<FilterBarUsableArgs<ValuesMap>>(
    (acc, { id, name }: InternalFilterState<ValuesMap, keyof ValuesMap>) => {
      acc[id] = {
        id,
        name,
        isActive: activeFilterIds.has(id),
        value: values[id],
      }
      return acc
    },
    {} as FilterBarUsableArgs<ValuesMap>
  )
