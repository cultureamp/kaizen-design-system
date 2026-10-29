import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'
import { GenericNotification } from './GenericNotification'
import styles from './GenericNotification.module.css'

const meta = {
  title: 'Components/Notifications/GenericNotification tests',
  component: GenericNotification,
  args: {
    variant: 'informative',
    style: 'global',
    onHide: fn(),
    children:
      'A notification with enough content to wrap onto multiple lines in a narrow container.',
  },
} satisfies Meta<typeof GenericNotification>

export default meta
type Story = StoryObj<typeof meta>

export const MeasuredDismissal: Story = {
  render: (args) => (
    <>
      {(['global', 'inline', 'toast'] as const).map((style) => (
        <GenericNotification {...args} key={style} style={style} data-testid={style} />
      ))}
    </>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    for (const style of ['global', 'inline', 'toast']) {
      const notification = canvas.getByTestId(style)
      await waitFor(() => expect(notification).not.toHaveClass(styles.hidden))
      expect(getComputedStyle(notification).marginTop).toBe('0px')
      const height = notification.clientHeight
      expect(height).toBeGreaterThan(0)
      await userEvent.click(
        within(notification).getByRole('button', { name: 'Close notification' }),
      )
      expect(notification.style.marginTop).toBe(`${-height}px`)
      await waitFor(() => expect(notification).not.toBeInTheDocument())
    }
    expect(args.onHide).toHaveBeenCalledTimes(3)
  },
}

export const Persistent: Story = {
  ...MeasuredDismissal,
  args: { persistent: true },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    for (const style of ['global', 'inline', 'toast']) {
      const notification = canvas.getByTestId(style)
      await waitFor(() => expect(notification).not.toHaveClass(styles.hidden))
      expect(getComputedStyle(notification).marginTop).toBe('0px')
      expect(within(notification).queryByRole('button')).not.toBeInTheDocument()
    }
    expect(args.onHide).not.toHaveBeenCalled()
  },
}
