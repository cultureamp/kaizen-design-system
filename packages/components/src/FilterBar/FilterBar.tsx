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
  const filters = React.Children.toArray(children).reduce((acc, child) => {
    if (React.isValidElement(child)) {
      const label = child.props.label
      acc[label] = {
        label,
        removable:
          child.props.renderTrigger({ label }).props?.removeButtonProps !==
          undefined,
      }
    }
    return acc
  }, {})

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <FilterBarProvider filters={filters} onChange={onChange}>
        {children}
      </FilterBarProvider>
    </div>
  )
}
