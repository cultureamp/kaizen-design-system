export type FiltersValues = Record<string, any>

export type FilterState<Id, Value> = {
  id: Id
  name: string
  Component: React.ReactElement
  value?: Value
  isOpen: boolean
  isRemovable: boolean
  isActive: boolean
}

type ActiveFilterIds<ValuesMap extends FiltersValues> = Set<keyof ValuesMap>

export type FiltersState<ValuesMap extends FiltersValues> = {
  filters: { [K in keyof ValuesMap]: FilterState<K, ValuesMap[K]> }
  activeFilterIds: ActiveFilterIds<ValuesMap>
}

export type ActiveFiltersArray<ValuesMap extends FiltersValues> = Array<
  FilterState<keyof ValuesMap, ValuesMap[keyof ValuesMap]>
>
