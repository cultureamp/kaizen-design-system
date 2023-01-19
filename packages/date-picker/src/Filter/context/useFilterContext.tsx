import React, { useContext, useState } from "react"
import { FilterTriggerButtonProps } from "../components/FilterTriggerButton"

type SelectedValuesLabel = FilterTriggerButtonProps["selectedValue"]

export type FilterContextValue = {
  label: string
  selectedValuesLabel?: SelectedValuesLabel
  setSelectedValuesLabel: React.Dispatch<
    React.SetStateAction<SelectedValuesLabel | undefined>
  >
}

const FilterContext = React.createContext<FilterContextValue | undefined>(
  undefined
)
FilterContext.displayName = "FilterContext"

type FilterProviderProps = {
  children: React.ReactNode
  label: string
  defaultSelectedValuesLabel?: SelectedValuesLabel
}

export const FilterProvider = ({
  children,
  label,
  defaultSelectedValuesLabel,
}: FilterProviderProps): JSX.Element => {
  const [selectedValuesLabel, setSelectedValuesLabel] =
    useState<SelectedValuesLabel>(defaultSelectedValuesLabel)

  return (
    <FilterContext.Provider
      value={{
        label,
        selectedValuesLabel,
        setSelectedValuesLabel,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = (): FilterContextValue => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error(
      "useFilterContext must be used within the FilterContext.Provider"
    )
  }

  return context
}
