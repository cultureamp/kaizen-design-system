import React from "react"

export type FilterBarProps = {
  children: React.ReactNode
}

export const FilterBar = ({ children }: FilterBarProps): JSX.Element => (
  <div>{children}</div>
)
