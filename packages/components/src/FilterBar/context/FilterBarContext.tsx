import React, { useContext, useEffect, useState } from "react"

export type IsUsableWhen = (
  state: Record<string, Pick<InternalFilterAttr, "isHidden" | "selectedValue">>
) => boolean

type InternalFilterAttr = {
  id: string
  label: string
  Component: React.ReactElement
  isRemovable: boolean
  isOpen: boolean
  isHidden: boolean
  // isUsable: boolean
  isUsableWhen?: IsUsableWhen
  selectedValue: any
}

export type InternalFiltersState = Record<string, InternalFilterAttr>

export type TransformedFilterAttr = Omit<InternalFilterAttr, "isUsableWhen"> & {
  isUsable: boolean
  // selectedValue: any
}

export type TransformedState = Record<string, TransformedFilterAttr>

export type FilterBarContextValue = {
  state: Record<string, InternalFilterAttr>
  getFilterState: (id: string) => TransformedFilterAttr
  updateSelectedValue: (id: string, value: any) => void
  toggleOpenFilter: (id: string, isOpen: boolean) => void
  setOpenFilter: (id: string) => void
  showFilter: (id: string) => void
  hideFilter: (id: string) => void
  getHiddenFilters: () => TransformedFilterAttr[]
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
  isUsableWhen?: IsUsableWhen
}

export type StateWithoutComponent = Record<
  string,
  Omit<TransformedFilterAttr, "Component">
>

export type FilterBarProviderProps = {
  children: (activeFilters: TransformedState) => JSX.Element
  filters: Filter[]
  onChange?: (state: StateWithoutComponent) => void
  selectedValues: Record<string, any>
  setSelectedValues: React.Dispatch<React.SetStateAction<Record<string, any>>>
}

export const FilterBarProvider = ({
  children,
  filters,
  onChange,
  selectedValues,
  setSelectedValues,
}: FilterBarProviderProps): JSX.Element => {
  const initState: InternalFiltersState = filters.reduce<InternalFiltersState>(
    (acc, { isInitHidden, ...filter }) => {
      acc[filter.id] = {
        isRemovable: false,
        isOpen: false,
        isHidden: isInitHidden ?? false,
        ...filter,
        selectedValue: selectedValues[filter.id],
      }
      return acc
    },
    {}
  )

  const getTransformedState = (
    theState: InternalFiltersState
  ): TransformedState =>
    Object.values(theState).reduce<TransformedState>((acc, filter) => {
      const isUsable = filter.isUsableWhen?.(theState) ?? true

      acc[filter.id] = {
        ...filter,
        isUsable,
        selectedValue: selectedValues[filter.id],
      }
      return acc
    }, {})

  const initTransformedState = getTransformedState(initState)

  const [activeFilters, setActiveFilters] = useState<TransformedState>(
    Object.values(initTransformedState)
      .filter(({ isHidden, isUsable }) => isUsable && !isHidden)
      .reduce<TransformedState>((acc, filter) => {
        acc[filter.id] = filter
        return acc
      }, {})
  )
  const [state, setState] = useState<InternalFiltersState>(initState)

  const value = {
    state,
    getFilterState: (id: string): TransformedFilterAttr => {
      if (!state[id]) throw Error("Filter doesn't exist!")
      return getTransformedState(state)[id]
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
        Object.values(current).reduce<InternalFiltersState>((acc, filter) => {
          acc[filter.id] = {
            ...filter,
            isOpen: filter.id === id,
          }
          return acc
        }, {})
      ),
    showFilter: (id: string): void => {
      setState(current => {
        const newState = {
          ...current,
          [id]: { ...current[id], isHidden: false },
        }
        return newState
      })
    },
    hideFilter: (id: string): void => {
      setState(current => ({
        ...current,
        [id]: { ...current[id], isHidden: true },
      }))
    },
    getHiddenFilters: (): TransformedFilterAttr[] =>
      Object.values(getTransformedState(state)).filter(
        ({ isHidden, isUsable }) => isUsable && isHidden
      ),
    clearFilters: (): void => {
      setSelectedValues({})
      setState(current =>
        Object.values(current).reduce<InternalFiltersState>((acc, filter) => {
          const newState = filter
          if (filter.isRemovable) {
            newState["isHidden"] = true
          }

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
    setState(current => getTransformedState(current))
  }, [selectedValues])

  useEffect(() => {
    const transformedState = getTransformedState(state)

    Object.values(transformedState).forEach(filter => {
      if (!filter.isUsable && selectedValues[filter.id]) {
        setSelectedValues(current => ({
          ...current,
          [filter.id]: undefined,
        }))
      }
    })
  }, [state])

  useEffect(() => {
    setActiveFilters(current => {
      const transformedState = getTransformedState(state)

      const newActiveFilters = Object.values(transformedState).filter(
        filter => {
          const { isHidden, isUsable } = filter
          return isUsable && !isHidden
        }
      )

      const newActiveFilterIds = newActiveFilters.map(({ id }) => id)

      const currentWithoutRemoved = Object.values(
        current
      ).reduce<TransformedState>((acc, filter) => {
        if (newActiveFilterIds.includes(filter.id)) {
          acc[filter.id] = filter
        }
        return acc
      }, {})

      return newActiveFilters.reduce((acc, filter) => {
        acc[filter.id] = filter
        return acc
      }, currentWithoutRemoved)
    })
  }, [state])

  useEffect(() => {
    const arg = Object.values(
      getTransformedState(state)
    ).reduce<StateWithoutComponent>((acc, { Component: _, ...filter }) => {
      acc[filter.id] = filter
      return acc
    }, {})
    onChange?.(arg)
  }, [state])

  return (
    <FilterBarContext.Provider value={value}>
      {children(activeFilters)}
    </FilterBarContext.Provider>
  )
}
