import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { Button } from '~components/Button'
import { Menu, MenuItem, MenuPopover, MenuTrigger } from '~components/Menu'
import { SingleSelect } from '../SingleSelect'
import { singleMockItems } from './mockData'

const meta = {
  title: 'Components/SingleSelect/SingleSelect tests',
  component: SingleSelect,
  args: {
    label: 'Coffee',
    items: singleMockItems,
  },
  parameters: {
    chromatic: { disable: true },
  },
} satisfies Meta<typeof SingleSelect>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The select popover is portalled out of the menu popover, so react-aria's dismissal and
 * `inert` isolation both have to be told to leave it alone. Without that the menu closes as
 * soon as the select is opened, or the listbox renders but cannot be focused or clicked.
 *
 * Regression test for KZN-4210.
 */
export const InsideMenuPopover: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button>Open menu</Button>
      <MenuPopover>
        <Menu aria-label="Actions">
          <MenuItem>An action</MenuItem>
        </Menu>
        <div style={{ padding: '1rem' }}>
          <SingleSelect {...args} />
        </div>
      </MenuPopover>
    </MenuTrigger>
  ),
  play: async ({ canvasElement }) => {
    const { getByRole } = within(canvasElement)
    const body = within(document.body)

    await userEvent.click(getByRole('button', { name: 'Open menu' }))
    const selectToggle = await waitFor(() => body.getByRole('button', { name: /Coffee/ }))

    await userEvent.click(selectToggle)

    const option = await waitFor(() => body.getByRole('option', { name: 'Latte' }))

    // The `inert` failure mode leaves the listbox visible but non-interactive, so assert the
    // options are reachable rather than only that they rendered.
    expect(option.closest('[inert]')).toBeNull()

    await userEvent.click(option)

    await waitFor(() => {
      // Menu popover is still open — the select did not dismiss its ancestor overlay.
      expect(body.getByRole('menuitem', { name: 'An action' })).toBeVisible()
      expect(selectToggle).toHaveTextContent('Latte')
    })
  },
}
