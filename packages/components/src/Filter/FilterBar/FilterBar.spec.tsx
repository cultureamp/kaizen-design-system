import React, { useEffect, useState } from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { FilterMultiSelect } from '../index'
import { FilterBar, type FilterBarProps } from './FilterBar'
import { useFilterBarContext } from './context/FilterBarContext'
import { type Filters, type FiltersValues } from './types'

const user = userEvent.setup()

const TEST_ID__FILTER = 'testid__filter'

type ValuesSimple = {
  flavour: string
  sugarLevel: number
  iceLevel: number
}

const simpleFilters = [
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
        data-testid={TEST_ID__FILTER}
      />
    ),
  },
  {
    id: 'sugarLevel',
    name: 'Sugar Level',
    Component: (
      <FilterBar.Select
        items={[
          { value: 0, label: '0%' },
          { value: 50, label: '50%' },
          { value: 100, label: '100%' },
        ]}
        data-testid={TEST_ID__FILTER}
      />
    ),
  },
  {
    id: 'iceLevel',
    name: 'Ice Level',
    Component: (
      <FilterBar.Select
        items={[
          { value: 0, label: '0%' },
          { value: 50, label: '50%' },
          { value: 100, label: '100%' },
        ]}
        data-testid={TEST_ID__FILTER}
      />
    ),
  },
] satisfies Filters<ValuesSimple>

type ValuesRemovable = {
  flavour: string
  topping: string
  others: string
}

