import { Filters, FiltersValues } from "../../types"

export function createFiltersHash<Values extends FiltersValues>(
  filters: Filters<Values>,
): string {
  return JSON.stringify(filters.map(({ id, name }) => ({ id, name })))
}
