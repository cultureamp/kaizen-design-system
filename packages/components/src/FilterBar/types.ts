import { FiltersValues } from "./context/types"

export type FilterAttributes<ValuesMap extends FiltersValues> = {
  id: keyof ValuesMap
  name: string
  Component: React.ReactElement
  isRemovable?: boolean
}

export type Filters<ValuesMap extends FiltersValues> = Array<
  FilterAttributes<ValuesMap>
>
