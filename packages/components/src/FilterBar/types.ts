export type FiltersValues = Record<string, any>

type ConditionalFilterAttributes<Id, Value> = {
  id: Id
  name: string
  value?: Value
  isActive: boolean
}

export type FilterConditionalArgs<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: ConditionalFilterAttributes<K, ValuesMap[K]>
}

export type FilterIsUsableWhen<ValuesMap extends FiltersValues> = (
  state: FilterConditionalArgs<ValuesMap>
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
