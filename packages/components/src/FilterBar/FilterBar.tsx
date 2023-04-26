import React, { useEffect } from "react"
import { FilterBarProvider } from "./context/FilterBarContext"

export type FilterBarProps = {
  children: React.ReactElement<{ label: string }> | Array<React.ReactElement<{ label: string }>>
  onChange: (state) => void
}

export const FilterBar = ({ children, onChange }: FilterBarProps): JSX.Element => {
  // const filters = React.Children.map(children, (child) => React.isValidElement(child) && child.props?.label)
  const filters = React.Children.map(children, child => {
    console.log("child", child)
    return ({ label: child.props.label })
  })

  useEffect(() => {
    onChange(filters)
  }, [])

  return (
  <div>
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
