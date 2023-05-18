import React, { useContext, useEffect, useState } from "react"

export type IsUsableWhen<SelectedValues extends FiltersSelectedValues> =
  (state: {
    [K in keyof SelectedValues]: Omit<
      TransformedFilterAttr<SelectedValues, SelectedValues[K]>,
      "Component"
    >
  }) => boolean

type InternalFilterAttr<
  SelectedValues extends FiltersSelectedValues,
  SelectedValue
> = {
  id: string
  name: string
  Component: React.ReactElement
  isRemovable: boolean
  isOpen: boolean
  isHidden: boolean
  // isUsable: boolean
  isUsableWhen?: IsUsableWhen<SelectedValues>
  selectedValue: SelectedValue
}

export type InternalFiltersState<SelectedValues extends FiltersSelectedValues> =
  {
    [K in keyof SelectedValues]: InternalFilterAttr<
      SelectedValues,
      SelectedValues[K]
    >
  }

export type TransformedFilterAttr<
  SelectedValues extends FiltersSelectedValues,
  SelectedValue = SelectedValues[keyof SelectedValues]
> = Omit<InternalFilterAttr<SelectedValues, SelectedValue>, "isUsableWhen"> & {
  isUsable: boolean
  // selectedValue: any
}

export type TransformedState<SelectedValues extends FiltersSelectedValues> = {
  [K in keyof SelectedValues]: TransformedFilterAttr<
    SelectedValues,
    SelectedValues[K]
  >
}

type FilterSelectedValue = any
export type FiltersSelectedValues = Record<string, FilterSelectedValue>

export type FilterBarContextValue<
  SelectedValues extends FiltersSelectedValues = any
