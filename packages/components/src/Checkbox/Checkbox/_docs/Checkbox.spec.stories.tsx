import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import { Checkbox } from '../index'

const onClick = fn()
const onCheck = fn()

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
    onClick.mockClear()
    const checkbox = within(canvasElement).getByRole('checkbox') as HTMLInputElement

    await userEvent.click(checkbox)
    await expect(onClick).toHaveBeenCalledTimes(1)
    await expect(checkbox.indeterminate).toBe(true)
  },
}

export const ReadOnlyHasVisuallyHiddenDescription: Story = {
  render: (args) => (
    <>
      <Checkbox {...args} aria-label="Read-only" />
      <Checkbox
        {...args}
        aria-label="Read-only with description"
        aria-describedby="checkbox-helper-text"
      />
      <span id="checkbox-helper-text">Helper text</span>
      <Checkbox {...args} aria-label="Disabled" disabled />
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // KaizenProvider loads messages async, so the translated text appears after first render
    await waitFor(() =>
      expect(canvas.getByRole('checkbox', { name: 'Read-only' })).toHaveAccessibleDescription(
        'Read only',
      ),
    )
    await waitFor(() =>
      expect(
        canvas.getByRole('checkbox', { name: 'Read-only with description' }),
      ).toHaveAccessibleDescription('Helper text Read only'),
    )
    await expect(
      canvas.getByRole('checkbox', { name: 'Disabled' }),
    ).not.toHaveAccessibleDescription()
  },
}

export const InteractiveSpaceCallsOnCheck: Story = {
  args: { onCheck },
  play: async ({ canvasElement }) => {
    onCheck.mockClear()
    const checkbox = within(canvasElement).getByRole('checkbox')

    checkbox.focus()
    await userEvent.keyboard(' ')
    await expect(onCheck).toHaveBeenCalledTimes(1)
  },
}

export const InteractiveMixedCanChange: Story = {
  args: { checkedStatus: 'mixed', onCheck },
  play: async ({ canvasElement }) => {
    onCheck.mockClear()
    const checkbox = within(canvasElement).getByRole('checkbox') as HTMLInputElement

    await userEvent.click(checkbox)
    await expect(onCheck).toHaveBeenCalledTimes(1)
    // The click is not cancelled, so the native toggle clears `indeterminate`
    await expect(checkbox.indeterminate).toBe(false)
  },
}

export const ReadOnlyPropWithOnCheckIsReadOnly: Story = {
  args: { readOnly: true, onCheck },
  play: async ({ canvasElement }) => {
    onCheck.mockClear()
    const checkbox = within(canvasElement).getByRole('checkbox')

    await userEvent.click(checkbox)
    await expect(onCheck).not.toHaveBeenCalled()
    await expect(checkbox).not.toBeChecked()
    await waitFor(() => expect(checkbox).toHaveAccessibleDescription('Read only'))
  },
}

export const InteractiveHasNoReadOnlyDescription: Story = {
  args: { onCheck },
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByRole('checkbox')

    await expect(checkbox).not.toHaveAttribute('readonly')
    await expect(checkbox).not.toHaveAccessibleDescription()
  },
}
