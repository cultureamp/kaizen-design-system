import partition from "ramda/src/partition"
import identity from "ramda/src/identity"

import {
  FilterValues,
  IExpandableFilterBarState,
  ExpandableFilterEvents,
  IFilter,
  VisibilityStates,
  ExpandableReducerFilterEvents,
} from "../types"
type ReducerState<Values> = Omit<IExpandableFilterBarState<Values>, "values">
type ReducerHelpers = {
  getFilterById: typeof getFilterById
  activateFilter: typeof activateFilter
  deactivateFilter: typeof deactivateFilter
  filterIsActive: typeof filterIsActive
}

export type ExpandableReducer<Values> = (
  state: ReducerState<Values>,
  event: ExpandableReducerFilterEvents<Values, IFilter<Values>>,
  helpers: ReducerHelpers
) => ReducerState<Values>

export const activeStates: Array<VisibilityStates> = ["open", "visible"]

const filterIsActive = (filter: { visibility: VisibilityStates }) =>
  activeStates.includes(filter.visibility)

const makeVisible = <T extends FilterValues>(
  filter: IFilter<T>,
  filters: IFilter<T>[]
) =>
  filters
    .filter((f) => f.id !== filter.id)
    .concat({
      ...filter,
      visibility: "visible",
    })

const makeHidden = <T extends FilterValues>(
  filter: IFilter<T>,
  filters: IFilter<T>[]
) =>
  filters
    .filter((f) => f.id !== filter.id)
    .concat({
      ...filter,
      visibility: "hidden",
    })

const deactivateFilter = <T extends FilterValues>(
  filters: IFilter<T>[],
  filter: IFilter<T>
) => calculateFiltersState(makeHidden(filter, filters))

const activateFilter = <T extends FilterValues>(
  filters: IFilter<T>[],
  filter: IFilter<T>
) => calculateFiltersState(makeVisible(filter, filters))

const getFilterById = <T extends IFilter<any>[]>(
  filters: T,
  id: T[number]["id"]
) => filters.find((f) => f.id === id)

export const helpers = {
  activateFilter,
  filterIsActive,
  getFilterById,
  deactivateFilter,
}

/**
 * An expandable filter is active if:
 * - it can't be removed (removable is false)
 * - has a visibility state of "visible"
 * - has a visibility state of "open" (filter will be visible with menu open)
 *
 * Additional filters are filters that don't meet the above criteria. These should
 * be set to a visibility state of "hidden" if they aren't already.
 */
export const calculateFiltersState = <T>(filters: Array<IFilter<T>>) => {
  const [activeFilters, additionalFilters] = partition(
    (f) => !f.removable || activeStates.includes(f.visibility),
    filters.map((f) => ({
      ...f,
      visibility: f.visibility
        ? f.visibility
        : !f.removable
        ? "visible"
        : "hidden",
    }))
  )

  return {
    filters,
    activeFilters,
    additionalFilters,
    activeFilterCount: activeFilters.length,
  }
}

/**
 * All state updates happen in the reducers.
 * The job of the reducer is to do any work it needs to
 * calculate the next filter bar state.
 *
 * This is the expandable reducer that builds upon the core functionality of the
 * simple filter bar
 *
 * The consumer can provide a reducer to hook into state and update
 * accordingly. As such, every returned piece of state must call
 * this function with the calculated state and the event that triggered it
 *
 */
export const expandableReducer =
  <T extends FilterValues>(
    reducer: ExpandableReducer<T> = identity
  ): ExpandableReducer<T> =>
  (state, event, helpers) =>
    reducer(getUpdatedState(state, event), event, helpers)

function getUpdatedState<T extends FilterValues>(
  state: Omit<IExpandableFilterBarState<T>, "values">,
  event: ExpandableReducerFilterEvents<T, IFilter<T>>
): Omit<IExpandableFilterBarState<T>, "values"> {
  switch (event.type) {
    case "setFilters":
      return {
        ...state,
        ...calculateFiltersState(event.data),
      }

    case "removeFilter": {
      const updatedFilters = state.filters
        .filter((f) => f.id !== event.data.id)
        .concat({
          ...event.data,
          visibility: "hidden",
        })

      return {
        ...state,
        ...calculateFiltersState(updatedFilters),
      }
    }

    case "setFilterVisibility": {
      const { id, visibility } = event.data
      const filter = state.filters.find((f) => f.id === id)
      if (!filter || (!filter.removable && visibility === "hidden")) {
        return state
      }

      const updatedFilters = state.filters.map((f) =>
        f.id === id ? { ...f, visibility } : f
      )

      return {
        ...state,
        ...calculateFiltersState(updatedFilters),
      }
    }

    case "clearFilters": {
      const resetFilters = state.filters.map((f) => ({
        ...f,
        visibility: f.removable ? "hidden" : ("visible" as VisibilityStates),
      }))

      return {
        ...state,
        ...calculateFiltersState(resetFilters),
      }
    }

    case "setDisplay":
      return { ...state, display: event.data }

    default:
      return state
  }
}
