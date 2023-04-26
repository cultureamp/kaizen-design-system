import React, { useContext, useEffect, useState } from "react"

type FilterBarContextValue = {
  state: Record<string, any>
  updateSelectedValue: (label: string, value: any) => void
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
  filters: FilterBarContextValue["state"]
  onChange: (state: FilterBarContextValue["state"]) => void
}

export const FilterBarProvider = ({
  children,
  filters,
  onChange,
}: FilterBarProviderProps): JSX.Element => {
  const [state, setState] = useState(filters)

  const value = {
    state,
    updateSelectedValue: (label: string, newValue: any): void => {
      setState(current =>
        current.map(obj =>
          obj.label === label ? { ...obj, selectedValue: newValue } : obj
        )
      )
    },
  }

  useEffect(() => {
    onChange(state)
  }, [state])

  return (
    <FilterBarContext.Provider value={value}>
      {children}
    </FilterBarContext.Provider>
  )
}
