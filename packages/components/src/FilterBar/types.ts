import { FiltersValues } from "./context/types"

type Filter<ValuesMap extends FiltersValues> = {
  id: keyof ValuesMap
  name: string
  Component: React.ReactElement
}

export type Filters<ValuesMap extends FiltersValues> = Array<Filter<ValuesMap>>
