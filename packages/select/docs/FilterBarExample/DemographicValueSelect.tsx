import React, { useEffect, useState } from "react"
import { Selection } from "@react-types/shared"
import {
  FilterMultiSelect,
  getSelectedOptionKeys,
  getSelectedOptionLabels,
  ItemType,
} from "../../src/FilterMultiSelect"
import {
  departmentDemographicValues,
  locationDemographicValues,
} from "../MockData"

export interface DemograhicValueSelectProps {
  label: string
  onRemove: () => void
  onSelectionChange: (selectedKeys: React.Key[]) => void
  id: string
}

export const DemographicValueSelect = ({
  id,
  label,
  onRemove,
  onSelectionChange,
}: DemograhicValueSelectProps) => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())

  // Mock data
  const demographicValues =
    id === "id-department"
      ? departmentDemographicValues
      : locationDemographicValues

  const demographicValueItems: ItemType[] =
    demographicValues?.map(
      ({ demographicValueId, label: demographicValueLabel }) => ({
        value: demographicValueId,
        label: demographicValueLabel,
      })
    ) ?? []

  // Mock loading
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys)
    onSelectionChange(getSelectedOptionKeys(keys, demographicValueItems))
  }

  return (
    <FilterMultiSelect
      defaultOpen
      isLoading={isLoading}
      loadingSkeleton={FilterMultiSelect.MenuLoadingSkeleton}
      label={label}
      items={demographicValueItems}
      selectedKeys={selectedKeys}
      onSelectionChange={handleSelectionChange}
      trigger={() => (
        <FilterMultiSelect.RemovableTrigger
          selectedOptionLabels={getSelectedOptionLabels(
            selectedKeys,
            demographicValueItems
          )}
          label={label}
          onRemove={onRemove}
        />
      )}
    >
      {() => (
        <>
          <FilterMultiSelect.SearchInput />
          <FilterMultiSelect.ListBox>
            {item => <FilterMultiSelect.Option key={item.key} item={item} />}
          </FilterMultiSelect.ListBox>
          <FilterMultiSelect.MenuFooter>
            <FilterMultiSelect.SelectAllButton />
            <FilterMultiSelect.ClearButton />
          </FilterMultiSelect.MenuFooter>
        </>
      )}
    </FilterMultiSelect>
  )
}
