import { FilterAttributes } from "../types"

export type FiltersValues = Record<string, any>

export type MappedFilters<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: FilterAttributes<ValuesMap, K>
}

export type FilterStateEditableAttributes = {
  isOpen: boolean
  isUsable: boolean
}

type BaseFilterState<Id> = FilterStateEditableAttributes & {
  id: Id
  name: string
  isRemovable?: boolean
}

type InternalFilterState<
  ValuesMap extends FiltersValues,
  Id extends keyof ValuesMap
> = BaseFilterState<Id> & {
  isUsableWhen?: (state: FiltersState<ValuesMap>) => boolean
}

export type FilterBarStateFilters<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: InternalFilterState<ValuesMap, K>
}

export type FilterBarState<ValuesMap extends FiltersValues> = {
  filters: FilterBarStateFilters<ValuesMap>
  activeFilterIds: Set<keyof ValuesMap>
}

export type FilterState<Id, Value> = BaseFilterState<Id> & {
  value?: Value
  isActive: boolean
}

export type FiltersState<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: FilterState<K, ValuesMap[K]>
}

export type ActiveFiltersArray<ValuesMap extends FiltersValues> = Array<
  FilterAttributes<ValuesMap>
>
