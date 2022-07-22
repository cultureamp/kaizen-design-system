import React, { useState } from "react"
import { ComponentMeta } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Selection } from "@react-types/shared"
import { Button, ButtonRef } from "@kaizen/button"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import {
  FilterMultiSelect,
  getSelectedOptionLabels,
} from "../src/FilterMultiSelect/FilterMultiSelect"
import styles from "./FilterMultiSelect.stories.scss"
import { useDemographicData } from "./FilterBarExample/useDemographicData"
import { DemographicValueSelect } from "./FilterBarExample/DemographicValueSelect"
import { items } from "./MockData"
import { DemographicMenu } from "./FilterBarExample/DemographicMenu"

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

export const DefaultKaizenSiteDemo = args => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection) => {
    keys && setSelectedKeys(keys)
  }

  return (
    <FilterMultiSelect
      label="Engineer"
      onSelectionChange={handleSelectionChange}
      selectedKeys={selectedKeys}
      items={items}
      trigger={() => (
        <FilterMultiSelect.TriggerButton
          selectedOptionLabels={getSelectedOptionLabels(selectedKeys, items)}
          label="Engineer"
        />
      )}
    >
      {() => (
        <>
          <FilterMultiSelect.SearchInput label="Search label" />
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

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

export const FilterBarDemo = args => {
  const {
    groups,
    selectedGroups,
    addFilter,
    clearFilters,
    isSelected,
    removeFilter,
  } = useDemographicData()

  const addFilterButtonRef = React.useRef<ButtonRef>()
  const focusAddFilter = () => {
    addFilterButtonRef.current?.focus()
  }

  const [selectedDemographicValues, setSelectedDemographicValues] = useState<{
    [demographicId: string]: React.Key[]
  }>({})

  return (
    <>
      <div className={styles.row}>
        {selectedGroups.map(({ name, id }) => (
          <DemographicValueSelect
            label={name}
            id={id}
            onRemove={() => {
              focusAddFilter()

              // exclude demographic from both selectedGroups and selectedDemographicValues
              removeFilter(id)
              const { [id]: omitted, ...rest } = selectedDemographicValues
              setSelectedDemographicValues(rest)
            }}
            onSelectionChange={selectedKeys => {
              setSelectedDemographicValues({
                ...selectedDemographicValues,
                [id]: selectedKeys,
              })
            }}
          />
        ))}
        <DemographicMenu
          isAddFilterDisabled={selectedGroups.length >= groups.length}
          addFilterButtonRef={addFilterButtonRef}
          groups={groups}
          isSelected={isSelected}
          addFilter={addFilter}
        />
        <Button
          classNameOverride={styles.clearAllButton}
          label="Clear All"
          onClick={clearFilters}
          secondary
        />
      </div>
      <Paragraph variant={"body"}>
        Selected Values: {JSON.stringify(selectedDemographicValues)}
      </Paragraph>
    </>
  )
}

FilterBarDemo.storyName = "Advanced FilterBar Demo"

// add filterbar example there
