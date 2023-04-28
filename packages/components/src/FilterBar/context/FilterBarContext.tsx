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

type AddFilterData = {
  isRemovable: boolean
  isHidden?: boolean
  isUsableWhen?: IsUsableWhen
}

export type FilterBarContextValue = {
  state: Record<string, FilterAttr>
  // getAllFiltersState: () => AllFiltersState | undefined
  getFilterState: (label: string) => FilterAttr | undefined
  addFilter: (label: string, data: AddFilterData) => void
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
  onChange: (state: AllFiltersState) => void
}

export const FilterBarProvider = ({
  children,
  onChange,
}: FilterBarProviderProps): JSX.Element => {
  const [state, setState] = useState<AllFiltersState>({})

  const getTransformedState = (): AllFiltersState =>
    // @note: maybe an array would be better after all
    Object.values(state).reduce<AllFiltersState>((acc, filter) => {
      acc[filter.label] = {
        ...filter,
        isUsable: filter.isUsableWhen?.(state) ?? true,
      }
      return acc
    }, {})

  const value = {
    state,
    // getAllFiltersState,
    getFilterState: (label: string): FilterAttr | undefined => {
      if (!state[label]) return undefined
      return {
        ...state[label],
        isUsable: state[label].isUsableWhen?.(state) ?? true,
      }
    },
    addFilter: (label: string, data: AddFilterData): void => {
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
    onChange(getTransformedState())
  }, [state])

  return (
    <FilterBarContext.Provider value={value}>
      {children}
    </FilterBarContext.Provider>
  )
}
