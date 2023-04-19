import { FilterMultiSelect, ItemType } from "@kaizen/select"
import React, { useRef } from "react"
import { useInfiniteQuery } from "react-query"
import useDebounce from "use-debounce/lib/useDebounce"
import { useExpandableFilterSelect } from "../hooks/useExpandableFilterSelect"
import { useExpandableFilterState } from "../hooks/useExpandableFilterState"
import { FilterOption, FilterValues, IFilter } from "../types"

type Cursor = {
  next: string | number | null
}

type Response = { options: FilterOption<string | number>[]; cursor: Cursor }

export type Fetch = (
  searchTerm: string,
  cursor: Cursor,
  filterbarValues: FilterValues
) => Promise<Response>

export const ExpandableAsyncSelectBox = ({
  id,
  fetch,
}: {
  id: string
  fetch: Fetch
}) => {
  const { filters, dispatch, values } = useExpandableFilterState()
  const activeFilter = filters.find((f) => f.id === id)
  if (!activeFilter) {
    return null
  }

  const onRemove = () => dispatch({ type: "removeFilter", data: activeFilter })
  return (
    <AsyncSelect
      filter={activeFilter}
      onRemove={onRemove}
      filterValues={values}
      fetch={fetch}
    />
  )
}

const AsyncSelect = ({
  filter,
  onRemove,
  fetch,
  filterValues,
}: {
  filter: IFilter<FilterValues>
  onRemove: () => void
  fetch: Fetch
  filterValues: FilterValues
}) => {
  const filterbarValues = useRef(filterValues)
  filterbarValues.current = filterValues
  const open = filter.visibility === "open"
  const [searchString, setSearchString] = React.useState("")
  const [debouncedSearchString] = useDebounce(searchString, 500)
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage, status } =
    useInfiniteQuery<Response>({
      queryKey: [`filterbar-${filter.id}`, { debouncedSearchString }],
      queryFn: ({ pageParam }) =>
        fetch(
          debouncedSearchString,
          { next: pageParam },
          filterbarValues.current
        ),
      getNextPageParam: (lastPage) => lastPage.cursor.next,
      keepPreviousData: true,
      enabled: open,
    })

  const options = data?.pages.flatMap((p) => p.options) || []

  const { selectedOptions, onCheckboxChange, setOpen } =
    useExpandableFilterSelect(filter, options)
  const labels = selectedOptions.map((v) => v.label)

  return (
    <FilterMultiSelect
      isOpen={open}
      onOpenChange={setOpen}
      isLoading={status === "loading"}
      loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
      label={filter.name}
      onSelectionChange={onCheckboxChange}
      onSearchInputChange={(query) => setSearchString(query)}
      selectedKeys={new Set(selectedOptions.map((o) => o.value))}
      items={options as ItemType[]}
      trigger={() =>
        filter.removable ? (
          <FilterMultiSelect.RemovableTrigger
            selectedOptionLabels={labels}
            label={filter.name}
            onRemove={onRemove}
          />
        ) : (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={labels}
            label={filter.name}
          />
        )
      }
    >
      {(context) => (
        <>
          <FilterMultiSelect.SearchInput />
          <FilterMultiSelect.ListBox>
            {({ allItems }) => {
              if (allItems.length === 0) {
                return context?.searchQuery ? (
                  <div className="text-center" style={{ padding: "20px" }}>
                    No results found for:{" "}
                    <span className="font-bold">{context?.searchQuery}</span>
                  </div>
                ) : (
                  <div className="text-center" style={{ padding: "20px" }}>
                    No results found
                  </div>
                )
              }
              return allItems.map((item) => (
                <FilterMultiSelect.Option key={item.key} item={item} />
              ))
            }}
          </FilterMultiSelect.ListBox>
          {hasNextPage && (
            <FilterMultiSelect.LoadMoreButton
              label={"View more"}
              workingLabel={"Loading…"}
              working={isFetchingNextPage}
              onClick={() => fetchNextPage()}
            />
          )}
          <FilterMultiSelect.MenuFooter>
            <FilterMultiSelect.SelectAllButton />
            <FilterMultiSelect.ClearButton />
          </FilterMultiSelect.MenuFooter>
        </>
      )}
    </FilterMultiSelect>
  )
}
