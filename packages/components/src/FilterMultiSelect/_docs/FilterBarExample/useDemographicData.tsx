import { useState } from "react"

type DemographicData = {
  groups: Array<{ id: string; name: string }>
  selectedGroups: Array<{ id: string; name: string }>
  isSelected: (id: string) => boolean
  addFilter: (id: string) => void
  clearFilters: () => void
  removeFilter: (id: string) => void
}

export const useDemographicData = (): DemographicData => {
  const demographics = [
    { id: "id-department", name: "Department" },
    { id: "id-location", name: "Location" },
  ]

  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([])

  // reserve the selection order
  const selectedGroups = selectedGroupIds.map(
    groupId => demographics!.find(({ id }) => id === groupId)!
  )

  function isSelected(id: string): boolean {
    return selectedGroupIds.includes(id)
  }

  function addFilter(id: string): void {
    if (!isSelected(id)) {
      setSelectedGroupIds(prev => (prev.includes(id) ? prev : [...prev, id]))
    }
  }

  function clearFilters(): void {
    setSelectedGroupIds([])
  }

  function removeFilter(id: string): void {
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
