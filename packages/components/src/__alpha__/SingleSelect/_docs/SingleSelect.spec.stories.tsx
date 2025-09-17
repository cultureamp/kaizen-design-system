import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, fireEvent, screen, userEvent, waitFor } from '@storybook/test'
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
  children: (item: any) => (
    <SingleSelect.Item key={item.key} textValue={item.label}>
      {item.label}
    </SingleSelect.Item>
  ),
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

export const XButtonClearsSelection: Story = {
  args: { ...args, isComboBox: true },
  play: async () => {
    const input = screen.getByRole('combobox')

    await userEvent.type(input, 'short')
    const options = await screen.findAllByRole('option')
    await userEvent.click(options[0])

    const clearButton = await screen.findByRole('button', {
      name: 'Clear Choose a coffee selection',
    })
    await waitFor(() => expect(clearButton).toBeVisible())
    await userEvent.click(clearButton)
    await waitFor(() => {
      expect(input).toHaveValue('')
    })
  },
}

export const FiltersResults: Story = {
  args: {
    isComboBox: true,
    label: 'Choose a coffee',
    children: singleMockItems.map((item) => (
      <SingleSelect.Item key={item.key} textValue={item.label}>
        {item.label}
      </SingleSelect.Item>
    )),
  },
  play: async () => {
    const input = screen.getByRole('combobox')
    await userEvent.type(input, 'latte')
    const options = await screen.findAllByRole('option')
    expect(options.length).toBeGreaterThan(0)
    expect(options[0]).toHaveTextContent(/latte/i)
  },
}

export const AsyncComboLoadsMoreOnScroll: Story = {
  args: {
    label: 'Choose a coffee',
    isComboBox: true,
    loadItems: async (_query?: string, page = 1, pageSize = 3) => {
      const start = (page - 1) * pageSize
      const items = singleMockItems.slice(start, start + pageSize)
      const hasMore = start + pageSize < singleMockItems.length

      return new Promise((resolve) => setTimeout(() => resolve({ items, hasMore }), 50))
    },
    children: (item) => <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>,
  },
  play: async () => {
    const button = await screen.getByRole('button', {
      name: /Show suggestions for Choose a coffee/i,
    })

    await userEvent.click(button)

    let options = await screen.findAllByRole('option')
    options = await screen.findAllByRole('option', { name: /Short black|Long black|Batch brew/ })
    expect(options.length).toBe(3)

    const listbox = screen.getByRole('listbox')
    listbox.scrollTop = listbox.scrollHeight
    fireEvent.scroll(listbox)

    await screen.findAllByRole('option', { name: /Latte/ })
    options = await screen.findAllByRole('option')
    expect(options.length).toBeGreaterThan(3)
  },
}

export const AsyncSelectLoadsMoreOnScroll: Story = {
  args: {
    label: 'Choose a coffee',
    loadItems: async (_query?: string, page = 1, pageSize = 3) => {
      const start = (page - 1) * pageSize
      const items = singleMockItems.slice(start, start + pageSize)
      const hasMore = start + pageSize < singleMockItems.length

      return new Promise((resolve) => setTimeout(() => resolve({ items, hasMore }), 50))
    },
    children: (item) => <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>,
  },
  play: async () => {
    const trigger = screen.getByRole('button', {
      name: /Choose a coffee/i,
    })
    await userEvent.click(trigger)

    let options = await screen.findAllByRole('option')
    options = await screen.findAllByRole('option', { name: /Short black|Long black|Batch brew/ })
    expect(options.length).toBe(3)

    const listbox = screen.getByRole('listbox')
    listbox.scrollTop = listbox.scrollHeight
    fireEvent.scroll(listbox)

    await screen.findAllByRole('option', { name: /Latte/ })
    options = await screen.findAllByRole('option')
    expect(options.length).toBeGreaterThan(3)
  },
}
