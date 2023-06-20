import { FilterAttributes } from "../types"

export type FiltersValues = Record<string, any>

export type MappedFilters<ValuesMap> = {
  [K in keyof ValuesMap]: FilterAttributes<K>
}

export type InternalFilterState = {
  isOpen: boolean
}

export type BaseFilterState<Id> = Omit<FilterAttributes<Id>, "Component"> &
  InternalFilterState

export type FilterBarStateFilters<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: BaseFilterState<K>
}

export type FilterBarState<ValuesMap extends FiltersValues> = {
  filters: FilterBarStateFilters<ValuesMap>
  activeFilterIds: Set<keyof ValuesMap>
}

export type FilterState<Id, Value> = BaseFilterState<Id> & {
  value?: Value
  isActive: boolean
}

export type ActiveFiltersArray<ValuesMap extends FiltersValues> = Array<
  FilterAttributes<keyof ValuesMap>
>
