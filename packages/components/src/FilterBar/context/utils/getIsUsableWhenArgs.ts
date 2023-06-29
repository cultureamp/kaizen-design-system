import { FilterConditionalArgs, FiltersValues } from "../../types"
import { FilterBarState, InternalFilterState } from "../types"

export const getIsUsableWhenArgs = <ValuesMap extends FiltersValues>({
  filters,
  activeFilterIds,
  values,
}: FilterBarState<ValuesMap>): FilterConditionalArgs<ValuesMap> =>
  Object.values(filters).reduce<FilterConditionalArgs<ValuesMap>>(
    (acc, { id, name }: InternalFilterState<ValuesMap, keyof ValuesMap>) => {
      acc[id] = {
        id,
        name,
        isActive: activeFilterIds.has(id),
        value: values![id],
      }
      return acc
    },
    {} as FilterConditionalArgs<ValuesMap>
  )
