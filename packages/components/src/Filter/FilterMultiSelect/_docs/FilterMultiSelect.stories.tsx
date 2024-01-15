import React, { useState } from "react"
import { Selection } from "@react-types/shared"
import { Decorator, Meta, StoryObj } from "@storybook/react"
import {
  QueryClientProvider,
  QueryClient,
  useInfiniteQuery,
  useQueryClient,
  keepPreviousData,
} from "@tanstack/react-query"
import isChromatic from "chromatic"
import { InlineNotification } from "~components/Notification"
import { Text } from "~components/Text"
import { TextField } from "~components/TextField"
import { FilterMultiSelect, getSelectedOptionLabels } from ".."
import { mockItems } from "./MockData"
import styles from "./FilterMultiSelect.stories.scss"

const IS_CHROMATIC = isChromatic()

const client = new QueryClient()

const withQueryProvider: Decorator = Story => (
  <QueryClientProvider client={client}>
    <Story />
  </QueryClientProvider>
)

const meta = {
  title: "Components/Filter Multi-Select",
  component: FilterMultiSelect,
  parameters: {
    docs: {
      source: { type: "code" },
    },
  },
  args: {
    label: "Engineer",
    items: mockItems,
    selectedKeys: new Set(["id-fe"]),
    trigger: (): JSX.Element => (
      <FilterMultiSelect.TriggerButton
        selectedOptionLabels={["Front-End"]}
        label="Engineer"
      />
    ),
    children: (): JSX.Element => (
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
    ),
  },
} satisfies Meta<typeof FilterMultiSelect>

export default meta

type Story = StoryObj<typeof meta>

const FilterMultiSelectTemplate: Story = {
  render: args => {
    const [selectedKeys, setSelectedKeys] = useState<Selection | undefined>(
      args.selectedKeys
    )

    return (
      <FilterMultiSelect
        {...args}
        onSelectionChange={setSelectedKeys}
        selectedKeys={selectedKeys}
        trigger={(): JSX.Element => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(
              selectedKeys,
              args.items
            )}
            label={args.label}
          />
        )}
      />
    )
  },
}

export const Playground: Story = {
  ...FilterMultiSelectTemplate,
}

export const Loading: Story = {
  args: {
    isLoading: true,
    isOpen: IS_CHROMATIC || undefined,
    loadingSkeleton: <FilterMultiSelect.MenuLoadingSkeleton />,
  },
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
}

export const TruncatedLabels: Story = {
  render: args => {
    const [selectedKeys, setSelectedKeys] = useState<Selection | undefined>(
      args.selectedKeys
    )
    const [characterLimit, setCharacterLimit] = useState<number>(50)

    const handleCharacterLimitChange: React.ChangeEventHandler<
      HTMLInputElement
    > = e => setCharacterLimit(+e.target.value)

    return (
      <>
        <TextField
          labelText="Character limit"
          onChange={handleCharacterLimitChange}
          value={characterLimit}
          classNameOverride="mb-24"
        />
        <FilterMultiSelect
          {...args}
          onSelectionChange={setSelectedKeys}
          selectedKeys={selectedKeys}
          trigger={(): JSX.Element => (
            <FilterMultiSelect.TriggerButton
              selectedOptionLabels={getSelectedOptionLabels(
                selectedKeys,
                mockItems
              )}
              label={args.label}
              labelCharacterLimitBeforeTruncate={characterLimit}
            />
          )}
        />
      </>
    )
  },
}

export const WithNoScrollbar: Story = {
  ...FilterMultiSelectTemplate,
  args: {
    items: mockItems.slice(0, 3),
  },
}

export const Async: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [selectedPeople, setSelectedPeople] = useState<string[]>([])
    const [searchState, setSearchState] = useState("")
    const queryClient = useQueryClient()

    const fetchSWAPI = async ({
      pageParam,
    }: {
      pageParam: string
    }): Promise<{
      results: Array<{ name: string; url: string }>
      next: string
    }> => {
      const res = await fetch(
        `https://swapi.dev/api/people/?page=${pageParam}&search=${searchState}`
      )

      return res.json()
    }

    const {
      data,
      isLoading,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage,
      isRefetching,
    } = useInfiniteQuery({
      enabled: true,
      initialPageParam: "1",
      queryKey: ["startrek-sg1", searchState],
      queryFn: fetchSWAPI,
      placeholderData: keepPreviousData,
      getNextPageParam: lastPage => {
        if (!lastPage.next) return undefined
        const url = new URL(lastPage.next)
        const params = new URLSearchParams(url.searchParams)
        return params.get("page")
      },
    })

    type QueriesData = {
      pages: { results: Array<{ name: string; url: string }> }
    }

    /**
     * We need access to the previously fetched people. If a user has selected a
     * particular person and then searched to no longer return that person, we have
     * only the selected keys to work with, no renderable values.
     */
    const cachedPeople = queryClient
      .getQueriesData<QueriesData>({ queryKey: ["startrek-sg1"] })
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
          label="People"
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
                      <Text
                        classNameOverride={styles.helperMessage}
                        variant="extra-small"
                        tag="span"
                        color="dark-reduced-opacity"
                      >
                        Showing {filteredCount} of {totalCount}
                      </Text>
                    ) : (
                      hasNextPage && (
                        <Text
                          classNameOverride={styles.helperMessage}
                          variant="extra-small"
                          tag="span"
                          color="dark-reduced-opacity"
                        >
                          There are a lot of options. Narrow them further by
                          searching for a more precise term.
                        </Text>
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
  },
  decorators: [withQueryProvider],
}

