import React from "react"
import { AllFiltersState, FilterBarProvider } from "./context/FilterBarContext"

export type FilterBarProps = {
  children: React.ReactNode
  onChange: (state: AllFiltersState) => void
}

export const FilterBar = ({
  children,
  onChange,
}: FilterBarProps): JSX.Element => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <FilterBarProvider onChange={onChange}>{children}</FilterBarProvider>
  </div>
)
