import type { Dispatch } from "react"

export type FilterOption<Value extends string | number = string | number> = {
  label: string
  value: Value
  count?: string
}

export type FilterValues = { [key: string]: FilterOption<string | number>[] }

export type VisibilityStates = "hidden" | "visible" | "open"

export type DisplayStates = "expanded" | "shrunk"

export type SimpleFilterEvents<T> =
  | { type: "setValues"; data: T }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { type: "setFilterValue"; data: { id: keyof T; value: any } }

export interface SimpleFilterContainerProps<T>
  extends IBaseFilterState<T, IBaseFilter<T>> {
  dispatch: Dispatch<SimpleFilterEvents<T>>
  values: T
}

export interface ExpandableFilterContainerProps<T>
  extends IExpandableFilterBarState<T> {
  dispatch: Dispatch<ExpandableFilterEvents<T, IFilter<T>>>
}

export interface IBaseFilterState<T, FilterType extends IBaseFilter<T>> {
  filters: Array<FilterType>
  values: T
}

export interface IExpandableFilterBarState<T>
  extends IBaseFilterState<T, IFilter<T>> {
  readonly activeFilters: Array<IFilter<T>>
  readonly additionalFilters: Array<IFilter<T>>
  readonly activeFilterCount: number
  display: DisplayStates
}

export interface IBaseFilter<T> {
  id: keyof T
  name: string
  Component: JSX.Element
}

export interface IFilter<T> extends IBaseFilter<T> {
  removable: boolean
  visibility: VisibilityStates
}

export type ExpandableFilterEvents<T, Filter extends IFilter<T>> =
  | SimpleFilterEvents<T>
  | { type: "setFilters"; data: Array<Filter> }
  | { type: "removeFilter"; data: Filter }
  | { type: "setDisplay"; data: DisplayStates }
  | { type: "clearFilters" }
  | {
      type: "setFilterVisibility"
      data: { id: keyof T; visibility: VisibilityStates }
    }

export type ExpandableReducerFilterEvents<T, Filter extends IFilter<T>> =
  | { type: "setFilters"; data: Array<Filter> }
  | { type: "removeFilter"; data: Filter }
  | { type: "setDisplay"; data: DisplayStates }
  | { type: "clearFilters" }
  | {
      type: "setFilterVisibility"
      data: { id: keyof T; visibility: VisibilityStates }
    }

export interface UseSimpleFilterProps<T> {
  filters: Array<IBaseFilter<T>>
  values: T
  onValuesChange: (values: T) => void
}

export interface UseExpandableFilterBarProps<T>
  extends UseSimpleFilterProps<T> {
  filters: Array<IFilter<T>>
  display?: DisplayStates
}