export const WithSections: Story = {
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    children: (): JSX.Element => (
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
    ),
  },
  parameters: {
    chromatic: { disable: false },
  },
}

export const WithSectionHeaders: Story = {
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    children: (): JSX.Element => (
      <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({
            selectedItems,
            unselectedItems,
            disabledItems,
            hasNoItems,
          }): JSX.Element =>
            hasNoItems ? (
              <FilterMultiSelect.NoResults>
                No results found.
              </FilterMultiSelect.NoResults>
            ) : (
              <>
                {selectedItems.length > 0 && (
                  <FilterMultiSelect.ListBoxSection
                    items={selectedItems}
                    sectionHeader="Selected items"
                  >
                    {(item): JSX.Element => (
                      <FilterMultiSelect.Option key={item.key} item={item} />
                    )}
                  </FilterMultiSelect.ListBoxSection>
                )}

                {unselectedItems.length > 0 && (
                  <FilterMultiSelect.ListBoxSection
                    items={unselectedItems}
                    sectionHeader="Unselected items"
                  >
                    {(item): JSX.Element => (
                      <FilterMultiSelect.Option key={item.key} item={item} />
                    )}
                  </FilterMultiSelect.ListBoxSection>
                )}

                {disabledItems.length > 0 && (
                  <FilterMultiSelect.ListBoxSection
                    items={disabledItems}
                    sectionHeader="Disabled items"
                  >
                    {(item): JSX.Element => (
                      <FilterMultiSelect.Option key={item.key} item={item} />
                    )}
                  </FilterMultiSelect.ListBoxSection>
                )}
              </>
            )
          }
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
    ),
  },
  parameters: {
    chromatic: { disable: false },
  },
}

export const WithSectionNotification: Story = {
  ...FilterMultiSelectTemplate,
  args: {
    isOpen: IS_CHROMATIC || undefined,
    children: (): JSX.Element => (
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
              {hasNoItems ? (
                <FilterMultiSelect.NoResults>
                  No results found.
                </FilterMultiSelect.NoResults>
              ) : (
                <>
                  {selectedItems.length > 0 && (
                    <FilterMultiSelect.ListBoxSection
                      items={selectedItems}
                      sectionHeader="Selected items"
                    >
                      {(item): JSX.Element => (
                        <FilterMultiSelect.Option key={item.key} item={item} />
                      )}
                    </FilterMultiSelect.ListBoxSection>
                  )}

                  {unselectedItems.length > 0 && (
                    <FilterMultiSelect.ListBoxSection
                      items={unselectedItems}
                      sectionHeader="Unselected items"
                    >
                      {(item): JSX.Element => (
                        <FilterMultiSelect.Option key={item.key} item={item} />
                      )}
                    </FilterMultiSelect.ListBoxSection>
                  )}

                  {disabledItems.length > 0 && (
                    <FilterMultiSelect.ListBoxSection
                      items={disabledItems}
                      sectionHeader={
                        <>
                          <span className="mb-6">Disabled items</span>
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
                            identities of individuals and small groups
                          </InlineNotification>
                        </>
                      }
                    >
                      {(item): JSX.Element => (
                        <FilterMultiSelect.Option key={item.key} item={item} />
                      )}
                    </FilterMultiSelect.ListBoxSection>
                  )}
                </>
              )}
            </>
          )}
        </FilterMultiSelect.ListBox>
        <FilterMultiSelect.MenuFooter>
          <FilterMultiSelect.SelectAllButton />
          <FilterMultiSelect.ClearButton />
        </FilterMultiSelect.MenuFooter>
      </>
    ),
  },
  parameters: {
    chromatic: { disable: false },
  },
}
