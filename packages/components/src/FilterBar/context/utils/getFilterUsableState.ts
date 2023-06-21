import { FilterAttributes } from "../../types"
import { FiltersState, FiltersValues } from "../types"

export const getFilterUsableState = <ValuesMap extends FiltersValues>(
  filtersState: FiltersState<ValuesMap>,
  isUsableWhen: FilterAttributes<ValuesMap>["isUsableWhen"] | undefined
): boolean => (isUsableWhen === undefined ? true : isUsableWhen(filtersState))
