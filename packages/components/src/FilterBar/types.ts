export type FiltersValues = Record<string, any>

type SourceFilterAttributes<Id, Value> = {
  id: Id
  name: string
  value?: Value
  isActive: boolean
}

export type SourceFiltersState<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: SourceFilterAttributes<K, ValuesMap[K]>
}

export type FilterIsUsableWhen<ValuesMap extends FiltersValues> = (
  state: SourceFiltersState<ValuesMap>
) => boolean

export type FilterAttributes<
  ValuesMap extends FiltersValues,
  Id = keyof ValuesMap
> = {
  id: Id
  name: string
  Component: React.ReactElement
  isRemovable?: boolean
  isUsableWhen?: FilterIsUsableWhen<ValuesMap>
}

export type Filters<ValuesMap extends FiltersValues> = Array<
  FilterAttributes<ValuesMap>
>

export type FilterState<Id, Value> = {
  id: Id
  name: string
  isRemovable: boolean
  isUsableWhen?: never
  isUsable: boolean
  isOpen: boolean
  value?: Value
  isActive: boolean
}