> = {
  // state: Record<string, InternalFilterAttr>
  getFilterState: (
    id: string
  ) => TransformedFilterAttr<SelectedValues, SelectedValues[typeof id]>
  updateSelectedValue: (id: string, value: FilterSelectedValue) => void
  toggleOpenFilter: (id: string, isOpen: boolean) => void
  setOpenFilter: (id: string) => void
  showFilter: (id: string) => void
  hideFilter: (id: string) => void
  getHiddenFilters: () => Array<
    TransformedFilterAttr<SelectedValues, SelectedValues[keyof SelectedValues]>
  >
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

export type Filter<SelectedValues extends FiltersSelectedValues> = {
  id: keyof SelectedValues
  // id: string
  name: string
  Component: React.ReactElement
  isRemovable?: boolean
  isInitHidden?: boolean
  isUsableWhen?: IsUsableWhen<SelectedValues>
}

export type Filters<SelectedValues extends FiltersSelectedValues> = Array<
  Filter<SelectedValues>
>

export type StateWithoutComponent<
  SelectedValues extends FiltersSelectedValues
> = Record<
  keyof SelectedValues,
  Omit<
    TransformedFilterAttr<SelectedValues, SelectedValues[keyof SelectedValues]>,
    "Component"
  >
>

export type FilterBarProviderProps<
  SelectedValues extends FiltersSelectedValues
> = {
  children: (activeFilters: TransformedState<SelectedValues>) => JSX.Element
  filters: Filters<SelectedValues>
  onChange?: (state: StateWithoutComponent<SelectedValues>) => void
  selectedValues: Partial<SelectedValues>
  setSelectedValues: React.Dispatch<
    React.SetStateAction<Partial<SelectedValues>>
  >
}

export const FilterBarProvider = <
  SelectedValues extends FiltersSelectedValues
>({
  children,
  filters,
  onChange,
  selectedValues,
  setSelectedValues,
}: FilterBarProviderProps<SelectedValues>): JSX.Element => {
  const initState: InternalFiltersState<SelectedValues> = filters.reduce<
    InternalFiltersState<SelectedValues>
  >(
    (acc, { isInitHidden, ...filter }) => {
      // @note type cast doesn't work due to `keyof SelectedValues`
      // @ts-expect-error
      acc[filter.id as keyof SelectedValues] = {
        isRemovable: false,
        isOpen: false,
        isHidden: isInitHidden ?? false,
        ...filter,
        selectedValue: selectedValues[filter.id],
      }
      return acc
    },
    {} as InternalFiltersState<SelectedValues> // @note type cast
  )

  const getTransformedState = (
    theState: InternalFiltersState<SelectedValues>
  ): TransformedState<SelectedValues> =>
    Object.values(theState).reduce<TransformedState<SelectedValues>>(
      (acc, filter) => {
        const isUsable = filter.isUsableWhen
          ? filter.isUsableWhen(theState)
          : true

        // @note type cast
        acc[filter.id as keyof SelectedValues] = {
          ...filter,
          isUsable,
          isHidden: !isUsable || filter.isHidden,
          selectedValue: selectedValues[filter.id],
        }

        return acc
      },
      {} as TransformedState<SelectedValues> // @note type cast
    )

  const initTransformedState = getTransformedState(initState)

  const [activeFilters, setActiveFilters] = useState<
    TransformedState<SelectedValues>
  >(
    Object.values(initTransformedState)
      .filter(({ isHidden, isUsable }) => isUsable && !isHidden)
      .reduce<TransformedState<SelectedValues>>(
        (acc, filter) => {
          // @note type cast
          acc[filter.id as keyof SelectedValues] = filter
          return acc
        },
        {} as TransformedState<SelectedValues> // @note type cast
      )
  )
  const [state, setState] =
    useState<InternalFiltersState<SelectedValues>>(initState)

  const value = {
    // state,
    getFilterState: (
      id: string
    ): TransformedFilterAttr<SelectedValues, SelectedValues[typeof id]> => {
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
        Object.values(current).reduce<InternalFiltersState<SelectedValues>>(
          (acc, filter) => {
            // @note type cast
            acc[filter.id as keyof SelectedValues] = {
              ...filter,
              isOpen: filter.id === id,
            }
            return acc
          },
          {} as InternalFiltersState<SelectedValues> // @note type cast
        )
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
      setSelectedValues(current => ({
        ...current,
        [id]: undefined,
      }))
      setState(current => ({
        ...current,
        [id]: { ...current[id], isHidden: true },
      }))
    },
    getHiddenFilters: (): Array<TransformedFilterAttr<SelectedValues>> =>
      Object.values(getTransformedState(state)).filter(
        ({ isHidden, isUsable }) => isUsable && isHidden
      ),
    clearFilters: (): void => {
      setSelectedValues({})
      setState(current =>
        Object.values(current).reduce<InternalFiltersState<SelectedValues>>(
          (acc, filter) => {
            const newState = filter
            if (filter.isRemovable) {
              newState["isHidden"] = true
            }

            // @note type cast
            acc[filter.id as keyof SelectedValues] = {
              ...filter,
              ...newState,
            }
            return acc
          },
          {} as InternalFiltersState<SelectedValues> // @note type cast
        )
      )
    },
  } satisfies FilterBarContextValue<SelectedValues>

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
    const transformedState = getTransformedState(state)

    const { newActiveFilters, hiddenFilters } = Object.values(
      transformedState
    ).reduce<{
      newActiveFilters: Array<TransformedFilterAttr<SelectedValues>>
      hiddenFilters: Array<TransformedFilterAttr<SelectedValues>>
    }>(
      (acc, filter) => {
        const { isHidden, isUsable } = filter
        if (isUsable && !isHidden) {
          acc["newActiveFilters"] = [...acc["newActiveFilters"], filter]
          return acc
        }
        acc["hiddenFilters"] = [...acc["hiddenFilters"], filter]
        return acc
      },
      { newActiveFilters: [], hiddenFilters: [] }
    )

    setSelectedValues(current => {
      const updated = current
      hiddenFilters.forEach(({ id }) => {
        updated[id as keyof SelectedValues] = undefined
      })
      return updated
    })

    setActiveFilters(current => {
      const newActiveFilterIds = newActiveFilters.map(({ id }) => id)

      const currentWithoutRemoved = Object.values(current).reduce<
        TransformedState<SelectedValues>
      >(
        (acc, filter) => {
          if (newActiveFilterIds.includes(filter.id)) {
            // @note type cast
            acc[filter.id as keyof SelectedValues] = filter
          }
          return acc
        },
        {} as TransformedState<SelectedValues> // @note type cast
      )

      return newActiveFilters.reduce((acc, filter) => {
        // @note type cast
        acc[filter.id as keyof SelectedValues] = filter
        return acc
      }, currentWithoutRemoved)
    })
  }, [state])

  useEffect(() => {
    const arg = Object.values(getTransformedState(state)).reduce<
      StateWithoutComponent<SelectedValues>
    >(
      (acc, { Component: _, ...filter }) => {
        // @note type cast
        acc[filter.id as keyof SelectedValues] = filter
        return acc
      },
      {} as StateWithoutComponent<SelectedValues> // @note: type cast
    )
    onChange?.(arg)
  }, [state])

  return (
    <FilterBarContext.Provider value={value}>
      {children(activeFilters)}
    </FilterBarContext.Provider>
  )
}
