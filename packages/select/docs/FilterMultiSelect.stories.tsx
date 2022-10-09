import React, { useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Selection } from "@react-types/shared"
import { Button, ButtonRef } from "@kaizen/button"
import { Paragraph } from "@kaizen/typography"
import { FilterMultiSelect, getSelectedOptionLabels } from "@kaizen/select"
import { Label } from "@kaizen/draft-form"
import { CodeBlock } from "@kaizen/design-tokens/docs/DocsComponents"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import styles from "./FilterMultiSelect.stories.scss"
import { useDemographicData } from "./FilterBarExample/useDemographicData"
import { DemographicValueSelect } from "./FilterBarExample/DemographicValueSelect"
import { items } from "./MockData"
import { DemographicMenu } from "./FilterBarExample/DemographicMenu"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.select}/Filter Multi-Select`,
  component: FilterMultiSelect,
  parameters: {
    docs: {
      source: { type: "code" },
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

export const DefaultKaizenSiteDemo: ComponentStory<
  typeof FilterMultiSelect
> = args => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection) => setSelectedKeys(keys)

  return (
    <>
      <FilterMultiSelect
        {...args}
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={items}
        trigger={() => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(selectedKeys, items)}
            label={args.label}
          />
        )}
      >
        {() => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ allItems }) =>
                allItems.map(item => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ))
              }
            </FilterMultiSelect.ListBox>
            <FilterMultiSelect.MenuFooter>
              <FilterMultiSelect.SelectAllButton />
              <FilterMultiSelect.ClearButton />
            </FilterMultiSelect.MenuFooter>
          </>
        )}
      </FilterMultiSelect>
      <div style={{ marginTop: 4 }}>
        <Paragraph variant="body">Items: </Paragraph>{" "}
        <CodeBlock language="json" code={JSON.stringify(items, null, "\t")} />
      </div>
    </>
  )
}

DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = { label: "Engineer" }

export const WithSections: ComponentStory<typeof FilterMultiSelect> = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection) => setSelectedKeys(keys)

  return (
    <>
      <FilterMultiSelect
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={items}
        label="Engineer"
        trigger={() => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(selectedKeys, items)}
            label={"Engineer"}
          />
        )}
      >
        {() => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ selectedItems, unselectedItems, disabledItems }) => (
                <>
                  <FilterMultiSelect.ListBoxSection
                    items={selectedItems}
                    sectionName="Selected items"
                  >
                    {item => (
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
                    {item => (
                      <FilterMultiSelect.Option key={item.key} item={item} />
                    )}
                  </FilterMultiSelect.ListBoxSection>

                  {disabledItems.length > 0 &&
                    (selectedItems.length > 0 ||
                      unselectedItems.length > 0) && (
                      <FilterMultiSelect.SectionDivider />
                    )}
                  <FilterMultiSelect.ListBoxSection
                    items={disabledItems}
                    sectionName="Disabled items"
                  >
                    {item => (
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
      <div style={{ marginTop: 4 }}>
        <Paragraph variant={"body"}>Items: </Paragraph>
        <CodeBlock language="json" code={JSON.stringify(items, null, "\t")} />
      </div>
    </>
  )
}

export const TruncatedLabels: ComponentStory<typeof FilterMultiSelect> = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )
  const [characterLimit, setCharacterLimit] = useState<number>(50)

  const handleSelectionChange = (keys: Selection) => setSelectedKeys(keys)

  const handleCharacterLimitChange: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setCharacterLimit(+e.target.value)
  }

  return (
    <>
      <div style={{ marginBottom: "3rem" }}>
        <Label
          labelText="Update character limit: "
          style={{ marginRight: "1rem" }}
        />
        <input
          type="number"
          onChange={handleCharacterLimitChange}
          value={characterLimit}
        />
      </div>
      <FilterMultiSelect
        label="Engineer"
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={items}
        trigger={() => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(selectedKeys, items)}
            label="Engineer"
            labelCharacterLimitBeforeTruncate={characterLimit}
          />
        )}
      >
        {() => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ allItems }) =>
                allItems.map(item => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ))
              }
            </FilterMultiSelect.ListBox>
            <FilterMultiSelect.MenuFooter>
              <FilterMultiSelect.SelectAllButton />
              <FilterMultiSelect.ClearButton />
            </FilterMultiSelect.MenuFooter>
          </>
        )}
      </FilterMultiSelect>
    </>
  )
}

export const FilterBarDemo = () => {
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
        <div className={styles.filters}>
          {selectedGroups.map(({ name, id }) => (
            <DemographicValueSelect
              label={name}
              selectedKeys={new Set(selectedDemographicValues[id])}
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
        </div>
        <Button label="Clear All" onClick={clearFilters} secondary />
      </div>

      <Paragraph variant="body">
        Selected Values:{" "}
        <CodeBlock
          language="json"
          code={JSON.stringify(selectedDemographicValues, null, "\t")}
        />
      </Paragraph>
    </>
  )
}

FilterBarDemo.storyName = "Advanced FilterBar Demo"

export const DefaultKaizenSiteDemoWithoutScrollbar = () => {
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
      items={items.slice(0, 3)}
      trigger={() => (
        <FilterMultiSelect.TriggerButton
          selectedOptionLabels={getSelectedOptionLabels(selectedKeys, items)}
          label="Engineer"
        />
      )}
    >
      {() => (
        <>
          <FilterMultiSelect.SearchInput />
          <FilterMultiSelect.ListBox>
            {({ allItems }) =>
              allItems.map(item => (
                <FilterMultiSelect.Option key={item.key} item={item} />
              ))
            }
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

DefaultKaizenSiteDemoWithoutScrollbar.storyName = "With no scrollbar"

export const WithCustomOnSearchInputChange: ComponentStory<
  typeof FilterMultiSelect
> = args => {
  const [searchState, setSearchState] = useState("")

  return (
    <>
      <FilterMultiSelect
        {...args}
        items={items}
        trigger={() => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={[]}
            label={searchState ? `Searching for ${searchState}` : "Search me"}
          />
        )}
        onSearchInputChange={searchInput => setSearchState(searchInput)}
      >
        {() => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ allItems }) =>
                allItems.map(item => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ))
              }
            </FilterMultiSelect.ListBox>
            <FilterMultiSelect.MenuFooter>
              <FilterMultiSelect.SelectAllButton />
              <FilterMultiSelect.ClearButton />
            </FilterMultiSelect.MenuFooter>
          </>
        )}
      </FilterMultiSelect>
    </>
  )
}
