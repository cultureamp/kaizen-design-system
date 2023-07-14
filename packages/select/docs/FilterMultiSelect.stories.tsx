import React, { useState } from "react"
import { Selection } from "@react-types/shared"
import { Decorator, Meta, StoryFn } from "@storybook/react"
import {
  QueryClientProvider,
  QueryClient,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query"
import isChromatic from "chromatic"
import { InlineNotification } from "@kaizen/notification"
import { Label } from "../../../draft-packages/form"
import { Button, ButtonRef } from "../../button"
import { CodeBlock } from "../../design-tokens/docs/DocsComponents"
import { Paragraph } from "../../typography"
import { FilterMultiSelectProps } from "../src/FilterMultiSelect/components/Root"
import { FilterMultiSelect, getSelectedOptionLabels } from ".."
import { DemographicMenu } from "./FilterBarExample/DemographicMenu"
import { DemographicValueSelect } from "./FilterBarExample/DemographicValueSelect"
import { useDemographicData } from "./FilterBarExample/useDemographicData"
import { mockItems } from "./MockData"
import styles from "./FilterMultiSelect.stories.scss"

const IS_CHROMATIC = isChromatic()

const client = new QueryClient()

const withQueryProvider: Decorator<FilterMultiSelectProps> = Story => (
  <QueryClientProvider client={client}>
    <Story />
  </QueryClientProvider>
)

export default {
  tags: ["autodocs"],
  title: "Components/Filter Multi-Select",
  component: FilterMultiSelect,
  parameters: {
    docs: {
      source: { type: "code" },
      description: {
        component: 'import { FilterMultiSelect } from "@kaizen/select".',
      },
    },
  },
} satisfies Meta<typeof FilterMultiSelect>

export const DefaultKaizenSiteDemo: StoryFn<
  typeof FilterMultiSelect
> = args => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection): void => setSelectedKeys(keys)

  return (
    <>
      <FilterMultiSelect
        {...args}
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={mockItems}
        trigger={(): JSX.Element => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              selectedKeys,
              mockItems
            )}
            label={args.label}
          />
        )}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ allItems, hasNoItems }): JSX.Element | JSX.Element[] => {
                if (hasNoItems) {
                  return (
                    <FilterMultiSelect.NoResults>
                      No results found.
                    </FilterMultiSelect.NoResults>
                  )
                }

                return allItems.map(item => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ))
              }}
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
        <CodeBlock language="json" code={JSON.stringify(mockItems, null, 2)} />
      </div>
    </>
  )
}
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"
DefaultKaizenSiteDemo.args = { label: "Engineer" }

export const Loading: StoryFn<typeof FilterMultiSelect> = args => (
  <>
    <FilterMultiSelect
      {...args}
      isLoading
      isOpen={IS_CHROMATIC || undefined}
      loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
      trigger={(): JSX.Element => (
        <FilterMultiSelect.TriggerButton
          selectedOptionLabels={["Front-End"]}
          label={args.label}
        />
      )}
    >
      {(): JSX.Element => <></>}
    </FilterMultiSelect>
  </>
)
Loading.args = { label: "Engineer" }
Loading.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const WithSections: StoryFn<typeof FilterMultiSelect> = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection): void => setSelectedKeys(keys)

  return (
    <>
      <FilterMultiSelect
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={mockItems}
        label="Engineer"
        trigger={(): JSX.Element => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              selectedKeys,
              mockItems
            )}
            label="Engineer"
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
                    (selectedItems.length > 0 ||
                      unselectedItems.length > 0) && (
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
      <div style={{ marginTop: 4 }}>
        <Paragraph variant="body">Items: </Paragraph>
        <CodeBlock
          language="json"
          code={JSON.stringify(mockItems, null, "\t")}
        />
      </div>
    </>
  )
}

export const TruncatedLabels: StoryFn<typeof FilterMultiSelect> = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )
  const [characterLimit, setCharacterLimit] = useState<number>(50)

  const handleSelectionChange = (keys: Selection): void => setSelectedKeys(keys)

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
        items={mockItems}
        trigger={(): JSX.Element => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              selectedKeys,
              mockItems
            )}
            label="Engineer"
            labelCharacterLimitBeforeTruncate={characterLimit}
          />
        )}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ allItems, hasNoItems }): JSX.Element | JSX.Element[] => {
                if (hasNoItems) {
                  return (
                    <FilterMultiSelect.NoResults>
                      No results found.
                    </FilterMultiSelect.NoResults>
                  )
                }
                return allItems.map(item => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ))
              }}
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

