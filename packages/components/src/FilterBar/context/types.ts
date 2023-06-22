import { FilterAttributes } from "../types"

export type FiltersValues = Record<string, any>

export type MappedFilters<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: FilterAttributes<ValuesMap, K>
}

type BaseFilterState<Id> = {
  id: Id
  name: string
  isRemovable?: boolean
  // value?: Value
}

export type FilterState<Id, Value> = BaseFilterState<Id> & {
  isOpen: boolean
  value?: Value
  isActive: boolean
}

export type FiltersState<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: FilterState<K, ValuesMap[K]>
}

export type FilterStateEditableAttributes = {
  isOpen: boolean
  isUsable: boolean
}

type InternalFilterState<
  ValuesMap extends FiltersValues,
  Id extends keyof ValuesMap
> = BaseFilterState<Id> &
  FilterStateEditableAttributes & {
    isUsableWhen?: (state: FiltersState<ValuesMap>) => boolean
  }

export type FilterBarStateFilters<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: InternalFilterState<ValuesMap, K>
}

export type FilterBarState<ValuesMap extends FiltersValues> = {
  filters: FilterBarStateFilters<ValuesMap>
  activeFilterIds: Set<keyof ValuesMap>
  values: Partial<ValuesMap>
}

export type ActiveFiltersArray<ValuesMap extends FiltersValues> = Array<
  FilterAttributes<ValuesMap>
>
