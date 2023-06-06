export type FiltersValues = Record<string, any>

export type FilterState<Id, Value> = {
  id: Id
  name: string
  Component: React.ReactElement
  value?: Value
  isOpen: boolean
}

export type FiltersState<ValuesMap extends FiltersValues> = {
  [K in keyof ValuesMap]: FilterState<K, ValuesMap[K]>
}
