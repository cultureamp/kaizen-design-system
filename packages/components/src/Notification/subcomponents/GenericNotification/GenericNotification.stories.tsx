import React, { useRef, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect, waitFor } from '@storybook/test'
import { GenericNotification } from './index'

const meta = {
  title: 'Components/Notifications/GenericNotification',
  component: GenericNotification,
  args: {
    variant: 'success',
    style: 'inline',
    title: 'Success',
    children: 'This is my positive notification',
  },
} satisfies Meta<typeof GenericNotification>

export default meta

type Story = StoryObj<typeof meta>

export const GenericNotificationTest: Story = {
  render: () => {
    const [isHidden, setIsHidden] = useState<boolean>(false)

    return (
      <div>
        <span data-testid="hidden-state">{isHidden ? 'Hidden' : 'Shown'}</span>
        <GenericNotification
          variant="success"
          style="inline"
          title="Success"
          data-testid="generic-notification"
          onHide={() => setIsHidden(true)}
        >
          This is my positive notification
        </GenericNotification>
      </div>
    )
  },
  name: 'Test: Closes when close button is clicked and onHide is called',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByTestId('generic-notification')
    const hiddenState = canvas.getByTestId('hidden-state')

    await waitFor(() => {
      expect(element).toBeInTheDocument()
      expect(hiddenState).toHaveTextContent('Shown')
    })

    await userEvent.click(canvas.getByTestId('close-button'))

    await waitFor(() => {
      setTimeout(() => {
        expect(hiddenState).toHaveTextContent('Hidden')
        expect(element).not.toBeInTheDocument()
      }, 1000)
    })
  },
}

export const RefTest: Story = {
  render: () => {
    const customRef = useRef<HTMLDivElement>(null)
    const [isHidden, setIsHidden] = useState<boolean>(false)

    return (
      <div>
        <span data-testid="hidden-state">{isHidden ? 'Hidden' : 'Shown'}</span>
        <GenericNotification
          ref={customRef}
          variant="success"
          style="inline"
          title="Success"
          data-testid="generic-notification"
          onHide={() => setIsHidden(true)}
        >
          This is my positive notification
        </GenericNotification>
      </div>
    )
  },
  name: 'Test: still renders and closes properly when custom ref passed in',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByTestId('generic-notification')
    const hiddenState = canvas.getByTestId('hidden-state')

    await waitFor(() => {
      expect(element).toBeInTheDocument()
      expect(hiddenState).toHaveTextContent('Shown')
    })

    await userEvent.click(canvas.getByTestId('close-button'))

    await waitFor(() => {
      setTimeout(() => {
        expect(hiddenState).toHaveTextContent('Hidden')
        expect(element).not.toBeInTheDocument()
      }, 1000)
    })
  },
}
