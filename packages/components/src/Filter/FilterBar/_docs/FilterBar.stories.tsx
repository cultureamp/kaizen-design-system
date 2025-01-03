import React, { useEffect, useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import queryString from 'query-string'
import Highlight from 'react-highlight'
import {
  ArrayParam,
  DateParam,
  StringParam,
  decodeDate,
  decodeObject,
  decodeQueryParams,
  encodeDate,
  encodeObject,
  encodeQueryParams,
  type QueryParamConfig,
} from 'serialize-query-params'
import {
  FilterMultiSelect,
  type DateRange,
  type ItemType,
  type SelectOption,
} from '~components/index'
import { FilterBar, useFilterBarContext, type Filters } from '../index'
import { type FilterBarMultiSelectProps } from '../subcomponents'

const meta = {
  title: 'Components/FilterBar',
  component: FilterBar,
  argTypes: {
    filters: { control: false },
    values: { control: false },
    onValuesChange: { control: false },
  },
  args: {
    filters: [], // Defined in stories
    values: {}, // Defined in stories
    onValuesChange: fn(),
  },
} satisfies Meta<typeof FilterBar>

export default meta

type Story = StoryObj<typeof meta>

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
    id: 'flavour',
    name: 'Flavour',
    Component: (
      <FilterBar.Select
        items={[
          { value: 'jasmine-milk-tea', label: 'Jasmine Milk Tea' },
          { value: 'honey-milk-tea', label: 'Honey Milk Tea' },
          { value: 'lychee-green-tea', label: 'Lychee Green Tea' },
        ]}
      />
    ),
  },
  {
    id: 'deliveryDates',
    name: 'Delivery Dates',
    Component: <FilterBar.DateRangePicker />,
  },
  {
    id: 'toppings',
    name: 'Toppings',
    Component: (
      <FilterBar.MultiSelect
        items={[
          { value: 'none', label: 'None' },
          { value: 'pearls', label: 'Pearls' },
          { value: 'fruit-jelly', label: 'Fruit Jelly' },
          { value: 'peanuts', label: 'Peanuts' },
          { value: 'coconut', label: 'Coconut' },
          { value: 'aloe', label: 'Aloe Vera' },
          { value: 'mochi', label: 'Mini Mochi' },
          { value: 'popping-pearls', label: 'Popping Pearls' },
        ]}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.SearchInput />
            <FilterMultiSelect.ListBox>
              {({ allItems }): JSX.Element | JSX.Element[] =>
                allItems.map((item) => <FilterMultiSelect.Option key={item.key} item={item} />)
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
    id: 'drank',
    name: 'Drank',
    Component: <FilterBar.DatePicker />,
    isRemovable: true,
  },
] satisfies Filters<Values>

export const BasicImplementation: Story = {
  render: (args) => {
    const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
      flavour: 'jasmine-milk-tea',
      toppings: ['pearls', 'fruit-jelly'],
    })

    return (
      <FilterBar<Values>
        {...args}
        filters={filters}
        values={activeValues}
        onValuesChange={onActiveValuesChange}
      />
    )
  },
  parameters: {
    docs: {
      source: {
        code: sampleCode,
      },
    },
  },
}

export const OnValuesChange: Story = {
  render: () => {
    const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({
      flavour: 'jasmine-milk-tea',
      toppings: ['pearls', 'fruit-jelly'],
    })

    return (
      <>
        <FilterBar<Values>
          filters={filters}
          values={activeValues}
          onValuesChange={onActiveValuesChange}
        />
        <Highlight className="json">{JSON.stringify(activeValues, null, 4)}</Highlight>
      </>
    )
  },
}

