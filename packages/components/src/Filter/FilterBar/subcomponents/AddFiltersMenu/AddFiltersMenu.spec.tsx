import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FilterBarProvider, type FilterBarProviderProps } from '../../context/FilterBarContext'
import { type Filters } from '../../types'
import { AddFiltersMenu } from './AddFiltersMenu'

const user = userEvent.setup()

type Values = {
  coffee: string
  tea: string
  milk: string
}

const AddFiltersMenuWrapper = ({
  filters,
}: {
  filters: FilterBarProviderProps<Values>['filters']
}): JSX.Element => (
  <FilterBarProvider<Values> filters={filters} values={{}} onValuesChange={() => undefined}>
    {() => <AddFiltersMenu />}
  </FilterBarProvider>
)

describe('<AddFiltersMenu />', () => {
  it('shows inactive filters', async () => {
    const filters = [
      {
        id: 'coffee',
        name: 'Coffee',
        Component: <div />,
        isRemovable: true,
      },
      {
        id: 'tea',
        name: 'Tea',
        Component: <div />,
      },
      {
        id: 'milk',
        name: 'Milk',
        Component: <div />,
        isRemovable: true,
      },
    ] satisfies Filters<Values>

    render(<AddFiltersMenuWrapper filters={filters} />)

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Add Filters' })).toBeVisible()
    })
    const addFiltersButton = screen.getByRole('button', { name: 'Add Filters' })
    await user.click(addFiltersButton)

    await waitFor(() => {
      expect(screen.getByRole('list')).toBeVisible()
    })
    expect(screen.getByRole('button', { name: 'Coffee' })).toBeVisible()
    expect(screen.queryByRole('button', { name: 'Tea' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Milk' })).toBeVisible()
  })

  it('disables the Add Filters button when there are no inactive filters', async () => {
    const filters = [
      {
        id: 'coffee',
        name: 'Coffee',
        Component: <div />,
      },
    ] satisfies Filters<Values>

    render(<AddFiltersMenuWrapper filters={filters} />)

    await waitFor(() => {
      const addFiltersButton = screen.getByRole('button', {
        name: 'Add Filters',
      })
      expect(addFiltersButton).toBeDisabled()
    })
  })
})
