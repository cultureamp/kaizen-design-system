import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import { Checkbox } from '../index'

const onClick = fn()

const meta = {
  title: 'Components/Checkboxes/Checkbox (primitive)/Checkbox tests',
  component: Checkbox,
  args: {
    'aria-label': 'Option',
    'checkedStatus': 'off',
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const ReadOnlyMixedIgnoresClickAndSpace: Story = {
  args: { checkedStatus: 'mixed' },
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByRole('checkbox') as HTMLInputElement

    await userEvent.click(checkbox)
    await expect(checkbox.indeterminate).toBe(true)

    checkbox.focus()
    await userEvent.keyboard(' ')
    await expect(checkbox.indeterminate).toBe(true)
  },
}

export const ReadOnlyCheckedAndUncheckedIgnoreClick: Story = {
  render: (args) => (
    <>
      <Checkbox {...args} aria-label="Checked" checkedStatus="on" />
      <Checkbox {...args} aria-label="Unchecked" checkedStatus="off" />
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checked = canvas.getByRole('checkbox', { name: 'Checked' })
    const unchecked = canvas.getByRole('checkbox', { name: 'Unchecked' })

    await userEvent.click(checked)
    await userEvent.click(unchecked)
    await expect(checked).toBeChecked()
    await expect(unchecked).not.toBeChecked()
  },
}

export const ReadOnlyWithConsumerOnClick: Story = {
  args: { checkedStatus: 'mixed', onClick },
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByRole('checkbox') as HTMLInputElement

    await userEvent.click(checkbox)
    await expect(onClick).toHaveBeenCalledTimes(1)
    await expect(checkbox.indeterminate).toBe(true)
  },
}

export const ReadOnlyHasVisuallyHiddenDescription: Story = {
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByRole('checkbox')
    const id = checkbox.getAttribute('aria-describedby')

    await expect(id).toBeTruthy()
    // `useId` ids (e.g. `_r_4_`) are unsafe in `#id` selectors, so use an attribute selector
    await expect(canvasElement.querySelector(`[id="${id}"]`)).toBeInTheDocument()
  },
}
