import React, { Key, useEffect, useState } from "react"
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
  selectedKeys: Set<Key>
}

export const DemographicValueSelect = ({
  id,
  label,
  onRemove,
  onSelectionChange,
  selectedKeys,
}: DemograhicValueSelectProps) => {
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
            {({ selectedItems, unselectedItems, disabledItems }) => (
              <>
                <FilterMultiSelect.ListBoxSection section={selectedItems}>
                  {selectedItem => (
                    <FilterMultiSelect.Option
                      key={selectedItem.key}
                      item={selectedItem}
                    />
                  )}
                </FilterMultiSelect.ListBoxSection>
                <FilterMultiSelect.ListBoxSection section={unselectedItems}>
                  {selectedItem => (
                    <FilterMultiSelect.Option
                      key={selectedItem.key}
                      item={selectedItem}
                    />
                  )}
                </FilterMultiSelect.ListBoxSection>
                <FilterMultiSelect.ListBoxSection section={disabledItems}>
                  {selectedItem => (
                    <FilterMultiSelect.Option
                      key={selectedItem.key}
                      item={selectedItem}
                    />
                  )}
                </FilterMultiSelect.ListBoxSection>
              </>
            )}
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
