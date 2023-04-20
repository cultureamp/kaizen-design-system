/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createContext, Provider, useContext } from "react"
import { FilterValues, SimpleFilterContainerProps } from "../types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SimpleFilterContext = createContext<SimpleFilterContainerProps<any>>({
  filters: [],
  values: {},
  dispatch: () => {},
})

// This is purely to pipe through Values.
export const useSimpleFilterProvider = <Values extends FilterValues>() =>
  SimpleFilterContext.Provider as Provider<SimpleFilterContainerProps<Values>>

export const useSimpleFilterState = () => useContext(SimpleFilterContext)
