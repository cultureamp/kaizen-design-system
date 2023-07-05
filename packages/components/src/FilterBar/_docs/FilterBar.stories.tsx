import React, { useEffect, useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import queryString from "query-string"
import Highlight from "react-highlight"
import {
  encodeQueryParams,
  StringParam,
  ArrayParam,
  DateParam,
  encodeDate,
  encodeObject,
  decodeDate,
  decodeObject,
  QueryParamConfig,
  decodeQueryParams,
} from "serialize-query-params"
import { DateRange, ItemType, SelectOption } from "~components/index"
import { FilterMultiSelect } from "../../index"
import { FilterBar, Filters, useFilterBarContext } from "../index"
import { FilterBarMultiSelectProps } from "../subcomponents"

const meta = {
  title: "Components/Filter Bar",
  component: FilterBar,
  argTypes: {
    classNameOverride: {
      type: "string",
      description: "Add extra classnames to the component.",
    },
  },
} satisfies Meta<typeof FilterBar>

export default meta

const sampleCode = `
type Values = {
  flavour: string
  deliveryDates: DateRange
  topping: string[]
  drank: Date
}

const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
  flavour: "jasmine-milk-tea",
  toppings: ["pearls", "fruit-jelly"]
})

const filters = [
  {
    id: "flavour",
    name: "Flavour",
    Component: (
      <FilterBar.Select
        items={[
          { value: "jasmine-milk-tea", label: "Jasmine Milk Tea" },
          { value: "honey-milk-tea", label: "Honey Milk Tea" },
          { value: "lychee-green-tea", label: "Lychee Green Tea" },
        ]}
      />
    ),
  },
  {
    id: "deliveryDates",
    name: "Delivery Dates",
    Component: <FilterBar.DateRangePicker />,
  },
  {
    id: "topping",
    name: "Topping",
    Component: (
      <FilterBar.MultiSelect
        items={[
          { value: "none", label: "None" },
          { value: "pearls", label: "Pearls" },
          { value: "fruit-jelly", label: "Fruit Jelly" },
        ]}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.ListBox>
              {({ allItems }): JSX.Element | JSX.Element[] => {
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
      </FilterBar.MultiSelect>
    ),
    isRemovable: true,
  },
  {
    id: "drank",
    name: "Drank",
    Component: <FilterBar.DatePicker />,
    isRemovable: true,
  },
] satisfies Filters<Values>

return (
  <FilterBar<Values>
    filters={filters}
    values={activeValues}
    onValuesChange={onActiveValuesChange}
  />
)`

type Values = {
  flavour: string
  deliveryDates: DateRange
  toppings: string[]
  drank: Date
}

const filters = [
  {
    id: "flavour",
    name: "Flavour",
    Component: (
      <FilterBar.Select
        items={[
          { value: "jasmine-milk-tea", label: "Jasmine Milk Tea" },
          { value: "honey-milk-tea", label: "Honey Milk Tea" },
          { value: "lychee-green-tea", label: "Lychee Green Tea" },
        ]}
      />
    ),
  },
  {
    id: "deliveryDates",
    name: "Delivery Dates",
    Component: <FilterBar.DateRangePicker />,
  },
  {
    id: "toppings",
    name: "Toppings",
    Component: (
      <FilterBar.MultiSelect
        items={[
          { value: "none", label: "None" },
          { value: "pearls", label: "Pearls" },
          { value: "fruit-jelly", label: "Fruit Jelly" },
        ]}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ allItems }): JSX.Element | JSX.Element[] =>
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
      </FilterBar.MultiSelect>
    ),
    isRemovable: true,
  },
  {
    id: "drank",
    name: "Drank",
    Component: <FilterBar.DatePicker />,
    isRemovable: true,
  },
] satisfies Filters<Values>

export const BasicImplementation: StoryFn<typeof FilterBar> = () => {
  const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
    flavour: "jasmine-milk-tea",
    toppings: ["pearls", "fruit-jelly"],
  })

  return (
    <FilterBar<Values>
      filters={filters}
      values={activeValues}
      onValuesChange={onActiveValuesChange}
    />
  )
}
BasicImplementation.parameters = {
  docs: {
    source: {
      code: sampleCode,
    },
  },
}

