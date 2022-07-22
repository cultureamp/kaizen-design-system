import { useState } from "react"

export const useDemographicData = () => {
  const demographics = [
    { id: "id-department", name: "Department" },
    { id: "id-location", name: "Location" },
  ]

  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([])
  const selectedGroups = demographics!.filter(({ id }) =>
    selectedGroupIds.includes(id)
  )

  function isSelected(id: string) {
    return selectedGroupIds.includes(id)
  }

  function addFilter(id: string) {
    if (!isSelected(id)) {
      setSelectedGroupIds(prev => (prev.includes(id) ? prev : [...prev, id]))
    }
  }

  function clearFilters() {
    setSelectedGroupIds([])
  }

  function removeFilter(id: string) {
    setSelectedGroupIds(selectedIds =>
      selectedIds.filter(selected => selected !== id)
    )
  }

  return {
    groups: demographics,
    selectedGroups,
    isSelected,
    addFilter,
    clearFilters,
    removeFilter,
  }
}
