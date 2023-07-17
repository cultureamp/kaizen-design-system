import { FilterAttributes, FilterIsUsableWhen, FiltersValues } from "../types"

export type MappedFilters<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: FilterAttributes<ValuesMap, K>
}

export type FilterStateEditableAttributes = {
  isOpen: boolean
}

export type InternalFilterState<
  ValuesMap extends FiltersValues,
  Id extends keyof ValuesMap,
> = {
  id: Id
  name: string
  isRemovable: boolean
  isUsableWhen?: FilterIsUsableWhen<ValuesMap>
  isUsable: boolean | null
  isOpen: boolean
  value?: never
  isActive?: never
}

export type FilterBarStateFilters<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: InternalFilterState<ValuesMap, K>
}

export type FilterBarState<ValuesMap extends FiltersValues> = {
  hasUpdatedValues: boolean
  filters: FilterBarStateFilters<ValuesMap>
  activeFilterIds: Set<keyof ValuesMap>
  values: Partial<ValuesMap> | null
  dependentFilterIds: Set<keyof ValuesMap>
}

export type ActiveFiltersArray<ValuesMap extends FiltersValues> = Array<
  FilterAttributes<ValuesMap>
>