export const OnValuesChange: StoryFn<typeof FilterBar> = () => {
  const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
    flavour: "jasmine-milk-tea",
    toppings: ["pearls", "fruit-jelly"],
  })

  return (
    <>
      <FilterBar<Values>
        filters={filters}
        values={activeValues}
        onValuesChange={onActiveValuesChange}
      />
      <Highlight className="json">
        {JSON.stringify(activeValues, null, 4)}
      </Highlight>
    </>
  )
}

export const DependentFilter: StoryFn<typeof FilterBar> = () => {
  type ValuesDependent = {
    coffee: string
    milk: string
    syrup: string
    sugar: string
    ice: string
  }

  const filtersDependent = [
    {
      id: "coffee",
      name: "Coffee",
      Component: (
        <FilterBar.Select
          items={[
            { value: "long-black", label: "Long Black" },
            { value: "latte", label: "Latte" },
          ]}
        />
      ),
    },
    {
      id: "milk",
      name: "Milk",
      Component: (
        <FilterBar.Select
          items={[
            { value: "full-cream", label: "Full Cream" },
            { value: "oat", label: "Oat" },
          ]}
        />
      ),
      isUsableWhen: state => state.coffee.value === "latte",
    },
    {
      id: "syrup",
      name: "Syrup",
      Component: (
        <FilterBar.Select
          items={[
            { value: "vanilla", label: "Vanilla" },
            { value: "caramel", label: "Caramel" },
          ]}
        />
      ),
      isRemovable: true,
      isUsableWhen: state =>
        state.milk.value !== undefined && !state.sugar.isActive,
    },
    {
      id: "sugar",
      name: "Sugar",
      Component: <FilterBar.Select items={[{ value: "yes", label: "Yes" }]} />,
      isRemovable: true,
      isUsableWhen: state =>
        state.milk.value !== undefined && !state.syrup.isActive,
    },
    {
      id: "ice",
      name: "Ice",
      Component: (
        <FilterBar.Select
          items={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
      ),
      isUsableWhen: state => state.coffee.value !== undefined,
    },
  ] satisfies Filters<ValuesDependent>

  const [values, setValues] = useState<Partial<ValuesDependent>>({
    milk: "full-cream",
  })

  return (
    <>
      <FilterBar<ValuesDependent>
        filters={filtersDependent}
        values={values}
        onValuesChange={setValues}
      />
      <div className="flex gap-8 my-16">
        <button
          type="button"
          onClick={() => setValues({ ...values, coffee: undefined })}
        >
          Clear Coffee
        </button>
      </div>
      <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>
    </>
  )
}

const ExampleFilterMultiSelect = (
  props: Omit<FilterBarMultiSelectProps, "children">
): JSX.Element => (
  <FilterBar.MultiSelect {...props}>
    {(): JSX.Element => (
      <>
        <FilterMultiSelect.SearchInput />
        <FilterMultiSelect.ListBox>
          {({ allItems }): JSX.Element | JSX.Element[] =>
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
  </FilterBar.MultiSelect>
)

type ValuesDependentAsync = {
  role: string[]
  person: string[]
  room: string
}

const FilterRole = (props: { id?: string }): JSX.Element => {
  const data = [
    { value: "designer", label: "Designer" },
    { value: "engineer", label: "Engineer" },
  ]

  const [items, setItems] = useState<ItemType[]>(data)
  const [searchTerm, setSearchTerm] = useState<string>("")

  useEffect(() => {
    setItems(data.filter(({ label }) => label.includes(searchTerm)))
  }, [searchTerm])

  return (
    <ExampleFilterMultiSelect
      id={props.id}
      items={items}
      onSearchInputChange={setSearchTerm}
    />
  )
}

const sleep = (ms: number): Promise<unknown> =>
  new Promise(resolve => setTimeout(resolve, ms))

const FilterPerson = (props: { id?: string }): JSX.Element => {
  const data = [
    { value: "delete-it-g", label: "Delete-it G", role: "engineer" },
    {
      value: "moustache-mackenzie",
      label: "Moustache MacKenzie",
      role: "engineer",
    },
    { value: "jacon", label: "Jacon", role: "designer" },
    { value: "uppercase-winter", label: "Uppercase Winter", role: "engineer" },
  ]

  const [allItems, setAllItems] = useState<ItemType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const { getFilterState } = useFilterBarContext<
    ValuesDependentAsync["person"],
    ValuesDependentAsync
  >()

  const roleFilter = getFilterState("role")

  const loadItems = async (roles: string[] | undefined): Promise<void> => {
    await sleep(3000).then(() => {
      setIsLoading(false)
      setAllItems(data.filter(({ role }) => roles?.includes(role)))
    })
  }

  useEffect(() => {
    setIsLoading(true)
    loadItems(roleFilter.value)
  }, [roleFilter.value])

  const items = allItems.filter(({ label }) => label.includes(searchTerm))

  return (
    <ExampleFilterMultiSelect
      id={props.id}
      isLoading={isLoading}
      loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
      items={items}
      onSearchInputChange={setSearchTerm}
    />
  )
}

const FilterRoom = (props: { id?: string }): JSX.Element => {
  type Item = SelectOption & {
    role: string
  }

  const data = [
    { value: "eng-1", label: "Engineering Space 1", role: "engineer" },
    { value: "eng-2", label: "Engineering Space 2", role: "engineer" },
    { value: "des-1", label: "Design Space 1", role: "designer" },
  ]

  const [items, setItems] = useState<Item[]>([])

  const { getFilterState } = useFilterBarContext<
    ValuesDependentAsync["room"],
    ValuesDependentAsync
  >()

  const roleFilter = getFilterState("role")

  useEffect(() => {
    const roles = roleFilter.value
    setItems(data.filter(({ role }) => roles?.includes(role)))
  }, [roleFilter.value])

  return <FilterBar.Select<Item> id={props.id} items={items} />
}

export const SiblingValueDependentFilter: StoryFn<typeof FilterBar> = () => {
  const filtersDependent = [
    {
      id: "role",
      name: "Role",
      Component: <FilterRole />,
    },
    {
      id: "person",
      name: "Person",
      Component: <FilterPerson />,
    },
    {
      id: "room",
      name: "Room",
      Component: <FilterRoom />,
      isRemovable: true,
      isUsableWhen: state => state.role.value !== undefined,
    },
  ] satisfies Filters<ValuesDependentAsync>

  const [values, setValues] = useState<Partial<ValuesDependentAsync>>({})

  return (
    <>
      <FilterBar<ValuesDependentAsync>
        filters={filtersDependent}
        values={values}
        onValuesChange={setValues}
      />
      <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>
    </>
  )
}

export const ExternalEventValuesUpdate: StoryFn<typeof FilterBar> = () => {
  const [values, setValues] = useState<Partial<Values>>({
    flavour: "jasmine-milk-tea",
    toppings: ["pearls", "fruit-jelly"],
  })

  const DateRangeParam = {
    encode: dateRange => {
      if (!dateRange) return undefined
      return (
        encodeObject({
          from: encodeDate(dateRange?.from),
          to: encodeDate(dateRange?.to),
        }) ?? undefined
      )
    },

    decode: (dateRangeStr): DateRange | undefined => {
      const obj = decodeObject(dateRangeStr)
      return obj
        ? {
            from: decodeDate(obj.from) ?? undefined,
            to: decodeDate(obj.to) ?? undefined,
          }
        : undefined
    },
  } satisfies QueryParamConfig<DateRange | undefined>

  const paramConfigMap = {
    flavour: StringParam,
    toppings: ArrayParam,
    deliveryDates: DateRangeParam,
    drank: DateParam,
  }

  const encodedQueryParams = encodeQueryParams(paramConfigMap, values)
  const decodedQueryParams = decodeQueryParams(
    paramConfigMap,
    encodedQueryParams
  )

  return (
    <>
      <FilterBar<Values>
        filters={filters}
        values={values}
        onValuesChange={setValues}
      />

      <div className="flex gap-8 my-16">
        <button
          type="button"
          onClick={() => setValues({ ...values, flavour: "honey-milk-tea" })}
        >
          Update Flavour to honey-milk-tea
        </button>
        <button
          type="button"
          onClick={() => setValues({ ...values, toppings: ["fruit-jelly"] })}
        >
          Update Toppings to fruit-jelly
        </button>
        <button type="button" onClick={() => setValues({})}>
          Clear all values
        </button>
      </div>

      <code className="mt-16">Values:</code>
      <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>

      <code>
        queryString.stringify(encodeQueryParams(paramConfigMap, values))
      </code>
      <Highlight className="json">
        {queryString.stringify(encodedQueryParams)}
      </Highlight>

      <code>decodeQueryParams(paramConfigMap, encodedQueryParams)</code>
      <Highlight className="json">
        {JSON.stringify(decodedQueryParams, null, 4)}
      </Highlight>
    </>
  )
}
