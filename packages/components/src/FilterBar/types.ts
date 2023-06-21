import { FiltersState, FiltersValues } from "./context/types"

export type FilterAttributes<
  ValuesMap extends FiltersValues,
  Id = keyof ValuesMap
> = {
  id: Id
  name: string
  Component: React.ReactElement
  isRemovable?: boolean
  isUsableWhen?: (state: FiltersState<ValuesMap>) => boolean
}

export type Filters<ValuesMap extends FiltersValues> = Array<
  FilterAttributes<ValuesMap>
>