export const DependentFilter: Story = {
  render: () => {
    type ValuesDependent = {
      coffee: string
      milk: string
      syrup: string
      sugar: string
      ice: string
    }

    const filtersDependent = [
      {
        id: 'coffee',
        name: 'Coffee',
        Component: (
          <FilterBar.Select
            items={[
              { value: 'long-black', label: 'Long Black' },
              { value: 'latte', label: 'Latte' },
            ]}
          />
        ),
      },
      {
        id: 'milk',
        name: 'Milk',
        Component: (
          <FilterBar.Select
            items={[
              { value: 'full-cream', label: 'Full Cream' },
              { value: 'oat', label: 'Oat' },
            ]}
          />
        ),
        isUsableWhen: (state) => state.coffee.value === 'latte',
      },
      {
        id: 'syrup',
        name: 'Syrup',
        Component: (
          <FilterBar.Select
            items={[
              { value: 'vanilla', label: 'Vanilla' },
              { value: 'caramel', label: 'Caramel' },
            ]}
          />
        ),
        isRemovable: true,
        isUsableWhen: (state) => state.milk.value !== undefined && !state.sugar.isActive,
      },
      {
        id: 'sugar',
        name: 'Sugar',
        Component: <FilterBar.Select items={[{ value: 'yes', label: 'Yes' }]} />,
        isRemovable: true,
        isUsableWhen: (state) => state.milk.value !== undefined && !state.syrup.isActive,
      },
      {
        id: 'ice',
        name: 'Ice',
        Component: (
          <FilterBar.Select
            items={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ]}
          />
        ),
        isUsableWhen: (state) => state.coffee.value !== undefined,
      },
    ] satisfies Filters<ValuesDependent>

    const [values, setValues] = useState<Partial<ValuesDependent>>({
      milk: 'full-cream',
    })

    return (
      <>
        <FilterBar<ValuesDependent>
          filters={filtersDependent}
          values={values}
          onValuesChange={setValues}
        />
        <div className="flex gap-8 my-16">
          <button type="button" onClick={() => setValues({ ...values, coffee: undefined })}>
            Clear Coffee
          </button>
        </div>
        <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>
      </>
    )
  },
}

const ExampleFilterMultiSelect = (
  props: Omit<FilterBarMultiSelectProps, 'children'>,
): JSX.Element => (
  <FilterBar.MultiSelect {...props}>
    {(): JSX.Element => (
      <FilterMultiSelect.ListBox>
        {({ allItems }): JSX.Element | JSX.Element[] => {
          if (allItems.length === 0) {
            return (
              <FilterMultiSelect.NoResults>
                No results. Select a role first.
              </FilterMultiSelect.NoResults>
            )
          }
          return allItems.map((item) => <FilterMultiSelect.Option key={item.key} item={item} />)
        }}
      </FilterMultiSelect.ListBox>
    )}
  </FilterBar.MultiSelect>
)

type ValuesSiblingDependent = {
  role: string[]
  person: string[]
  room: string
}

const sleep = (ms: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, ms))

const FilterPerson = (props: { id?: string }): JSX.Element => {
  const data = [
    {
      value: 'delete-it-g',
      label: 'Delete-it G (Engineer)',
      role: ['engineer'],
    },
    {
      value: 'moustache-mackenzie',
      label: 'Moustache MacKenzie (Engineer)',
      role: ['engineer'],
    },
    { value: 'jacon', label: 'Jacon (Designer)', role: ['designer'] },
    {
      value: 'uppercase-winter',
      label: 'Uppercase Winter (Engineer)',
      role: ['engineer'],
    },
    {
      value: 'unicorn',
      label: 'Unicorn (Designer/Engineer)',
      role: ['designer', 'engineer'],
    },
  ]

  const [items, setItems] = useState<ItemType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { getFilterState } = useFilterBarContext<
    ValuesSiblingDependent['person'],
    ValuesSiblingDependent
  >()

  const roleFilter = getFilterState('role')

  const loadItems = async (roles: string[] | undefined): Promise<void> => {
    await sleep(3000).then(() => {
      setIsLoading(false)
      setItems(data.filter(({ role }) => role.find((r) => roles?.includes(r))))
    })
  }

  useEffect(() => {
    setIsLoading(true)
    loadItems(roleFilter.value)
  }, [roleFilter.value])

  return (
    <ExampleFilterMultiSelect
      id={props.id}
      isLoading={isLoading}
      loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
      items={items}
    />
  )
}

const FilterRoom = (props: { id?: keyof ValuesSiblingDependent }): JSX.Element => {
  type Item = SelectOption & {
    role: string
  }

  const data = [
    { value: 'eng-1', label: 'Engineering Space 1', role: 'engineer' },
    { value: 'eng-2', label: 'Engineering Space 2', role: 'engineer' },
    { value: 'des-1', label: 'Design Space 1', role: 'designer' },
  ]

  const [items, setItems] = useState<Item[]>([])

  type Id = typeof props.id extends keyof ValuesSiblingDependent ? typeof props.id : never

  const { getFilterState } = useFilterBarContext<
    ValuesSiblingDependent[Id],
    ValuesSiblingDependent
  >()

  const roleFilter = getFilterState('role')

  useEffect(() => {
    const roles = roleFilter.value
    setItems(data.filter(({ role }) => roles?.includes(role)))
  }, [roleFilter.value])

  return <FilterBar.Select<Item> id={props.id} items={items} />
}

