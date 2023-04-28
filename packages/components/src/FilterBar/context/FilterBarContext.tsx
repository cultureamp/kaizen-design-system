import React, { useContext, useEffect, useState } from "react"

type FilterAttr = {
  label: string
  isRemovable: boolean
  selectedValue?: any
  isOpen?: boolean
  isHidden?: boolean
  isUsable?: boolean
}

export type FilterBarContextValue = {
  state: Record<string, FilterAttr>
  addFilter: (
    label: string,
    data: {
      isRemovable: boolean
      isHidden?: boolean
    }
  ) => void
  updateSelectedValue: (label: string, value: any) => void
  toggleOpenFilter: (label: string, isOpen: boolean) => void
  setOpenFilter: (label: string) => void
  showFilter: (label: string) => void
  hideFilter: (label: string) => void
  getHiddenFilters: () => FilterAttr[]
  clearFilters: () => void
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
  onChange: (state: FilterBarContextValue["state"]) => void
}

export const FilterBarProvider = ({
  children,
  onChange,
}: FilterBarProviderProps): JSX.Element => {
  const [state, setState] = useState<FilterBarContextValue["state"]>({})

  const value = {
    state,
    addFilter: (label: string, data: { isRemovable: boolean }): void => {
      setState(current => ({
        ...current,
        [label]: { label, ...data },
      }))
    },
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
        [label]: { ...current[label], isOpen },
      }))
    },
    setOpenFilter: (label: string): void =>
      setState(current =>
        Object.values(current).reduce<FilterBarContextValue["state"]>(
          (acc, filter) => {
            acc[filter.label] = {
              ...filter,
              isOpen: filter.label === label,
            }
            return acc
          },
          {}
        )
      ),
    showFilter: (label: string): void => {
      setState(current => ({
        ...current,
        [label]: { ...current[label], isHidden: false },
      }))
    },
    hideFilter: (label: string): void => {
      setState(current => ({
        ...current,
        [label]: { ...current[label], isHidden: true },
      }))
    },
    getHiddenFilters: (): FilterAttr[] =>
      Object.values(state).filter(({ isHidden }) => isHidden),
    clearFilters: (): void => {
      setState(current =>
        Object.values(current).reduce<FilterBarContextValue["state"]>(
          (acc, filter) => {
            const newState = filter
            if (filter.isRemovable) {
              newState["isHidden"] = true
            }
            newState["selectedValue"] = undefined

            acc[filter.label] = {
              ...filter,
              ...newState,
            }
            return acc
          },
          {}
        )
      )
    },
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