const filtersRemovable = [
  {
    id: 'flavour',
    name: 'Flavour',
    Component: (
      <FilterBar.Select items={[{ value: 'jasmine-milk-tea', label: 'Jasmine Milk Tea' }]} />
    ),
    isRemovable: true,
  },
  {
    id: 'topping',
    name: 'Topping',
    Component: <FilterBar.Select items={[{ value: 'pearls', label: 'Pearls' }]} />,
    isRemovable: true,
  },
  {
    id: 'others',
    name: 'Others',
    Component: (
      <FilterBar.MultiSelect
        items={[
          { value: 'gluten-free', label: 'Gluten Free' },
          { value: 'no-sugar', label: 'No Sugar' },
          { value: 'dairy-free', label: 'Dairy Free' },
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
] satisfies Filters<ValuesRemovable>

type ValuesDependent = {
  flavour: string
  topping: string
}

const filtersDependent = [
  {
    id: 'flavour',
    name: 'Flavour',
    Component: (
      <FilterBar.Select items={[{ value: 'jasmine-milk-tea', label: 'Jasmine Milk Tea' }]} />
    ),
  },
  {
    id: 'topping',
    name: 'Topping',
    Component: <FilterBar.Select items={[{ value: 'pearls', label: 'Pearls' }]} />,
    isUsableWhen: (state) => state.flavour.value !== undefined,
  },
] satisfies Filters<ValuesDependent>

const FilterBarWrapper = <T extends FiltersValues>({
  filters,
  defaultValues,
  ...customProps
}: Partial<FilterBarProps<T>> & {
  filters: FilterBarProps<T>['filters']
  defaultValues?: FilterBarProps<T>['values']
}): JSX.Element => {
  const [activeValues, setActiveValues] = useState<Partial<T>>(defaultValues ?? {})

  return (
    <>
      <FilterBar<T>
        filters={filters}
        values={activeValues}
        onValuesChange={setActiveValues}
        {...customProps}
      />
      <div data-testid="testid__values">{JSON.stringify(activeValues)}</div>
    </>
  )
}

const waitForI18nContent = async (): Promise<void> => {
  await waitFor(() => {
    expect(screen.getByRole('button', { name: 'Clear all filters' })).toBeVisible()
  })
}

describe('<FilterBar />', () => {
  it('renders filters in the provided order', async () => {
    const { getAllByTestId } = render(<FilterBarWrapper<ValuesSimple> filters={simpleFilters} />)
    await waitForI18nContent()

    const filters = getAllByTestId(TEST_ID__FILTER)
    expect(filters.length).toBe(3)
    expect(filters[0]).toHaveTextContent('Flavour')
    expect(filters[1]).toHaveTextContent('Sugar Level')
    expect(filters[2]).toHaveTextContent('Ice Level')
  })

  it('retains Filter accessibility', async () => {
    render(<FilterBarWrapper filters={simpleFilters} />)

    const filterButton = screen.getByRole('button', { name: 'Flavour' })
    await user.click(filterButton)

    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: 'Flavour' })).toBeVisible()
    })
  })

  describe('Removable filters', () => {
    it('shows inactive filters in the Add Filters menu only', async () => {
      const { getByRole, queryByText } = render(
        <FilterBarWrapper<ValuesRemovable> filters={filtersRemovable} />,
      )
      await waitForI18nContent()

      expect(queryByText('Topping')).not.toBeInTheDocument()

      const addFiltersButton = getByRole('button', { name: 'Add filters' })
      await user.click(addFiltersButton)

      const list = getByRole('list')
      const menuOption = within(list).getByRole('button', { name: 'Topping' })

      await waitFor(() => {
        expect(menuOption).toBeVisible()
      })
    })

    it('shows removable filter as active if there is a default value', async () => {
      const { getByRole } = render(
        <FilterBarWrapper<ValuesRemovable>
          filters={filtersRemovable}
          defaultValues={{ topping: 'pearls' }}
        />,
      )
      await waitForI18nContent()
      expect(getByRole('button', { name: 'Topping : Pearls' })).toBeVisible()
      expect(getByRole('button', { name: 'Remove filter - Topping' })).toBeVisible()
    })

    it('does not show active removable filters in the Add Filters menu', async () => {
      const { getByRole } = render(
        <FilterBarWrapper<ValuesRemovable>
          filters={filtersRemovable}
          defaultValues={{ topping: 'pearls' }}
        />,
      )
      await waitForI18nContent()

      const addFiltersButton = getByRole('button', { name: 'Add filters' })
      await user.click(addFiltersButton)

      const list = getByRole('list')
      const menuOption = within(list).queryByRole('button', { name: 'Topping' })
      await waitFor(() => {
        expect(menuOption).not.toBeInTheDocument()
      })
    })

    it('clears the value of a filter if it is removed', async () => {
      const { getByRole } = render(
        <FilterBarWrapper<ValuesRemovable>
          filters={filtersRemovable}
          defaultValues={{ topping: 'pearls' }}
        />,
      )
      await waitForI18nContent()

      const filterButton = getByRole('button', { name: 'Topping : Pearls' })
      expect(filterButton).toBeVisible()

      await user.click(getByRole('button', { name: 'Remove filter - Topping' }))
      await waitFor(() => {
        expect(filterButton).not.toBeInTheDocument()
      })

      const addFiltersButton = getByRole('button', { name: 'Add filters' })
      await user.click(addFiltersButton)

      const list = getByRole('list')
      const menuOption = within(list).getByRole('button', { name: 'Topping' })
      await waitFor(() => {
        expect(menuOption).toBeVisible()
      })

      await user.click(menuOption)
      await waitFor(() => {
        expect(list).not.toBeInTheDocument()
      })
      expect(getByRole('button', { name: 'Topping' })).toBeVisible()
    })

    it('adds new filters in the provided order', async () => {
      const { getByRole, getAllByTestId } = render(
        <FilterBarWrapper<ValuesSimple>
          filters={simpleFilters.map((filter) => ({
            ...filter,
            isRemovable: true,
          }))}
        />,
      )
      await waitForI18nContent()

      const addFiltersButton = getByRole('button', { name: 'Add filters' })
      await user.click(addFiltersButton)

      const menuOptionIceLevel = getByRole('button', { name: 'Ice Level' })
      await user.click(menuOptionIceLevel)
      await user.click(addFiltersButton)

      const menuOptionFlavour = getByRole('button', { name: 'Flavour' })
      await user.click(menuOptionFlavour)
      await user.click(addFiltersButton)

      const menuOptionSugarLevel = getByRole('button', { name: 'Sugar Level' })
      await user.click(menuOptionSugarLevel)

      const filters = getAllByTestId(TEST_ID__FILTER)
      expect(filters.length).toBe(3)
      expect(filters[0]).toHaveTextContent('Ice Level')
      expect(filters[1]).toHaveTextContent('Flavour')
      expect(filters[2]).toHaveTextContent('Sugar Level')
    })

    it('moves focus to recently added filter button', async () => {
      const { getByRole } = render(
        <FilterBarWrapper<ValuesSimple>
          filters={simpleFilters.map((filter) => ({
            ...filter,
            isRemovable: true,
          }))}
        />,
      )
      await waitForI18nContent()

      const addFiltersButton = getByRole('button', { name: 'Add filters' })
      await user.click(addFiltersButton)

      const menuOptionIceLevel = getByRole('button', { name: 'Ice Level' })
      await user.click(menuOptionIceLevel)

      expect(getByRole('button', { name: 'Ice Level' })).toHaveFocus()
    })

    it('moves focus to recently added filter button in the FilterMultiSelect case', async () => {
      const { getByRole } = render(<FilterBarWrapper<ValuesRemovable> filters={filtersRemovable} />)
      await waitForI18nContent()

      const addFiltersButton = getByRole('button', { name: 'Add filters' })
      await user.click(addFiltersButton)

      const menuOptionOthers = getByRole('button', { name: 'Others' })
      await user.click(menuOptionOthers)

      expect(getByRole('button', { name: 'Others' })).toHaveFocus()
    })

    it('restores focus to the add filter button after remove', async () => {
      const { getByRole } = render(
        <FilterBarWrapper<ValuesRemovable>
          filters={filtersRemovable}
          defaultValues={{ topping: 'pearls' }}
        />,
      )
      await waitForI18nContent()

      const filterButton = getByRole('button', { name: 'Topping : Pearls' })
      expect(filterButton).toBeVisible()

      await user.click(getByRole('button', { name: 'Remove filter - Topping' }))
      await waitFor(() => {
        expect(filterButton).not.toBeInTheDocument()
      })

      expect(getByRole('button', { name: 'Add filters' })).toHaveFocus()
    })
  })

  describe('Dependent filters', () => {
    describe('Condition not met', () => {
      it('does not show a dependent filter', async () => {
        const { queryByRole, getByRole } = render(<FilterBarWrapper filters={filtersDependent} />)
        await waitForI18nContent()
        expect(queryByRole('button', { name: 'Topping' })).not.toBeInTheDocument()
        expect(getByRole('button', { name: 'Add filters' })).toBeDisabled()
      })

      it('clears the value if the filter is not usable', async () => {
        const { getByTestId } = render(
          <FilterBarWrapper
            filters={filtersDependent}
            defaultValues={{
              topping: 'pearls',
            }}
          />,
        )
        await waitForI18nContent()
        expect(getByTestId('testid__values').textContent).toBe(JSON.stringify({}))
      })
    })

    describe('Condition met', () => {
      it('shows a non-removable dependent filter in active filters', async () => {
        const { queryByRole, getByRole, findByRole } = render(
          <FilterBarWrapper filters={filtersDependent} />,
        )
        await waitForI18nContent()

        const flavourButton = getByRole('button', { name: 'Flavour' })
        expect(queryByRole('button', { name: 'Topping' })).not.toBeInTheDocument()

        await user.click(flavourButton)
        const flavourOption = await findByRole('option', {
          name: 'Jasmine Milk Tea',
        })
        await user.click(flavourOption)

        await waitFor(() => {
          expect(getByRole('button', { name: 'Topping' })).toBeVisible()
        })
      })

      it('shows a removable dependent filter in Add Filters menu', async () => {
        const { getByRole, findByRole } = render(
          <FilterBarWrapper
            filters={[
              {
                id: 'flavour',
                name: 'Flavour',
                Component: (
                  <FilterBar.Select
                    items={[{ value: 'jasmine-milk-tea', label: 'Jasmine Milk Tea' }]}
                  />
                ),
              },
              {
                id: 'topping',
                name: 'Topping',
                Component: <FilterBar.Select items={[{ value: 'pearls', label: 'Pearls' }]} />,
                isUsableWhen: (state) => state.flavour.value !== undefined,
                isRemovable: true,
              },
            ]}
          />,
        )
        await waitForI18nContent()

        const addFiltersButton = getByRole('button', { name: 'Add filters' })
        expect(addFiltersButton).toBeDisabled()

        const flavourButton = getByRole('button', { name: 'Flavour' })
        await user.click(flavourButton)
        const flavourOption = await findByRole('option', {
          name: 'Jasmine Milk Tea',
        })
        await user.click(flavourOption)

        await waitFor(() => {
          expect(addFiltersButton).not.toBeDisabled()
        })

        await user.click(addFiltersButton)

        const list = getByRole('list')
        const menuOption = within(list).getByRole('button', { name: 'Topping' })

        await waitFor(() => {
          expect(menuOption).toBeVisible()
        })
      })
    })

    describe('Condition result change', () => {
      it('clears the value for an unusable filter', async () => {
        const checkValues = vi.fn()

        const Wrapper = (): JSX.Element => {
          const [values, setValues] = useState<Partial<ValuesDependent>>({
            topping: 'pearls',
          })

          return (
            <div>
              <FilterBar<ValuesDependent>
                filters={filtersDependent}
                values={values}
                onValuesChange={setValues}
              />
              <button type="button" onClick={() => checkValues(values)}>
                Check values
              </button>
            </div>
          )
        }

        const { queryByRole, getByRole } = render(<Wrapper />)
        await waitForI18nContent()

        expect(queryByRole('button', { name: 'Topping : Pearls' })).not.toBeInTheDocument()

        await user.click(getByRole('button', { name: 'Check values' }))
        await waitFor(() => {
          expect(checkValues).toHaveBeenCalledWith({})
        })
      })

      it('clears the value and removes a filter which loses usability', async () => {
        const checkValues = vi.fn()

        const Wrapper = (): JSX.Element => {
          const [values, setValues] = useState<Partial<ValuesDependent>>({
            flavour: 'jasmine-milk-tea',
            topping: 'pearls',
          })

          return (
            <div>
              <FilterBar<ValuesDependent>
                filters={filtersDependent}
                values={values}
                onValuesChange={setValues}
              />
              <button type="button" onClick={() => setValues({ ...values, flavour: undefined })}>
                Clear Flavour
              </button>
              <button type="button" onClick={() => checkValues(values)}>
                Check values
              </button>
            </div>
          )
        }

        const { getByRole } = render(<Wrapper />)
        await waitForI18nContent()

        expect(getByRole('button', { name: 'Flavour : Jasmine Milk Tea' })).toBeVisible()
        const toppingsButton = getByRole('button', { name: 'Topping : Pearls' })
        expect(toppingsButton).toBeVisible()

        await user.click(getByRole('button', { name: 'Clear Flavour' }))
        await user.click(getByRole('button', { name: 'Check values' }))

        await waitFor(() => {
          expect(checkValues).toHaveBeenCalledWith({})
          expect(toppingsButton).not.toBeInTheDocument()
        })
      })
    })

    describe('Multiple dependencies', () => {
      it('handles complex dependencies', async () => {
        type ValuesComplexDeps = {
          coffee: string
          milk: string
          syrup: string
          sugar: string
          ice: string
        }

        const filters = [
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
        ] satisfies Filters<ValuesComplexDeps>

        const { queryByRole, getByRole } = render(
          <FilterBarWrapper filters={filters} defaultValues={{ milk: 'full-cream' }} />,
        )
        await waitForI18nContent()

        const coffeeButton = getByRole('button', { name: 'Coffee' })
        expect(coffeeButton).toBeVisible()
        expect(queryByRole('button', { name: 'Milk' })).not.toBeInTheDocument()
        expect(queryByRole('button', { name: 'Syrup' })).not.toBeInTheDocument()
        expect(queryByRole('button', { name: 'Sugar' })).not.toBeInTheDocument()
        expect(queryByRole('button', { name: 'Ice' })).not.toBeInTheDocument()

        const addFiltersButton = getByRole('button', { name: 'Add filters' })
        expect(addFiltersButton).toBeDisabled()

        await user.click(coffeeButton)
        await user.click(getByRole('option', { name: 'Long Black' }))

        await waitFor(() => {
          expect(coffeeButton).toHaveAccessibleName('Coffee : Long Black')
        })
        const iceButton = getByRole('button', { name: 'Ice' })
        expect(iceButton).toBeVisible()
        expect(addFiltersButton).toBeDisabled()

        await user.click(coffeeButton)
        await user.click(getByRole('option', { name: 'Latte' }))

        await waitFor(() => {
          expect(coffeeButton).toHaveAccessibleName('Coffee : Latte')
        })
        const milkButton = getByRole('button', { name: 'Milk' })
        expect(milkButton).toBeVisible()
        expect(addFiltersButton).toBeDisabled()

        await user.click(milkButton)
        await user.click(getByRole('option', { name: 'Oat' }))

        await waitFor(() => {
          expect(milkButton).toHaveAccessibleName('Milk : Oat')
        })
        expect(addFiltersButton).not.toBeDisabled()

        await user.click(addFiltersButton)

        const list = getByRole('list')
        const menuOptionSugar = within(list).getByRole('button', {
          name: 'Sugar',
        })
        const menuOptionSyrup = within(list).getByRole('button', {
          name: 'Syrup',
        })
        expect(menuOptionSugar).toBeVisible()
        expect(menuOptionSyrup).toBeVisible()

        await user.click(menuOptionSugar)

        await waitFor(() => {
          expect(list).not.toBeInTheDocument()
        })
        const sugarButton = getByRole('button', { name: 'Sugar' })
        expect(sugarButton).toBeVisible()
        expect(addFiltersButton).toBeDisabled()

        await user.click(getByRole('button', { name: 'Remove filter - Sugar' }))

        await waitFor(() => {
          expect(sugarButton).not.toBeInTheDocument()
        })
        expect(addFiltersButton).not.toBeDisabled()
      })
    })
  })

  describe('External events', () => {
    it('allows updating the values via an external event', async () => {
      const Wrapper = (): JSX.Element => {
        type ExternalEventValues = {
          flavour: string
        }

        const [values, setValues] = useState<Partial<ExternalEventValues>>({})

        const filters = [
          {
            id: 'flavour',
            name: 'Flavour',
            Component: (
              <FilterBar.Select
                items={[
                  { value: 'honey-milk-tea', label: 'Honey Milk Tea' },
                  { value: 'lychee-green-tea', label: 'Lychee Green Tea' },
                ]}
              />
            ),
          },
        ] satisfies Filters<ExternalEventValues>

        return (
          <div>
            <FilterBar filters={filters} values={values} onValuesChange={setValues} />
            <button type="button" onClick={() => setValues({ flavour: 'honey-milk-tea' })}>
              Update Flavour to honey-milk-tea
            </button>
          </div>
        )
      }

      const { getByRole } = render(<Wrapper />)
      await waitForI18nContent()

      const flavourButton = getByRole('button', { name: 'Flavour' })
      expect(flavourButton).toHaveAccessibleName('Flavour')

      await user.click(getByRole('button', { name: 'Update Flavour to honey-milk-tea' }))

      await waitFor(() => {
        expect(flavourButton).toHaveAccessibleName('Flavour : Honey Milk Tea')
      })
    })

    it('shows a removable filter when a value is set', async () => {
      const Wrapper = (): JSX.Element => {
        type ExternalEventValues = {
          flavour: string
        }

        const [values, setValues] = useState<Partial<ExternalEventValues>>({})

        const filters = [
          {
            id: 'flavour',
            name: 'Flavour',
            Component: (
              <FilterBar.Select
                items={[
                  { value: 'honey-milk-tea', label: 'Honey Milk Tea' },
                  { value: 'lychee-green-tea', label: 'Lychee Green Tea' },
                ]}
              />
            ),
            isRemovable: true,
          },
        ] satisfies Filters<ExternalEventValues>

        return (
          <div>
            <FilterBar filters={filters} values={values} onValuesChange={setValues} />
            <button type="button" onClick={() => setValues({ flavour: 'honey-milk-tea' })}>
              Update Flavour to honey-milk-tea
            </button>
          </div>
        )
      }

      const { getByRole, queryByRole } = render(<Wrapper />)
      await waitForI18nContent()

      expect(queryByRole('button', { name: 'Flavour' })).not.toBeInTheDocument()

      await user.click(getByRole('button', { name: 'Update Flavour to honey-milk-tea' }))

      await waitFor(() => {
        expect(getByRole('button', { name: 'Flavour : Honey Milk Tea' })).toBeVisible()
      })
    })
  })

  describe('Context use cases', () => {
    describe('getActiveFilterValues()', () => {
      type Items = { value: string; label: string }[]

      type AsyncValues = {
        city: string[]
        hero: string[]
      }

      const MockFilterAsyncComponent = ({
        id,
        fetcher,
      }: {
        id: string
        fetcher: (args: Partial<AsyncValues>) => Promise<Items>
      }): JSX.Element => {
        const [items, setItems] = useState<Items>([])
        const { getActiveFilterValues } = useFilterBarContext()
        const activeFilterVals = getActiveFilterValues()

        useEffect(() => {
          fetcher(activeFilterVals).then((fetchedItems) => {
            if (JSON.stringify(fetchedItems) !== JSON.stringify(items)) {
              setItems(fetchedItems)
            }
          })
        }, [activeFilterVals, fetcher, items])

        return (
          <FilterBar.MultiSelect id={id} items={items}>
            {() => (
              <FilterMultiSelect.ListBox>
                {({ allItems }) => (
                  <FilterMultiSelect.ListBoxSection items={allItems} sectionName="All Items">
                    {(item) => <FilterMultiSelect.Option key={item.key} item={item} />}
                  </FilterMultiSelect.ListBoxSection>
                )}
              </FilterMultiSelect.ListBox>
            )}
          </FilterBar.MultiSelect>
        )
      }

      const fetchCityOptions = vi.fn((filterValues: Partial<AsyncValues>) => {
        const isSupermanInFilterValue = filterValues.hero?.includes('superman')
        const isBatmanInFilterValue = filterValues.hero?.includes('batman')

        if (isBatmanInFilterValue && !isSupermanInFilterValue) {
          return Promise.resolve([{ value: 'gotham', label: 'Gotham' }])
        }

        return Promise.resolve([
          { value: 'gotham', label: 'Gotham' },
          { value: 'metro', label: 'Metropolis' },
        ])
      })

      const fetchHeroOptions = vi.fn((filterValues: Partial<AsyncValues>) => {
        const isGothamInFilterValue = filterValues.city?.includes('gotham')
        const isMetroInFilterValue = filterValues.city?.includes('metro')

        if (isGothamInFilterValue && !isMetroInFilterValue) {
          return Promise.resolve([{ value: 'batman', label: 'Batman' }])
        }

        return Promise.resolve([
          { value: 'superman', label: 'Superman' },
          { value: 'batman', label: 'Batman' },
        ])
      })

      const config = [
        {
          id: 'city',
          name: 'City',
          Component: <MockFilterAsyncComponent id="city" fetcher={fetchCityOptions} />,
        },
        {
          id: 'hero',
          name: 'Hero',
          Component: <MockFilterAsyncComponent id="Hero" fetcher={fetchHeroOptions} />,
        },
      ] satisfies Filters<AsyncValues>

      it('can re-fetch options with all active filter values pulled off of the FilterBarContext', async () => {
        const { getByRole, queryByRole } = render(
          <FilterBarWrapper<AsyncValues> filters={config} defaultValues={{}} />,
        )

        await user.click(getByRole('button', { name: 'City' }))

        await waitFor(() => {
          expect(getByRole('option', { name: 'Gotham' })).toBeVisible()
          expect(getByRole('option', { name: 'Metropolis' })).toBeVisible()
        })

        await user.click(getByRole('option', { name: 'Gotham' }))

        // close city filter
        await user.click(document.body)

        await user.click(getByRole('button', { name: 'Hero' }))

        await waitFor(() => {
          expect(getByRole('option', { name: 'Batman' })).toBeVisible()
          expect(queryByRole('option', { name: 'Superman' })).not.toBeInTheDocument()
        })

        await user.click(getByRole('option', { name: 'Batman' }))

        await user.click(document.body)

        await user.click(getByRole('button', { name: 'City : Gotham' }))

        await waitFor(() => {
          expect(getByRole('option', { name: 'Gotham' })).toBeVisible()
          expect(queryByRole('option', { name: 'Metropolis' })).not.toBeInTheDocument()
        })
      })
    })

    describe('openFilter()', () => {
      type CycleFilterValues = {
        cycle: string
        customDate: Date
      }

      const CycleFilter = ({ id }: { id?: string }): JSX.Element => {
        const { openFilter } = useFilterBarContext<string, CycleFilterValues>()

        return (
          <FilterBar.Select
            id={id}
            items={[{ value: 'custom', label: 'Custom Date' }]}
            onSelectionChange={(key) => {
              if (key === 'custom') openFilter('customDate')
            }}
          />
        )
      }

      const cycleFilters = [
        {
          id: 'cycle',
          name: 'Cycle',
          Component: <CycleFilter />,
        },
        {
          id: 'customDate',
          name: 'Custom Date',
          Component: <FilterBar.DatePicker />,
        },
      ] satisfies Filters<CycleFilterValues>

      it("opens the Custom Date filter when Cycle's 'custom' value is selected", async () => {
        const { getByRole } = render(<FilterBarWrapper<CycleFilterValues> filters={cycleFilters} />)
        await waitForI18nContent()

        const customDateButton = getByRole('button', { name: 'Custom Date' })
        expect(customDateButton).toHaveAttribute('aria-expanded', 'false')

        await user.click(getByRole('button', { name: 'Cycle' }))

        const customDateOption = getByRole('option', { name: 'Custom Date' })
        await waitFor(() => {
          expect(customDateOption).toBeVisible()
        })

        await user.click(customDateOption)

        await waitFor(() => {
          expect(customDateButton).toHaveAttribute('aria-expanded', 'true')
        })
      })
    })
  })
})
