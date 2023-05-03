import React, { useContext, useEffect, useState } from "react"

export type AllFiltersState = Record<string, FilterAttr>

export type IsUsableWhen = (state: AllFiltersState) => boolean

type FilterAttr = {
  id: string
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
  getFilterState: (id: string) => FilterAttr
  updateSelectedValue: (id: string, value: any) => void
  toggleOpenFilter: (id: string, isOpen: boolean) => void
  setOpenFilter: (id: string) => void
  showFilter: (id: string) => void
  hideFilter: (id: string) => void
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
  id: string
  label: string
  Component: React.ReactElement
  isRemovable?: boolean
  isInitHidden?: boolean
}

export type FilterBarProviderProps = {
  children: (activeFilterIds: string[]) => JSX.Element
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
  const [activeFilterIds, setActiveFilterIds] = useState<string[]>(
    filters.filter(({ isInitHidden }) => !isInitHidden).map(({ id }) => id)
  )
  const [state, setState] = useState<AllFiltersState>(
    filters.reduce<AllFiltersState>((acc, { Component: _, ...filter }) => {
      acc[filter.id] = {
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
      acc[filter.id] = {
        ...filter,
        isUsable: filter.isUsableWhen?.(state) ?? true,
        selectedValue: selectedValues[filter.id],
      }
      return acc
    }, {})

  const value = {
    state,
    getFilterState: (id: string): FilterAttr => {
      if (!state[id]) throw Error("Filter doesn't exist!")
      return getTransformedState()[id]
    },
    updateSelectedValue: (id: string, newValue: any): void => {
      setSelectedValues(current => ({
        ...current,
        [id]: newValue,
      }))
    },
    toggleOpenFilter: (id: string, isOpen: boolean): void => {
      setState(current => ({
        ...current,
        [id]: { ...current[id], isOpen },
      }))
    },
    setOpenFilter: (id: string): void =>
      setState(current =>
        Object.values(current).reduce<AllFiltersState>((acc, filter) => {
          acc[filter.id] = {
            ...filter,
            isOpen: filter.id === id,
          }
          return acc
        }, {})
      ),
    showFilter: (id: string): void => {
      setActiveFilterIds(current => [...current, id])
      setState(current => ({
        ...current,
        [id]: { ...current[id], isHidden: false },
      }))
    },
    hideFilter: (id: string): void => {
      setActiveFilterIds(current => current.filter(activeId => activeId !== id))
      setState(current => ({
        ...current,
        [id]: { ...current[id], isHidden: true },
      }))
    },
    getHiddenFilters: (): FilterAttr[] =>
      Object.values(getTransformedState()).filter(
        ({ isHidden, isUsable }) => isUsable && isHidden
      ),
    clearFilters: (): void => {
      setActiveFilterIds(
        Object.values(state)
          .filter(({ isRemovable }) => !isRemovable)
          .map(({ id }) => id)
      )
      setSelectedValues({})
      setState(current =>
        Object.values(current).reduce<AllFiltersState>((acc, filter) => {
          const newState = filter
          if (filter.isRemovable) {
            newState["isHidden"] = true
          }
          newState["selectedValue"] = undefined

          acc[filter.id] = {
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
      {children(activeFilterIds)}
    </FilterBarContext.Provider>
  )
}
