import React, { useEffect } from "react"
import { FilterButtonProps } from ".."
import { FilterBarProvider } from "./context/FilterBarContext"

type FilterReqProps = {
  label: string
  renderTrigger: (a: FilterButtonProps) => JSX.Element
}

export type FilterBarProps = {
  children: React.ReactElement<FilterReqProps> | Array<React.ReactElement<FilterReqProps>>
  onChange: (state) => void
}

export const FilterBar = ({ children, onChange }: FilterBarProps): JSX.Element => {
  // const filters = React.Children.map(children, (child) => React.isValidElement(child) && child.props?.label)
  const filters = React.Children.map(children, child => {
    console.log("child", child)
    const label = child.props.label
    return ({
      label,
      removable: child.props.renderTrigger({ label }).props?.removeButtonProps !== undefined
    })
  })

  useEffect(() => {
    onChange(filters)
  }, [])

  return (
  <div style={{ display: "flex", gap: "1rem" }}>
    <FilterBarProvider
      value={{
        state: filters,
        onChange,
      }}
    >
      {children}
    </FilterBarProvider>
  </div>
)
  }
