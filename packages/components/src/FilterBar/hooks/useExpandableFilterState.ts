/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createContext, Dispatch, Provider, useContext } from "react"
import {
  ExpandableFilterEvents,
  FilterValues,
  IExpandableFilterBarState,
  IFilter,
} from "../types"

interface ExpandableFilterContext<Values>
  extends IExpandableFilterBarState<Values> {
  dispatch: Dispatch<ExpandableFilterEvents<Values, IFilter<Values>>>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ExpandableFilterContext = createContext<ExpandableFilterContext<any>>({
  filters: [],
  activeFilterCount: 0,
  activeFilters: [],
  additionalFilters: [],
  display: "expanded",
  values: {},
  dispatch: () => {},
})

// This is purely to pipe through Values.
export const useExpandableProvider = <Values extends FilterValues>() =>
  ExpandableFilterContext.Provider as Provider<ExpandableFilterContext<Values>>

export const useExpandableFilterState = () =>
  useContext(ExpandableFilterContext)
