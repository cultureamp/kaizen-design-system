import React, { useEffect, useState } from "react"
import { ComponentMeta } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Selection } from "@react-types/shared"
import { Button, ButtonRef } from "@kaizen/button"
import addWhiteIcon from "@kaizen/component-library/icons/add-white.icon.svg"
import { Menu, MenuItem, MenuList } from "@kaizen/draft-menu"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { ItemType } from "../src/FilterMultiSelect"
import {
  FilterMultiSelect,
  getSelectedOptionLabels,
} from "../src/FilterMultiSelect/FilterMultiSelect"
import { LoadingInput, LoadingParagraph } from "../../loading-skeleton"
import { getSelectedOptionKeys } from "../src/FilterMultiSelect/utils"
import styles from "./FilterMultiSelect.stories.scss"

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
  { label: "Front-End", value: "id-fe", count: "1245" },
  { label: "Back-End", value: "id-be", count: "4" },
  { label: "SRE", value: "id-sre" },
  { label: "Dev-ops", value: "id-devops" },
  { label: "Others", value: "id-others" },
  {
    label: "Engineer-type-1 has a really really long label",
    value: "id-type-1",
  },
  {
    label: "Engineer-type-2 also has a really really long label",
    value: "id-type-2",
    count: "156",
  },
  { label: "Engineer-type-3", value: "id-type-3" },
  { label: "Engineer-type-4", value: "id-type-4" },
  { label: "Engineer-type-5", value: "id-type-5" },
]

const loadingSkeleton = (
  <div>
    <LoadingInput classNameOverride={styles.loadingInput} />
    <LoadingParagraph />
    <LoadingParagraph />
    <LoadingParagraph />
    <LoadingParagraph />
    <LoadingParagraph />
    <FilterMultiSelect.MenuFooter>
      <LoadingParagraph classNameOverride={styles.loadingControlButtons} />
    </FilterMultiSelect.MenuFooter>
  </div>
)
export const DefaultKaizenSiteDemo = args => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection) => {
    keys && setSelectedKeys(keys)
  }

  return (
    <FilterMultiSelect
      loadingSkeleton={loadingSkeleton}
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

function useDemographicData() {
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

        <Menu
          button={
            <Button
              disabled={selectedGroups.length >= groups.length} // TOOD: Kaizen button actually add disabled attributes, do we want to use it?
              ref={addFilterButtonRef}
              icon={addWhiteIcon}
              label="Add filter"
              secondary
            />
          }
        >
          <MenuList>
            {groups
              .filter(group => !isSelected(group.id))
              .map(group => (
                <MenuItem
                  label={group.name}
                  key={group.id}
                  onClick={() => addFilter(group.id)}
                />
              ))}
          </MenuList>
        </Menu>
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

interface DemograhicValueSelectProps {
  label: string
  onRemove: () => void
  onSelectionChange: (selectedKeys: React.Key[]) => void
  id: string
}

function DemographicValueSelect({
  id,
  label,
  onRemove,
  onSelectionChange,
}: DemograhicValueSelectProps): JSX.Element {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())

  const demographicValues =
    id === "id-department"
      ? [
          {
            demographicValueId: "id-fe",
            label: "Front-End",
          },
          {
            demographicValueId: "id-be",
            label: "Back-End",
          },
          {
            demographicValueId: "id-sre",
            label: "SRE",
          },
        ]
      : [
          {
            demographicValueId: "id-mel",
            label: "Melbourne",
          },
          {
            demographicValueId: "id-sfo",
            label: "San Francisco",
          },
          {
            demographicValueId: "id-nyc",
            label: "New York",
          },
          {
            demographicValueId: "id-lhr",
            label: "London",
          },
        ]

  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000) // mimic loading
  }, [])

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys)
    onSelectionChange(getSelectedOptionKeys(keys, demographicValueItems))
  }

  const demographicValueItems: ItemType[] =
    demographicValues?.map(
      ({ demographicValueId, label: demographicValueLabel }) => ({
        value: demographicValueId,
        label: demographicValueLabel,
      })
    ) ?? []

  return (
    <FilterMultiSelect
      defaultOpen
      isLoading={isLoading}
      loadingSkeleton={loadingSkeleton}
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
FilterBarDemo.storyName = "Advanced FilterBar Demo"

// add filterbar example there
