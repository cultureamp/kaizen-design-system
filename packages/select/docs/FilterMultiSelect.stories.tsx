import React, { useState } from "react"
import { ComponentMeta } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Selection } from "@react-types/shared"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { SelectionProviderContextType } from "../src/FilterMultiSelect/provider/SelectionProvider"
import { ItemType } from "../src/FilterMultiSelect/type"
import { FilterMultiSelect } from "../src/FilterMultiSelect/FilterMultiSelect"

export default {
  title: `${CATEGORIES.components}/Select/Filter Multi-Select`,
  component: FilterMultiSelect,
  parameters: {
    docs: {
      description: {
        component: 'import { FilterMultiSelect } from "@kaizen/select".',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=22814%3A96966"
    ),
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterMultiSelect>

const items: ItemType[] = [
  { label: "Front-End", value: "id-fe", count: "12" },
  { label: "Back-End", value: "id-be", count: "4" },
  { label: "SRE", value: "id-sre" },
  { label: "Dev-ops", value: "id-devops" },
  { label: "Others", value: "id-others" },
]

const getLabels = (keys?: Selection): string[] => {
  if (!keys) {
    return []
  }

  if (keys === "all") {
    return items.map(item => item.label)
  }

  return Array.from(keys)
    .map(key => items.find(item => item.value === key)?.label ?? "")
    .filter(item => item !== "")
}

export const DefaultKaizenSiteDemo = args => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection) => {
    keys && setSelectedKeys(keys)
  }

  const MenuContent = (_: SelectionProviderContextType) => (
    <>
      <FilterMultiSelect.SearchInput label="Search label" />
      <FilterMultiSelect.ListBox>
        {(item, selectionState) => (
          <FilterMultiSelect.MultiSelectOption
            key={item.key}
            item={item}
            state={selectionState}
          />
        )}
      </FilterMultiSelect.ListBox>
      <FilterMultiSelect.MenuFooter>
        <FilterMultiSelect.SelectAllButton />
        <FilterMultiSelect.ClearButton />
      </FilterMultiSelect.MenuFooter>
    </>
  )

  return (
    <div style={{ display: "inline-flex", gap: 6 }}>
      <FilterMultiSelect
        defaultOpen
        label="Engineer"
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={items}
        trigger={_ => (
          <FilterMultiSelect.TriggerButton
            selectedLabels={getLabels(selectedKeys)}
            label="Engineer"
          />
        )}
      >
        {MenuContent}
      </FilterMultiSelect>
    </div>
  )
}
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const RemovableDemo = args => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection) => {
    keys && setSelectedKeys(keys)
  }

  const MenuContent = (_: SelectionProviderContextType) => (
    <>
      <FilterMultiSelect.SearchInput label="Search label" />
      <FilterMultiSelect.ListBox>
        {(item, selectionState) => (
          <FilterMultiSelect.MultiSelectOption
            key={item.key}
            item={item}
            state={selectionState}
          />
        )}
      </FilterMultiSelect.ListBox>
      <FilterMultiSelect.MenuFooter>
        <FilterMultiSelect.SelectAllButton />
        <FilterMultiSelect.ClearButton />
      </FilterMultiSelect.MenuFooter>
    </>
  )

  return (
    <FilterMultiSelect
      label="Engineer"
      onSelectionChange={handleSelectionChange}
      selectedKeys={selectedKeys}
      items={items}
      trigger={_ => (
        <FilterMultiSelect.TriggerButton
          isRemovable
          onRemove={() => alert("onRemove")}
          selectedLabels={getLabels(selectedKeys)}
          label="Engineer"
        />
      )}
    >
      {MenuContent}
    </FilterMultiSelect>
  )
}
RemovableDemo.storyName = "Removable"
