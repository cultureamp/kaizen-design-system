import React, { useState } from "react"
import { Selection } from "@react-types/shared"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query"
import { withDesign } from "storybook-addon-designs"
import { Button, ButtonRef } from "@kaizen/button"
import { CodeBlock } from "@kaizen/design-tokens/docs/DocsComponents"
import { Label } from "@kaizen/draft-form"
import { FilterMultiSelect, getSelectedOptionLabels } from "@kaizen/select"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { DemographicMenu } from "./FilterBarExample/DemographicMenu"
import { DemographicValueSelect } from "./FilterBarExample/DemographicValueSelect"
import { useDemographicData } from "./FilterBarExample/useDemographicData"
import { items } from "./MockData"
import styles from "./FilterMultiSelect.stories.scss"

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

export const Loading: ComponentStory<typeof FilterMultiSelect> = args => (
  <>
    <FilterMultiSelect
      {...args}
      isLoading
      isOpen
      loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
      trigger={() => (
        <FilterMultiSelect.TriggerButton
          selectedOptionLabels={["Front-End"]}
          label={args.label}
        />
      )}
    >
      {() => <></>}
    </FilterMultiSelect>
  </>
)

Loading.args = { label: "Engineer" }
Loading.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

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

export const Async: ComponentStory<typeof FilterMultiSelect> = args => {
  const [open, setOpen] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState<string[]>([])
  const [searchState, setSearchState] = useState("")
  const queryClient = useQueryClient()
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      ["startrek-sg1", searchState],
      ({ pageParam = 1 }) =>
        fetch(
          `https://swapi.dev/api/people/?page=${pageParam}&search=${searchState}`
        ).then(res => res.json()) as Promise<{
          results: Array<{ name: string; url: string }>
          next: string
        }>,
      {
        enabled: open,
        keepPreviousData: true,
        getNextPageParam: lastPage => {
          if (!lastPage.next) return undefined
          const url = new URL(lastPage.next)
          const params = new URLSearchParams(url.searchParams)
          return params.get("page")
        },
      }
    )

  /**
   * We need access to the previously fetched people. If a user has selected a
   * particular person and then searched to no longer return that person, we have
   * only the selected keys to work with, no renderable values.
   */
  const cachedPeople = queryClient
    .getQueriesData<{
      pages: { results: Array<{ name: string; url: string }> }
    }>(["startrek-sg1"])
    .flatMap(([, cachedData]) => cachedData?.pages ?? [])
    .flatMap(page => page.results)
    .map(item => ({ label: item.name, value: item.url }))

  const currentPeople = React.useMemo(
    () =>
      data?.pages
        .flatMap(res => res.results)
        .flatMap(person => ({ label: person.name, value: person.url })) || [],
    [data]
  )

  return (
    <>
      <FilterMultiSelect
        {...args}
        isLoading={isLoading}
        loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
        items={currentPeople}
        trigger={() => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              new Set(selectedPeople),
              cachedPeople
            )}
            label={"People"}
          />
        )}
        onSearchInputChange={searchInput => setSearchState(searchInput)}
        onOpenChange={isOpen => setOpen(isOpen)}
        onSelectionChange={keys => {
          if (keys === "all") {
            return
          }
          setSelectedPeople(Array.from(keys) as string[])
        }}
        isOpen={open}
        selectedKeys={new Set(selectedPeople)}
      >
        {() => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ allItems }) => (
                <>
                  {allItems.map(item => (
                    <FilterMultiSelect.Option key={item.key} item={item} />
                  ))}
                  {hasNextPage && (
                    <FilterMultiSelect.LoadMoreButton
                      label={"View more"}
                      workingLabel={"Loading…"}
                      working={isFetchingNextPage}
                      onClick={() => fetchNextPage()}
                    />
                  )}
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
    </>
  )
}