const sourceCodeSiblingValueDependentFilter = `
type Values = {
  role: string[]
  person: string[]
  room: string
}

const sleep = (ms: number): Promise<unknown> => new Promise(resolve => setTimeout(resolve, ms))

const FilterPerson = (props: { id?: string }): JSX.Element => {
  const data = [
    { value: "delete-it-g", label: "Delete-it G (Engineer)", role: ["engineer"] },
    { value: "moustache-mackenzie", label: "Moustache MacKenzie (Engineer)", role: ["engineer"] },
    { value: "jacon", label: "Jacon (Designer)", role: ["designer"] },
    { value: "uppercase-winter", label: "Uppercase Winter (Engineer)", role: ["engineer"] },
    { value: "unicorn", label: "Unicorn (Designer/Engineer)", role: ["designer", "engineer"] },
  ]

  const [items, setItems] = useState<ItemType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { getFilterState } = useFilterBarContext<Values["person"], Values>()

  const roleFilter = getFilterState("role")

  const loadItems = async (roles: string[] | undefined): Promise<void> => {
    await sleep(3000).then(() => {
      setIsLoading(false)
      setItems(data.filter(({ role }) => role.find(r => roles?.includes(r))))
    })
  }

  useEffect(() => {
    setIsLoading(true)
    loadItems(roleFilter.value)
  }, [roleFilter.value])

  return (
    <FilterBar.MultiSelect
      id={props.id}
      isLoading={isLoading}
      loadingSkeleton={<FilterMultiSelect.MenuLoadingSkeleton />}
      items={items}
    >{...renderChildren}</FilterBar.MultiSelect>
  )
}

const FilterRoom = (props: { id?: string }): JSX.Element => {
  type Item = SelectOption & { role: string }

  const data = [
    { value: "eng-1", label: "Engineering Space 1", role: "engineer" },
    { value: "eng-2", label: "Engineering Space 2", role: "engineer" },
    { value: "des-1", label: "Design Space 1", role: "designer" },
  ]

  const [items, setItems] = useState<Item[]>([])

  const { getFilterState } = useFilterBarContext<Values["room"], Values>()

  const roleFilter = getFilterState("role")

  useEffect(() => {
    setItems(data.filter(({ role }) => roleFilter.value?.includes(role)))
  }, [roleFilter.value])

  return <FilterBar.Select<Item> id={props.id} items={items} />
}

const CustomFilterBar = () => {
  const filters = [
    {
      id: "role",
      name: "Role",
      Component: (<FilterBar.MultiSelect
        items={[
          { value: "designer", label: "Designer" },
          { value: "engineer", label: "Engineer" },
        ]}
      >{...renderChildren}</FilterBar.MultiSelect>),
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
  ] satisfies Filters<Values>

  const [values, setValues] = useState<Partial<Values>>({})

  return <FilterBar<Values> filters={filters} values={values} onValuesChange={setValues} />
}
`

export const SiblingValueDependentFilter: Story = {
  render: () => {
    const filtersDependent = [
      {
        id: 'role',
        name: 'Role',
        Component: (
          <ExampleFilterMultiSelect
            items={[
              { value: 'designer', label: 'Designer' },
              { value: 'engineer', label: 'Engineer' },
            ]}
          />
        ),
      },
      {
        id: 'person',
        name: 'Person',
        Component: <FilterPerson />,
      },
      {
        id: 'room',
        name: 'Room',
        Component: <FilterRoom />,
        isRemovable: true,
        isUsableWhen: (state) => state.role.value !== undefined,
      },
    ] satisfies Filters<ValuesSiblingDependent>

    const [values, setValues] = useState<Partial<ValuesSiblingDependent>>({})

    return (
      <>
        <FilterBar<ValuesSiblingDependent>
          filters={filtersDependent}
          values={values}
          onValuesChange={setValues}
        />
        <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: sourceCodeSiblingValueDependentFilter,
      },
    },
  },
}

