import React, { useState } from "react"
import { ComponentMeta } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Selection } from "@react-types/shared"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { SelectionProviderContextType } from "../src/FilterSelect/provider/SelectionProvider"
import { ItemType } from "../src/FilterSelect/type"
import { FilterSelect } from "../src/FilterSelect/FilterSelect"

export default {
  title: `${CATEGORIES.components}/Filter Select`,
  component: FilterSelect,
  parameters: {
    docs: {
      description: {
        component: 'import { FilterSelect } from "@kaizen/filter-select".',
      },
    },
    ...figmaEmbed(
      "REPLACE_THIS_WITH_FIGMA_URL"
    ) /** @todo: Replace with Figma frame url */,
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterSelect>

const items: ItemType[] = [
  { label: "Front-End", value: "id-fe", count: "12" },
  { label: "Back-End", value: "id-be", count: "4" },
  { label: "Site reliability", value: "id-sre" },
]

const getLabels = (keys?: Selection) => {
  if (!keys) {
    return ""
  }

  if (keys === "all") {
    return items.map(item => item.label).join(", ")
  }

  return Array.from(keys)
    .map(key => items.find(item => item.value === key)?.label)
    .filter(item => item)
    .join(", ")
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
      <FilterSelect.SearchInput label="Search label" />
      <FilterSelect.ListBox>
        {(item, selectionState) => (
          <FilterSelect.MultiSelectOption
            key={item.key}
            item={item}
            state={selectionState}
          />
        )}
      </FilterSelect.ListBox>
      <FilterSelect.MenuFooter>
        <FilterSelect.SelectAllButton />
        <FilterSelect.ClearButton />
      </FilterSelect.MenuFooter>
    </>
  )

  return (
    <div style={{ display: "inline-flex", gap: 6 }}>
      {/* Not Removable */}
      {/* <FilterSelect
        defaultOpen
        label="Engineer"
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={items}
        trigger={_ => (
          <FilterSelect.TriggerButton
            hasSelectedValues={Array.from(selectedKeys).length > 0}
          >{`Engineer: ${getLabels(selectedKeys)}`}</FilterSelect.TriggerButton>
        )}
      >
        {MenuContent}
      </FilterSelect> */}
      {/* Removable */}
      <FilterSelect
        label="Engineer"
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={items}
        trigger={_ => (
          <FilterSelect.TriggerButton
            isRemovalbe
            hasSelectedValues={Array.from(selectedKeys).length > 0}
          >{`Engineer: ${getLabels(selectedKeys)}`}</FilterSelect.TriggerButton>
        )}
      >
        {MenuContent}
      </FilterSelect>
    </div>
  )
}
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
