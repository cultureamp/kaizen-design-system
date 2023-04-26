import React from "react"
import { FilterButtonProps } from ".."
import { FilterBarProvider } from "./context/FilterBarContext"

type FilterReqProps = {
  label: string
  renderTrigger: (a: FilterButtonProps) => JSX.Element
}

export type FilterBarProps = {
  children:
    | React.ReactElement<FilterReqProps>
    | Array<React.ReactElement<FilterReqProps>>
  onChange: (state) => void
}

export const FilterBar = ({
  children,
  onChange,
}: FilterBarProps): JSX.Element => {
  const filters = React.Children.map(children, child => {
    const label = child.props.label
    return {
      label,
      removable:
        child.props.renderTrigger({ label }).props?.removeButtonProps !==
        undefined,
    }
  })

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <FilterBarProvider filters={filters} onChange={onChange}>
        {children}
      </FilterBarProvider>
    </div>
  )
}
