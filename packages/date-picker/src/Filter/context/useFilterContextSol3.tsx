import React, { useContext, useState } from "react"
import { FilterTriggerButtonProps } from "../components/FilterTriggerButton"

type SelectedValuesLabel = FilterTriggerButtonProps["selectedValue"]

export type FilterContextSol3Value = {
  label: string
  selectedValuesLabel?: SelectedValuesLabel
  setSelectedValuesLabel: React.Dispatch<
    React.SetStateAction<SelectedValuesLabel | undefined>
  >
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterContextSol3 = React.createContext<
  FilterContextSol3Value | undefined
>(undefined)
FilterContextSol3.displayName = "FilterContextSol3"

type FilterProviderSol3Props = {
  children: React.ReactNode
  label: string
  defaultSelectedValuesLabel?: SelectedValuesLabel
}

export const FilterProviderSol3 = ({
  children,
  label,
  defaultSelectedValuesLabel,
}: FilterProviderSol3Props): JSX.Element => {
  const [selectedValuesLabel, setSelectedValuesLabel] =
    useState<SelectedValuesLabel>(defaultSelectedValuesLabel)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <FilterContextSol3.Provider
      value={{
        label,
        selectedValuesLabel,
        setSelectedValuesLabel,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </FilterContextSol3.Provider>
  )
}

export const useFilterContextSol3 = (): FilterContextSol3Value => {
  const context = useContext(FilterContextSol3)
  if (!context) {
    throw new Error(
      "useFilterContextSol3 must be used within the FilterContextSol3.Provider"
    )
  }

  return context
}
