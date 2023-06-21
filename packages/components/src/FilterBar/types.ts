import { FiltersValues } from "./context/types"

export type FilterAttributes<Id> = {
  id: Id
  name: string
  Component: React.ReactElement
  isRemovable?: boolean
}

export type Filters<ValuesMap extends FiltersValues> = Array<
  FilterAttributes<keyof ValuesMap>
>
