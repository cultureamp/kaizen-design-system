import React, { useState } from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FilterButton } from '~components/Filter/FilterButton'
import { FilterSelect, FilterSelectProps } from './FilterSelect'
import { mixedMockItemsUnordered, singleMockItems } from './_docs/mockData'
import { SelectOption } from './types'

const user = userEvent.setup()

const FilterSelectWrapper = ({
  isOpen: propsIsOpen = false,
  items = mixedMockItemsUnordered,
  selectedKey,
  onSelectionChange,
  ...restProps
}: Partial<FilterSelectProps>): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(propsIsOpen)
  const [selected, setSelected] = React.useState<
    FilterSelectProps['selectedKey']
  >(selectedKey ?? null)

  return (
    <FilterSelect
      label="Coffee"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      renderTrigger={(triggerButtonProps): JSX.Element => (
        <FilterButton {...triggerButtonProps} />
      )}
      items={items}
      selectedKey={selected}
      onSelectionChange={(key): void => {
        setSelected(key)
        onSelectionChange?.(key)
      }}
      {...restProps}
    />
  )
}

describe('<FilterSelect>', () => {
  it('does not show the options initially', () => {
    render(<FilterSelectWrapper />)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('shows the options initially when isOpen is true', async () => {
    render(<FilterSelectWrapper isOpen />)
    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeVisible()
    })
  })

  describe('Trigger', () => {
    it('shows the selected option in the button', () => {
      render(<FilterSelectWrapper selectedKey="magic" />)
      const trigger = screen.getByRole('button', {
        name: 'Coffee : Magic',
      })
      expect(trigger).toBeVisible()
    })

    describe('Trigger - Mouse interaction', () => {
      it('shows the options when the filter button is clicked', async () => {
        render(<FilterSelectWrapper />)
        const trigger = screen.getByRole('button', { name: 'Coffee' })
        await user.click(trigger)
        await waitFor(() => {
          expect(screen.queryByRole('listbox')).toBeVisible()
        })
      })

      it('closes when user clicks outside of the menu', async () => {
        render(<FilterSelectWrapper isOpen />)
        await user.click(document.body)
        await waitFor(() => {
          expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
        })
      })

      it('closes when user clicks on an option', async () => {
        render(<FilterSelectWrapper isOpen />)
        const option = screen.getByRole('option', { name: 'Magic' })
        await user.click(option)
        await waitFor(() => {
          expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
        })
      })
    })

    describe('Trigger - Keyboard interaction', () => {
      it('opens the menu when user hits enter key', async () => {
        render(<FilterSelectWrapper />)
        const trigger = screen.getByRole('button', { name: 'Coffee' })
        await user.tab()
        await waitFor(() => {
          expect(trigger).toHaveFocus()
        })
        await user.keyboard('{Enter}')
        await waitFor(() => {
          expect(screen.queryByRole('listbox')).toBeVisible()
        })
      })

      it('moves the focus to the first focusable element inside the menu initially', async () => {
        render(<FilterSelectWrapper isOpen />)
        expect(screen.queryByRole('listbox')).toBeVisible()
        await waitFor(() => {
          expect(screen.getAllByRole('option')[0]).toHaveFocus()
        })
      })

      it('moves focus to the first item on ArrowDown if nothing has been selected', async () => {
        render(<FilterSelectWrapper selectedKey={undefined} />)
        const trigger = screen.getByRole('button', { name: 'Coffee' })
        await user.tab()
        await waitFor(() => {
          expect(trigger).toHaveFocus()
        })
        await user.keyboard('{ArrowDown}')

        await waitFor(() => {
          expect(screen.getAllByRole('option')[0]).toHaveFocus()
        })
      })
      it('moves focus to the last item on ArrowUp if nothing has been selected', async () => {
        render(<FilterSelectWrapper selectedKey={undefined} />)
        const trigger = screen.getByRole('button', { name: 'Coffee' })
        await user.tab()
        await waitFor(() => {
          expect(trigger).toHaveFocus()
        })
        await user.keyboard('{ArrowUp}')

        await waitFor(() => {
          const options = screen.getAllByRole('option')
          expect(options[options.length - 1]).toHaveFocus()
        })
      })
      it('moves focus to the current selected item on Enter', async () => {
        render(<FilterSelectWrapper selectedKey="hazelnut" />)
        const trigger = screen.getByRole('button', {
          name: 'Coffee : Hazelnut',
        })
        await user.tab()
        await waitFor(() => {
          expect(trigger).toHaveFocus()
        })
        await user.keyboard('{Enter}')

        await waitFor(() => {
          expect(screen.getByRole('option', { name: 'Hazelnut' })).toHaveFocus()
        })
      })
      it('moves focus to the current selected item on ArrowUp', async () => {
        render(<FilterSelectWrapper selectedKey="hazelnut" />)
        const trigger = screen.getByRole('button', {
          name: 'Coffee : Hazelnut',
        })
        await user.tab()
        await waitFor(() => {
          expect(trigger).toHaveFocus()
        })
        await user.keyboard('{ArrowUp}')

        await waitFor(() => {
          expect(screen.getByRole('option', { name: 'Hazelnut' })).toHaveFocus()
        })
      })
      it('moves focus to the current selected item on ArrowDown', async () => {
        render(<FilterSelectWrapper selectedKey="hazelnut" />)
        const trigger = screen.getByRole('button', {
          name: 'Coffee : Hazelnut',
        })
        await user.tab()
        await waitFor(() => {
          expect(trigger).toHaveFocus()
        })
        await user.keyboard('{ArrowDown}')

        await waitFor(() => {
          expect(screen.getByRole('option', { name: 'Hazelnut' })).toHaveFocus()
        })
      })
      it('closes when user hits the escape key', async () => {
        render(<FilterSelectWrapper isOpen />)
        expect(screen.queryByRole('listbox')).toBeVisible()
        await user.keyboard('{Escape}')
        await waitFor(() => {
          expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
        })
      })
    })
  })

  describe('Selection', () => {
    it('changes the value within the button when an option is selected', async () => {
      render(
        <FilterSelectWrapper
          renderTrigger={(triggerButtonProps): JSX.Element => (
            <FilterButton {...triggerButtonProps} />
          )}
        />,
      )

      const button = screen.getByRole('button', { name: 'Coffee' })

      await user.click(button)
      await waitFor(() => {
        expect(screen.queryByRole('listbox')).toBeVisible()
      })

      const option = screen.getByRole('option', { name: 'Magic' })
      await user.click(option)

      await waitFor(() => {
        expect(
          screen.getByRole('button', { name: 'Coffee : Magic' }),
        ).toBeVisible()
      })
    })
  })

  describe('Number values', () => {
    it('finds selected option when value is a number', () => {
      const { getByRole } = render(
        <FilterSelectWrapper
          items={[
            { value: 0, label: 'Zero' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
          ]}
          selectedKey={50}
        />,
      )
      expect(getByRole('button', { name: 'Coffee : 50' })).toBeInTheDocument()
    })
  })
})

describe('Stringified object values', () => {
  it('finds selected option when value is a stringified object', () => {
    const { getByRole } = render(
      <FilterSelectWrapper
        items={[
          {
            value: '{"sortBy":"creator_name","sortOrder":"asc"}',
            label: 'Created by A-Z',
          },
          {
            value: '{"sortBy":"creator_name","sortOrder":"dsc"}',
            label: 'Created by Z-A',
          },
        ]}
        selectedKey='{"sortBy":"creator_name","sortOrder":"asc"}'
      />,
    )
    expect(
      getByRole('button', { name: 'Coffee : Created by A-Z' }),
    ).toBeInTheDocument()
  })
})

const defaultProps: FilterSelectProps = {
  label: 'Coffee',
  isOpen: false,
  setIsOpen: () => undefined,
  renderTrigger: (triggerButtonProps): JSX.Element => (
    <FilterButton {...triggerButtonProps} />
  ),
  items: singleMockItems,
}

/* eslint-disable vitest/expect-expect */
describe('FilterSelect generic', () => {
  it('should prevent adding `options` attribute to option', () => {
    /* @ts-expect-error TS error expected */
    <FilterSelect<SelectOption & { options: string[] }> {...defaultProps} />
  })

  describe('Extended option', () => {
    it('should error when new required attribute is missing from items', () => {
      /* @ts-expect-error TS error expected */
      <FilterSelect<SelectOption & { isRubberDuck: boolean }>
        {...defaultProps}
      />
    })

    it('should allow consumer to access custom attributes in children', () => {
      <FilterSelect<SelectOption & { isRubberDuck: boolean }>
        {...defaultProps}
        items={[{ label: 'Bubblegum', value: 'bubblegum', isRubberDuck: true }]}
      >
        {({ items }): JSX.Element[] =>
          items.map(item =>
            item.type === 'item'
              ? <li key={item.key}>{item.value?.isRubberDuck}</li>
              : <li key={item.key}>Section</li>
          )}
      </FilterSelect>
    })
  })
})
/* eslint-enable vitest/expect-expect */
