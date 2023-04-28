import React from "react"
import { FilterButtonProps } from ".."
import { AllFiltersState, FilterBarProvider } from "./context/FilterBarContext"

type FilterReqProps = {
  label: string
  renderTrigger: (a: FilterButtonProps) => JSX.Element
}

export type FilterBarProps = {
  children:
    | React.ReactElement<FilterReqProps>
    | Array<React.ReactElement<FilterReqProps>>
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