export const FilterBarDemo = (): JSX.Element => {
  const {
    groups,
    selectedGroups,
    addFilter,
    clearFilters,
    isSelected,
    removeFilter,
  } = useDemographicData()

  const addFilterButtonRef = React.useRef<ButtonRef>()
  const focusAddFilter = (): void => {
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
              key={id}
              label={name}
              selectedKeys={new Set(selectedDemographicValues[id])}
              id={id}
              onRemove={(): void => {
                focusAddFilter()

                // exclude demographic from both selectedGroups and selectedDemographicValues
                removeFilter(id)
                const { [id]: _omitted, ...rest } = selectedDemographicValues
                setSelectedDemographicValues(rest)
              }}
              onSelectionChange={(selectedKeys): void => {
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

      <Paragraph tag="div" variant="body">
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

export const DefaultKaizenSiteDemoWithoutScrollbar = (): JSX.Element => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection): void => {
    keys && setSelectedKeys(keys)
  }

  return (
    <FilterMultiSelect
      label="Engineer"
      onSelectionChange={handleSelectionChange}
      selectedKeys={selectedKeys}
      items={mockItems.slice(0, 3)}
      trigger={(): JSX.Element => (
        <FilterMultiSelect.TriggerButton
          selectedOptionLabels={getSelectedOptionLabels(
            selectedKeys,
            mockItems
          )}
          label="Engineer"
        />
      )}
    >
      {(): JSX.Element => (
        <>
          <FilterMultiSelect.SearchInput />
          <FilterMultiSelect.ListBox>
            {({ allItems, hasNoItems }): JSX.Element | JSX.Element[] => {
              if (hasNoItems) {
                return (
                  <FilterMultiSelect.NoResults>
                    No results found.
                  </FilterMultiSelect.NoResults>
                )
              }
              return allItems.map(item => (
                <FilterMultiSelect.Option key={item.key} item={item} />
              ))
            }}
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

export const Async: StoryFn<typeof FilterMultiSelect> = args => {
  const [open, setOpen] = useState(false)
  const [selectedPeople, setSelectedPeople] = useState<string[]>([])
  const [searchState, setSearchState] = useState("")
  const queryClient = useQueryClient()
  const {
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isRefetching,
  } = useInfiniteQuery(
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

  /**
   * To expose the selected items and float them to the top we need to merge the current
   * and cached people, to be passed as the items.
   * Make sure we remove the duplicates.
   */
  const mergedPeople = [...currentPeople, ...cachedPeople].filter(
    (item, index, a) =>
      a.findIndex(currItem => currItem.value === item.value) === index
  )

  /**
   * Only show the current filtered people when there is a search query
   */
  const items = searchState !== "" ? currentPeople : Array.from(mergedPeople)

  const filteredCount = currentPeople.length
  const totalCount = cachedPeople.length

  return (
    <>
      <FilterMultiSelect
        {...args}
        isLoading={isLoading}
        loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
        items={items}
        trigger={(): JSX.Element => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              new Set(selectedPeople),
              cachedPeople
            )}
            label="People"
          />
        )}
        onSearchInputChange={setSearchState}
        onOpenChange={setOpen}
        onSelectionChange={(keys): void => {
          if (keys === "all") {
            return
          }
          setSelectedPeople(Array.from(keys) as string[])
        }}
        isOpen={open}
        selectedKeys={new Set(selectedPeople)}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.SearchInput
              isLoading={isRefetching && searchState !== ""}
            />
            <FilterMultiSelect.ListBox>
              {({
                selectedItems,
                unselectedItems,
                hasNoItems,
              }): JSX.Element => (
                <>
                  {hasNoItems ? (
                    <FilterMultiSelect.NoResults>
                      No results found for {searchState}.
                    </FilterMultiSelect.NoResults>
                  ) : searchState !== "" ? (
                    <Paragraph
                      classNameOverride={styles.helperMessage}
                      variant="extra-small"
                      tag="span"
                      color="dark-reduced-opacity"
                    >
                      Showing {filteredCount} of {totalCount}
                    </Paragraph>
                  ) : (
                    hasNextPage && (
                      <Paragraph
                        classNameOverride={styles.helperMessage}
                        variant="extra-small"
                        tag="span"
                        color="dark-reduced-opacity"
                      >
                        There are a lot of options. Narrow them further by
                        searching for a more precise term.
                      </Paragraph>
                    )
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
                  {hasNextPage && (
                    <FilterMultiSelect.LoadMoreButton
                      label="View more"
                      workingLabel="Loading…"
                      working={isFetchingNextPage}
                      onClick={(): ReturnType<typeof fetchNextPage> =>
                        fetchNextPage()
                      }
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
Async.decorators = [withQueryProvider]

export const withSectionHeader: StoryFn<typeof FilterMultiSelect> = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["id-fe"])
  )

  const handleSelectionChange = (keys: Selection): void => setSelectedKeys(keys)

  return (
    <>
      <FilterMultiSelect
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={mockItems}
        label="Engineer"
        trigger={(): JSX.Element => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              selectedKeys,
              mockItems
            )}
            label="Engineer"
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
                    sectionHeader={
                      <InlineNotification
                        type="cautionary"
                        persistent
                        noBottomMargin
                        headingProps={{
                          tag: "span",
                          variant: "heading-5",
                          children: "Confidentiality protection",
                        }}
                      >
                        Results for these filters are hidden to protect
                        identities of individuals and small grounds
                      </InlineNotification>
                    }
                    sectionName="Unselected items"
                  >
                    {(item): JSX.Element => (
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
      <div style={{ marginTop: 4 }}>
        <Paragraph variant="body">Items: </Paragraph>
        <CodeBlock
          language="json"
          code={JSON.stringify(mockItems, null, "\t")}
        />
      </div>
    </>
  )
}
