import React, { Key, useEffect, useState } from "react"
import { Selection } from "@react-types/shared"
import {
  FilterMultiSelect,
  getSelectedOptionKeys,
  getSelectedOptionLabels,
} from "../../"
import { ItemType } from "../../types"
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
}: DemograhicValueSelectProps): JSX.Element => {
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

  const demographicValueOptions: Key[] = demographicValueItems.map(
    item => item.value
  )
  // Mock loading
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const handleSelectionChange = (keys: Selection): void => {
    onSelectionChange(getSelectedOptionKeys(keys, demographicValueItems))
  }

  return (
    <FilterMultiSelect
      defaultOpen
      isLoading={isLoading}
      loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
      label={label}
      items={demographicValueItems}
      defaultSelectedKeys={new Set(demographicValueOptions)}
      onSelectionChange={handleSelectionChange}
      trigger={(): JSX.Element => (
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
      {(): JSX.Element => (
        <>
          <FilterMultiSelect.SearchInput />
          <FilterMultiSelect.ListBox>
            {({
              selectedItems,
              unselectedItems,
              disabledItems,
              hasNoItems,
            }): JSX.Element => (
              <>
                {hasNoItems && (
                  <FilterMultiSelect.NoResults>
                    No results found.
                  </FilterMultiSelect.NoResults>
                )}
                <FilterMultiSelect.ListBoxSection
                  items={selectedItems}
                  sectionName="Selected items"
                >
                  {(item): JSX.Element => (
                    <FilterMultiSelect.Option key={item.key} item={item} />
                  )}
                </FilterMultiSelect.ListBoxSection>
                {unselectedItems.length > 0 && selectedItems.length > 0 && (
                  <FilterMultiSelect.SectionDivider />
                )}
                <FilterMultiSelect.ListBoxSection
                  items={unselectedItems}
                  sectionName="Unselected items"
                >
                  {(item): JSX.Element => (
                    <FilterMultiSelect.Option key={item.key} item={item} />
                  )}
                </FilterMultiSelect.ListBoxSection>

                {disabledItems.length > 0 &&
                  (selectedItems.length > 0 || unselectedItems.length > 0) && (
                    <FilterMultiSelect.SectionDivider />
                  )}
                <FilterMultiSelect.ListBoxSection
                  items={disabledItems}
                  sectionName="Disabled items"
                >
                  {(item): JSX.Element => (
                    <FilterMultiSelect.Option key={item.key} item={item} />
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
