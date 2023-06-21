import { Filters } from "../../types"
import { FiltersValues } from "../types"

export const getInactiveFilters = <ValuesMap extends FiltersValues>(
  filters: Filters<ValuesMap>,
  activeFilterIds: Set<keyof ValuesMap>
): Filters<ValuesMap> => filters.filter(({ id }) => !activeFilterIds.has(id))
