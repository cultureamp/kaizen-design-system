import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, screen, userEvent, waitFor } from '@storybook/test'
import { Item } from 'react-stately'
import { SingleSelect } from '../SingleSelect'
import { singleMockItems } from './mockData'

const meta = {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  component: SingleSelect,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SingleSelect>

export default meta

type Story = StoryObj<typeof meta>

const args = {
  label: 'Choose a coffee',
  items: singleMockItems,
  children: (item: any) => <Item key={item.key}>{item.label}</Item>,
}

export const RendersButton: Story = {
  args,
  play: async () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  },
}

export const OpensPopoverOnClick: Story = {
  args,
  play: async () => {
    const trigger = screen.getByRole('button')
    await userEvent.click(trigger)
    await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'true'))
    const options = await screen.findAllByRole('option')
    expect(options[0]).toBeVisible()
    expect(options[0]).toHaveTextContent(singleMockItems[0].label)
  },
}

export const ClosesPopoverOnSelect: Story = {
  args,
  play: async () => {
    const trigger = screen.getByRole('button')
    await userEvent.click(trigger)
    await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'true'))
    const options = await screen.findAllByRole('option')
    await userEvent.click(options[0])
    await waitFor(() => expect(screen.queryAllByRole('option')).toHaveLength(0))
  },
}

export const KeyboardNavigation: Story = {
  args,
  play: async () => {
    const trigger = screen.getByRole('button')
    trigger.focus()
    await userEvent.keyboard('{Enter}')
    await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'true'))
    const options = await screen.findAllByRole('option')
    await userEvent.keyboard('{ArrowDown}')
    expect(options[1]).toHaveAttribute('data-focused', 'true')
    await userEvent.keyboard('{ArrowUp}')
    expect(options[0]).toHaveAttribute('data-focused', 'true')
  },
}

export const KeyboardSelectsItem: Story = {
  args,
  play: async () => {
    const trigger = screen.getByRole('button')
    trigger.focus()
    await userEvent.keyboard('{Enter}')
    await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'true'))
    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{Enter}')
    await waitFor(() => expect(screen.queryAllByRole('option')).toHaveLength(0))
  },
}

export const KeyboardEscapeClosesPopover: Story = {
  args,
  play: async () => {
    const trigger = screen.getByRole('button')
    await userEvent.click(trigger)
    await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'true'))
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(trigger).toHaveAttribute('aria-expanded', 'false'))
  },
}
