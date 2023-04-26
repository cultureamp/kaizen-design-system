import React, { useContext, useEffect, useState } from "react"

type FilterBarContextValue = {
  state: Record<
    string,
    {
      label: string
      removable: boolean
      selectedValue: any
      isOpen?: boolean
    }
  >
  updateSelectedValue: (label: string, value: any) => void
  toggleOpenFilter: (label: string, isOpen: boolean) => void
  // setOpenFilter: (label: string) => void
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
  const [state, setState] = useState<FilterBarContextValue["state"]>(filters)

  const value = {
    state,
    updateSelectedValue: (label: string, newValue: any): void => {
      setState(current => ({
        ...current,
        [label]: {
          ...current[label],
          selectedValue: newValue,
        },
      }))
    },
    toggleOpenFilter: (label: string, isOpen: boolean): void => {
      setState(current => ({
        ...current,
        [label]: { ...current[label], isOpen: isOpen || undefined },
      }))
    },
    // setOpenFilter: (label: string): void =>
    //   setState(current => Object.values(current).reduce((acc, filter) => (
    //     acc[filter.label] = {
    //       ...filter,
    //       isOpen: filter.label === label ?? undefined
    //     }
    //   ), {}))
  } satisfies FilterBarContextValue

  useEffect(() => {
    onChange(state)
  }, [state])

  return (
    <FilterBarContext.Provider value={value}>
      {children}
    </FilterBarContext.Provider>
  )
}
