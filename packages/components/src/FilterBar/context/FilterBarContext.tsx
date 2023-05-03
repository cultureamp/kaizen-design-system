import React, { useContext, useEffect, useState } from "react"

export type AllFiltersState = Record<string, FilterAttr>

export type IsUsableWhen = (state: AllFiltersState) => boolean

type FilterAttr = {
  label: string
  isRemovable: boolean
  selectedValue?: any
  isOpen?: boolean
  isHidden?: boolean
  isUsable?: boolean
  isUsableWhen?: IsUsableWhen
}

export type FilterBarContextValue = {
  state: Record<string, FilterAttr>
  getFilterState: (label: string) => FilterAttr
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

export type Filter = {
  label: string
  Component: React.ReactElement
  isRemovable?: boolean
}

export type FilterBarProviderProps = {
  children: React.ReactNode
  filters: Filter[]
  onChange?: (state: AllFiltersState) => void
  selectedValues: Record<string, any>
  // setSelectedValues: (values: Record<string, any>) => void
  setSelectedValues: React.Dispatch<React.SetStateAction<Record<string, any>>>
  // updateStateFromOutside?: () => void
}

export const FilterBarProvider = ({
  children,
  filters,
  onChange,
  selectedValues,
  setSelectedValues,
}: FilterBarProviderProps): JSX.Element => {
  const [state, setState] = useState<AllFiltersState>(
    filters.reduce<AllFiltersState>((acc, { Component: _, ...filter }) => {
      acc[filter.label] = {
        isRemovable: false,
        isOpen: false,
        isHidden: false,
        isUsable: false,
        ...filter,
      }
      return acc
    }, {})
  )

  const getTransformedState = (): AllFiltersState =>
    // @note: maybe an array would be better after all
    Object.values(state).reduce<AllFiltersState>((acc, filter) => {
      acc[filter.label] = {
        ...filter,
        isUsable: filter.isUsableWhen?.(state) ?? true,
        selectedValue: selectedValues[filter.label],
      }
      return acc
    }, {})

  const value = {
    state,
    getFilterState: (label: string): FilterAttr => {
      if (!state[label]) throw Error("Filter doesn't exist!")
      return getTransformedState()[label]
    },
    updateSelectedValue: (label: string, newValue: any): void => {
      setSelectedValues(current => ({
        ...current,
        [label]: newValue,
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
        Object.values(current).reduce<AllFiltersState>((acc, filter) => {
          acc[filter.label] = {
            ...filter,
            isOpen: filter.label === label,
          }
          return acc
        }, {})
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
      Object.values(getTransformedState()).filter(
        ({ isHidden, isUsable }) => isUsable && isHidden
      ),
    clearFilters: (): void => {
      setState(current =>
        Object.values(current).reduce<AllFiltersState>((acc, filter) => {
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
        }, {})
      )
    },
  } satisfies FilterBarContextValue

  useEffect(() => {
    onChange?.(getTransformedState())
  }, [state, selectedValues])

  return (
    <FilterBarContext.Provider value={value}>
      {children}
    </FilterBarContext.Provider>
  )
}
