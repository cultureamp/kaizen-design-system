import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import { FilterMultiSelect } from '~components/Filter/FilterMultiSelect'
import { type DateRange } from '~components/index'
import { FilterBar, type Filters } from '../index'

const meta = {
  title: 'Components/FilterBar/FilterBar Tests',
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

export const ClearAllFromValue: Story = {
  render: (args) => {
    const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({})
    return (
      <FilterBar<Values>
        {...args}
        filters={filters}
        values={activeValues}
        onValuesChange={onActiveValuesChange}
      />
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)

    await step('Clear all button hidden by default given no values', async () => {
      expect(
        canvas.queryByRole('button', {
          name: 'Clear all filters',
        }),
      ).not.toBeInTheDocument()
    })

    await step('filter value is added', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Flavour' }))
      await userEvent.click(canvas.getByRole('option', { name: 'Jasmine Milk Tea' }))
      expect(canvas.getByRole('button', { name: 'Flavour: Jasmine Milk Tea' })).toBeInTheDocument()
    })

    await step("'Clear all' press removes the value and hides itself", async () => {
      const clearAllButton = canvas.getByRole('button', {
        name: 'Clear all filters',
      })
      userEvent.click(clearAllButton)

      waitFor(() => expect(canvas.getByRole('button', { name: 'Flavour' })).toBeInTheDocument())

      waitFor(() =>
        expect(
          canvas.queryByRole('button', {
            name: 'Clear all filters',
          }),
        ).not.toBeInTheDocument(),
      )
    })
  },
}

export const ClearAllFromRemovable: Story = {
  render: (args) => {
    const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({})
    return (
      <FilterBar<Values>
        {...args}
        filters={filters}
        values={activeValues}
        onValuesChange={onActiveValuesChange}
      />
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)

    await step('removable filter is added with no value', async () => {
      await waitFor(() => {
        userEvent.click(canvas.getByRole('button', { name: 'Add Filters' }))
      })

      await waitFor(() => {
        userEvent.click(canvas.getByRole('button', { name: 'Toppings' }))
      })
    })

    await step("'Clear all' press removes removable filter", async () => {
      await waitFor(() => {
        userEvent.click(
          canvas.getByRole('button', {
            name: 'Clear all filters',
          }),
        )
      })

      waitFor(() =>
        expect(canvas.queryByRole('button', { name: 'Toppings' })).not.toBeInTheDocument(),
      )

      waitFor(() =>
        expect(
          canvas.queryByRole('button', {
            name: 'Clear all filters',
          }),
        ).not.toBeInTheDocument(),
      )
    })
  },
}

export const ClearAllRemovesItself: Story = {
  render: (args) => {
    const [activeValues, onActiveValuesChange] = useState<Partial<Values>>({})
    return (
      <FilterBar<Values>
        {...args}
        filters={filters}
        values={activeValues}
        onValuesChange={onActiveValuesChange}
      />
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)

    await step('removable filter is added with no value', async () => {
      await waitFor(() => userEvent.click(canvas.getByRole('button', { name: 'Add Filters' })))
      await userEvent.click(canvas.getByRole('button', { name: 'Drank' }))
    })

    await step('Clear all button hides by itself after removing filter', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'Remove filter - Drank' }))
    })

    waitFor(() =>
      expect(
        canvas.queryByRole('button', {
          name: 'Clear all filters',
        }),
      ).not.toBeInTheDocument(),
    )
  },
}
