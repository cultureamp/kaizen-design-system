export type FiltersValues = Record<string, any>

type FilterUsableArgs<Id, Value> = {
  id: Id
  name: string
  isRemovable?: never
  isUsableWhen?: never
  isUsable?: never
  isOpen?: never
  value?: Value
  isActive: boolean
}

export type FilterBarUsableArgs<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: FilterUsableArgs<K, ValuesMap[K]>
}

export type FilterIsUsableWhen<ValuesMap extends FiltersValues> = (
  state: FilterBarUsableArgs<ValuesMap>
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
