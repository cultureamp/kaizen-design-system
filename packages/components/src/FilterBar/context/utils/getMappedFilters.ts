import { Filters, FiltersValues } from "../../types"
import { MappedFilters } from "../types"

export const getMappedFilters = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>
): MappedFilters<ValuesMap> =>
  filters.reduce<MappedFilters<ValuesMap>>(
    (acc, filter) => ({ ...acc, [filter.id]: filter }),
    {} as MappedFilters<ValuesMap>
  )
