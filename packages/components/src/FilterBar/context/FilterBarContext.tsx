import React, { useContext } from "react"

type FilterBarContextValue = {
  state: Record<string, any>
  onChange: (state: FilterBarContextValue["state"]) => void
}

const FilterBarContext = React.createContext<FilterBarContextValue | null>(null)

export const useFilterBarContext = (): FilterBarContextValue => {
  const context = useContext(FilterBarContext)

  if (!context) {
    throw new Error(
      "useFilterBarContext must be used within the FilterBarContext.Provider"
    )
  }

  return context
}

type FilterBarProviderProps = {
  children: React.ReactNode
  value: FilterBarContextValue
}

export const FilterBarProvider = ({ children, value }: FilterBarProviderProps): JSX.Element =>
  // value.onChange(value.state)
   (
  <FilterBarContext.Provider value={value}>{children}</FilterBarContext.Provider>
)
