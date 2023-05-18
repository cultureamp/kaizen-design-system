import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { DateRange } from "@kaizen/date-picker"
import { FilterMultiSelect } from "@kaizen/select"
import { FilterSelect, SelectOption } from "~components/FilterSelect"
import {
  Filters,
  FiltersState,
  useFilterBarContext,
} from "../context/FilterBarContext"
import { FilterBar } from "../index"
import { FilterDRP } from "../subcomponents/FilterDRP"
import { FilterBarMultiSelect } from "../subcomponents/FilterMS"
import { FilterPancake } from "../subcomponents/FilterPancake"
import { FilterBarSelect } from "../subcomponents/FilterSelect"

const meta = {
  tags: ["autodocs"],
  title: "Components/__Filter Bar",
  component: FilterBar,
} satisfies Meta<typeof FilterBar>

export default meta

export const Playground: StoryFn<typeof FilterBar> = () => {
  type Params = {
    chocolate: string
    department: string[]
    strawberry: string
    vanilla: string
    apple: string
    penguin: string
  }

  const [activeValues, onActiveValuesChange] = useState<Partial<Params>>({
    department: ["id-fe"],
  })
  const [filtersState, setFiltersState] = useState<FiltersState<Params>>({})

  // @note: While this can identify if something shouldn't exist,
  // it can't tell if something is missing.
  const filters = [
    {
      id: "chocolate",
      name: "Chocolate",
      Component: (
        <FilterPancake
        // id="chocolate"
        />
      ),
    },
    {
      id: "department",
      name: "Dept",
      Component: (
        <FilterBarMultiSelect
          // id="department"
          items={[
            { label: "Front-End", value: "id-fe" },
            { label: "Back-End", value: "id-be" },
            { label: "SRE", value: "id-sre" },
            { label: "Dev-ops", value: "id-devops" },
            { label: "Others", value: "id-others" },
            {
              label:
                "Super long option where the container is fixed width and the selected option goes multiline",
              value: "id-long",
            },
            { label: "AnotherExample", value: "id-another" },
          ]}
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
        </FilterBarMultiSelect>
      ),
    },
    {
      id: "strawberry",
      name: "Req choc val",
      Component: (
        <FilterPancake
        // id="strawberry"
        />
      ),
      isRemovable: true,
      isInitHidden: true,
      isUsableWhen: state => state["chocolate"].selectedValue !== undefined,
    },
    {
      id: "vanilla",
      name: "Req dept BE",
      Component: (
        <FilterPancake
        // id="vanilla"
        />
      ),
      isRemovable: true,
      isUsableWhen: state =>
        state["department"].selectedValue?.includes("id-be") === true,
      isInitHidden: true,
    },
    {
      id: "apple",
      name: "Apple",
      Component: (
        <FilterPancake
        // id="apple"
        />
      ),
      isRemovable: true,
    },
    {
      id: "penguin",
      name: "Penguin",
      Component: (
        <FilterBarMultiSelect
          // id="penguin"
          items={[
            { label: "Front-End", value: "id-fe" },
            { label: "Back-End", value: "id-be" },
            { label: "SRE", value: "id-sre" },
            { label: "Dev-ops", value: "id-devops" },
            { label: "Others", value: "id-others" },
            {
              label:
                "Super long option where the container is fixed width and the selected option goes multiline",
              value: "id-long",
            },
            { label: "AnotherExample", value: "id-another" },
          ]}
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
        </FilterBarMultiSelect>
      ),
      isRemovable: true,
      isInitHidden: true,
    },
  ] satisfies Filters<Params>

  return (
    <div>
      <FilterBar<Params>
        filters={filters}
        onChange={setFiltersState}
        activeValues={activeValues}
        onActiveValuesChange={onActiveValuesChange}
      />

      <button
        type="button"
        onClick={(): void =>
          onActiveValuesChange({
            ...activeValues,
            chocolate: "Hello!",
          })
        }
        className="mt-16"
      >
        Update chocolate value
      </button>

      <p>activeValues</p>
      <Highlight className="json">
        {JSON.stringify(activeValues, null, 4)}
      </Highlight>

      <p>filtersState</p>
      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

type Playground2Params = {
  chocolate: string
  drp: DateRange
  vanilla: string
  coffee: string
  pickle: string
  carrots: string
}

// Component must be created to access the context.
// Provider is in FilterBar, thus hook cannot be called in instantiating component.
const VanillaPancake = ({ id }: { id?: string }): JSX.Element => {
  const { setOpenFilter } = useFilterBarContext<string, Playground2Params>()

  return (
    <FilterPancake id={id} onChange={(): void => setOpenFilter("coffee")} />
  )
}

export const Playground2: StoryFn<typeof FilterBar> = () => {
  const [activeValues, onActiveValuesChange] = useState<
    Partial<Playground2Params>
  >({})
  const [filtersState, setFiltersState] = useState<
    FiltersState<Playground2Params>
  >({})

  const filters = [
    {
      id: "chocolate",
      name: "Chocolate",
      Component: (
        <FilterPancake
        // id="chocolate"
        />
      ),
    },
    {
      id: "drp",
      name: "Dates",
      Component: (
        <FilterDRP
          // id="drp"
          locale="en-AU"
        />
      ),
    },
    {
      id: "vanilla",
      name: "Vanilla",
      Component: (
        <VanillaPancake
        // id="vanilla"
        />
      ),
      isRemovable: true,
      isUsableWhen: state => state["chocolate"].selectedValue !== undefined,
    },
    {
      id: "coffee",
      name: "Coffee",
      Component: (
        <FilterBarSelect
          // id="coffee"
          items={[
            { label: "Short black", value: "short-black" },
            { label: "Long black", value: "long-black" },
            { label: "Batch brew", value: "batch-brew" },
          ]}
        />
      ),
    },
    {
      id: "pickle",
      name: "Pickle",
      Component: (
        <FilterBarSelect<SelectOption & { isFruit: boolean }>
          // id="pickle"
          items={[
            { label: "Bubblegum", value: "bubblegum", isFruit: false },
            { label: "Strawberry", value: "strawberry", isFruit: true },
            { label: "Chocolate", value: "chocolate", isFruit: false },
            { label: "Apple", value: "apple", isFruit: true },
            { label: "Lemon", value: "lemon", isFruit: true },
          ]}
        >
          {({ items }): JSX.Element[] =>
            items.map(item =>
              item.type === "item" ? (
                <FilterSelect.Option
                  key={item.key}
                  item={{
                    ...item,
                    rendered: item.value?.isFruit
                      ? `${item.rendered} (Fruit)`
                      : item.rendered,
                  }}
                />
              ) : (
                <FilterSelect.ItemDefaultRender key={item.key} item={item} />
              )
            )
          }
        </FilterBarSelect>
      ),
    },
    {
      id: "carrots",
      name: "Carrots",
      Component: <FilterPancake id="carrots" />,
      isInitHidden: true,
    },
  ] satisfies Filters<Playground2Params>

  return (
    <div>
      <FilterBar<Playground2Params>
        filters={filters}
        onChange={setFiltersState}
        activeValues={activeValues}
        onActiveValuesChange={onActiveValuesChange}
      />

      <button
        type="button"
        onClick={(): void =>
          onActiveValuesChange({
            ...activeValues,
            chocolate: "Hello!",
          })
        }
        className="mt-16"
      >
        Update chocolate value
      </button>

      <p>activeValues</p>
      <Highlight className="json">
        {JSON.stringify(activeValues, null, 4)}
      </Highlight>

      <p>filtersState</p>
      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

export const AnotherExample: StoryFn<typeof FilterBar> = () => {
  type Params = {
    managers: string
    reports: string
    departments: string
    gender: string
  }

  const [activeValues, onActiveValuesChange] = useState<Partial<Params>>({})
  const [filtersState, setFiltersState] = useState<FiltersState<Params>>({})

  const filters = [
    {
      id: "managers",
      name: "Managers",
      Component: (
        <FilterBarSelect
          // id="managers"
          items={[
            { label: "Geoff Chong", value: "the-g" },
            { label: "Christian Klammer", value: "ck" },
          ]}
        />
      ),
    },
    {
      id: "reports",
      name: "Reports",
      Component: (
        <FilterBarSelect
          // id="reports"
          items={[
            { label: "Directs", value: "directs" },
            { label: "Indirects", value: "indirects" },
          ]}
        />
      ),
      isRemovable: true,
      isInitHidden: true,
    },
    {
      id: "departments",
      name: "Departments",
      Component: (
        <FilterBarSelect
          // id="departments"
          items={[
            { label: "Beauty", value: "beauty" },
            { label: "Electronics", value: "electronics" },
          ]}
        />
      ),
      isRemovable: true,
      isInitHidden: true,
      isUsableWhen: state => !state["reports"].isHidden,
    },
    {
      id: "gender",
      name: "Gender",
      Component: (
        <FilterBarSelect
          // id="gender"
          items={[
            { label: "Prefer not to say", value: "no-to-say" },
            { label: "Female", value: "female" },
            { label: "Make", value: "male" },
            { label: "Non-binary", value: "non-binary" },
          ]}
        />
      ),
      isRemovable: true,
      isInitHidden: true,
      isUsableWhen: state => !state["reports"].isHidden,
    },
  ] satisfies Filters<Params>

  return (
    <div>
      <FilterBar<Params>
        filters={filters}
        onChange={setFiltersState}
        activeValues={activeValues}
        onActiveValuesChange={onActiveValuesChange}
      />

      <p>activeValues</p>
      <Highlight className="json">
        {JSON.stringify(activeValues, null, 4)}
      </Highlight>

      <p>filtersState</p>
      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}

export const ManyFilters: StoryFn<typeof FilterBar> = () => {
  type DynamicParams = {
    [key: string]: string
  }
  type Params = DynamicParams & {
    default: string
  }

  const [activeValues, onActiveValuesChange] = useState<Partial<Params>>({})
  const [filtersState, setFiltersState] = useState<FiltersState<Params>>({})

  const dynamicFilters = [...Array(100)].map((_, i) => ({
    id: `filter-${i}`,
    name: `${i}`,
    Component: (
      <FilterPancake
      // id={`filter-${i}`}
      />
    ),
    isRemovable: true,
    isInitHidden: true,
  })) satisfies Filters<DynamicParams>

  const filters = [
    {
      id: "default",
      name: "Default",
      Component: (
        <FilterPancake
        // id="default"
        />
      ),
    },
    ...dynamicFilters,
  ] satisfies Filters<Params>

  return (
    <div>
      <FilterBar<Params>
        filters={filters}
        onChange={setFiltersState}
        activeValues={activeValues}
        onActiveValuesChange={onActiveValuesChange}
      />

      <p>activeValues</p>
      <Highlight className="json">
        {JSON.stringify(activeValues, null, 4)}
      </Highlight>

      <p>filtersState</p>
      <Highlight className="json">
        {JSON.stringify(filtersState, null, 4)}
      </Highlight>
    </div>
  )
}
