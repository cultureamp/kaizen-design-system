import React from 'react'
import { cleanup, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SingleSelect } from './SingleSelect'
import { singleMockItems } from './_docs/mockData'

const SingleSelectWrapper = (): JSX.Element => (
  <SingleSelect items={singleMockItems}>
    <SingleSelect.List>
      {singleMockItems.map((item) => (
        <SingleSelect.ListItem key={item.value} id={item.value}>
          {item.label}
        </SingleSelect.ListItem>
      ))}
    </SingleSelect.List>
  </SingleSelect>
)

describe('<SingleSelect />', () => {
  afterEach(cleanup)
  describe('renders', () => {
    it('a basic select component', () => {
      const { getByRole } = render(<SingleSelectWrapper />)
      const select = getByRole('button')
      expect(select).toBeInTheDocument()
    })
  })

  describe('popover interactions', () => {
    it('opens the popover when the trigger is clicked', async () => {
      const user = userEvent.setup()
      const { getByRole, findAllByRole } = render(<SingleSelectWrapper />)
      const trigger = getByRole('button')
      await user.click(trigger)

      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true')
      })
      const options = await findAllByRole('option')
      expect(options[0]).toBeVisible()
      expect(options[0]).toHaveTextContent(singleMockItems[0].label)
    })

    it('closes the popover when an item is selected', async () => {
      const user = userEvent.setup()
      const { getByRole, findAllByRole } = render(<SingleSelectWrapper />)
      const trigger = getByRole('button')
      await user.click(trigger)
      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-expanded', 'true')
      })
      const options = await findAllByRole('option')
      const item = options[0]
      await user.click(item)
      expect(options[0]).not.toBeVisible()
    })

    describe('via keyboard', () => {
      it('opens the popover with keyboard (Enter) and navigates items with ArrowDown/ArrowUp', async () => {
        const user = userEvent.setup()
        const { getByRole, findAllByRole } = render(<SingleSelectWrapper />)
        const trigger = getByRole('button')
        trigger.focus()
        await user.keyboard('{Enter}')
        await waitFor(() => {
          expect(trigger).toHaveAttribute('aria-expanded', 'true')
        })
        const options = await findAllByRole('option')
        expect(options[0]).toHaveTextContent(singleMockItems[0].label)
        await user.keyboard('{ArrowDown}')
        const secondItem = options[1]
        expect(secondItem).toHaveAttribute('data-focused', 'true')
        await user.keyboard('{ArrowUp}')
        expect(options[0]).toHaveAttribute('data-focused', 'true')
      })

      it('selects an item with keyboard (Enter)', async () => {
        const user = userEvent.setup()
        const { getByRole, queryAllByRole } = render(<SingleSelectWrapper />)
        const trigger = getByRole('button')
        trigger.focus()
        await user.keyboard('{Enter}')
        await waitFor(() => {
          expect(trigger).toHaveAttribute('aria-expanded', 'true')
        })
        await user.keyboard('{ArrowDown}')
        await user.keyboard('{Enter}')
        const options = await queryAllByRole('option')
        expect(options.length).toBe(0)
      })
      it('closes the popover when Escape key is pressed', async () => {
        const user = userEvent.setup()
        const { getByRole } = render(<SingleSelectWrapper />)
        const trigger = getByRole('button')
        await user.click(trigger)
        await waitFor(() => {
          expect(trigger).toHaveAttribute('aria-expanded', 'true')
        })
        await user.keyboard('{Escape}')
        await waitFor(() => {
          expect(trigger).toHaveAttribute('aria-expanded', 'false')
        })
      })
    })
  })
})
