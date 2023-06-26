import {
  FilterAttributes,
  FilterBarUsableArgs,
  FiltersValues,
} from "../../types"

export const getFilterUsableState = <ValuesMap extends FiltersValues>(
  filtersState: FilterBarUsableArgs<ValuesMap>,
  isUsableWhen: FilterAttributes<ValuesMap>["isUsableWhen"] | undefined
): boolean => (isUsableWhen === undefined ? true : isUsableWhen(filtersState))
