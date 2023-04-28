import React from "react"
import { useFilterBarContext } from "../context/FilterBarContext"

export const FilterClearAllButton = (): JSX.Element => {
  const { clearFilters } = useFilterBarContext()
  return (
    <button type="button" onClick={clearFilters}>
      Clear all
    </button>
  )
}