export const ExternalEventValuesUpdate: Story = {
  render: () => {
    const [values, setValues] = useState<Partial<Values>>({
      flavour: 'jasmine-milk-tea',
      toppings: ['pearls', 'fruit-jelly'],
    })

    const DateRangeParam = {
      encode: (dateRange) => {
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
    const decodedQueryParams = decodeQueryParams(paramConfigMap, encodedQueryParams)

    return (
      <>
        <FilterBar<Values> filters={filters} values={values} onValuesChange={setValues} />

        <div className="flex gap-8 my-16">
          <button type="button" onClick={() => setValues({ ...values, flavour: 'honey-milk-tea' })}>
            Update Flavour to honey-milk-tea
          </button>
          <button type="button" onClick={() => setValues({ ...values, toppings: ['fruit-jelly'] })}>
            Update Toppings to fruit-jelly
          </button>
          <button type="button" onClick={() => setValues({})}>
            Clear all values
          </button>
        </div>

        <code className="mt-16">Values:</code>
        <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>

        <code>queryString.stringify(encodeQueryParams(paramConfigMap, values))</code>
        <Highlight className="json">{queryString.stringify(encodedQueryParams)}</Highlight>

        <code>decodeQueryParams(paramConfigMap, encodedQueryParams)</code>
        <Highlight className="json">{JSON.stringify(decodedQueryParams, null, 4)}</Highlight>
      </>
    )
  },
}

type CycleFilterValues = {
  cycle: string
  customRange: DateRange
}

const CycleFilter = ({ id }: { id?: string }): JSX.Element => {
  const { openFilter } = useFilterBarContext<CycleFilterValues['cycle'], CycleFilterValues>()

  return (
    <FilterBar.Select
      id={id}
      items={[
        { value: 'custom', label: 'Custom Range' },
        { value: 'cycle-1', label: 'Cycle 1' },
        { value: 'cycle-2', label: 'Cycle 2' },
      ]}
      onSelectionChange={(key) => {
        if (key === 'custom') openFilter('customRange')
      }}
    />
  )
}

export const ExternalEventOpenFilter: Story = {
  render: () => {
    const [values, setValues] = useState<Partial<CycleFilterValues>>({})

    const cycleFilters = [
      {
        id: 'cycle',
        name: 'Cycle',
        Component: <CycleFilter />,
      },
      {
        id: 'customRange',
        name: 'Custom Range',
        Component: <FilterBar.DateRangePicker />,
        isUsableWhen: (state) => state.cycle.value === 'custom',
      },
    ] satisfies Filters<CycleFilterValues>

    return (
      <>
        <FilterBar<CycleFilterValues>
          filters={cycleFilters}
          values={values}
          onValuesChange={setValues}
        />
        <div className="mt-16">
          <code>Values:</code>
          <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>
        </div>
      </>
    )
  },
}

const emptyLabelFilters = [
  {
    id: 'cycle',
    name: '',
    Component: <CycleFilter />,
    isRemovable: true,
  },
  {
    id: 'customRange',
    name: '',
    Component: <FilterBar.DateRangePicker />,
    isRemovable: true,
  },
] satisfies Filters<CycleFilterValues>

export const UpdatesLabels: Story = {
  parameters: {
    chromatic: {
      delay: 2500,
    },
  },
  render: () => {
    const [values, setValues] = useState<Partial<CycleFilterValues>>({})

    const [f, setF] = useState(emptyLabelFilters)

    useEffect(() => {
      const timer = setTimeout(() => {
        setF([
          {
            id: 'cycle',
            name: 'Cycle',
            Component: <CycleFilter />,
            isRemovable: true,
          },
          {
            id: 'customRange',
            name: 'Custom Range',
            Component: <FilterBar.DateRangePicker />,
            isRemovable: true,
          },
        ])
      }, 2000)
      return () => clearTimeout(timer)
    }, [])

    return (
      <>
        <FilterBar<CycleFilterValues> filters={f} values={values} onValuesChange={setValues} />
        <div className="mt-16">
          <code>Filters:</code>
          <Highlight className="json">
            {JSON.stringify(
              f.map(({ id, name }) => ({ id, name })),
              null,
              4,
            )}
          </Highlight>
        </div>
        <div className="mt-16">
          <code>Values:</code>
          <Highlight className="json">{JSON.stringify(values, null, 4)}</Highlight>
        </div>
      </>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Initial render complete', async () => {
      await waitFor(() => canvas.getByRole('button', { name: 'Add filters' }))
    })

    await userEvent.click(canvas.getByRole('button', { name: 'Add filters' }))

    expect(canvas.queryByText('Custom Range')).not.toBeInTheDocument()

    await step('Labels have updated', async () => {
      await waitFor(() => expect(canvas.queryByText('Custom Range')).toBeInTheDocument(), {
        timeout: 2100,
      })
    })
  },
}
