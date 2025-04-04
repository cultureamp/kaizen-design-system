import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { GenericTile } from './GenericTile'

const meta: Meta<typeof GenericTile> = {
  title: 'Components/Tiles/GenericTile (primitive)/Tests',
  component: GenericTile,
  args: {
    title: 'Title',
    metadata: 'Side A',
    information: 'Side B',
    footer: <>Example Footer</>,
  },
}

export default meta
type Story = StoryObj<typeof GenericTile>

export const Flip: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('initial render complete', async () => {
      await waitFor(() => {
        canvas.getByRole('button', {
          name: 'View more information: Title',
        })
      })
    })

    await step('Can focus to tile', async () => {
      await waitFor(() => {
        expect(canvas.getByText('Side B')).toBeInTheDocument()
      })
    })
  },
}

export const InfoButtonLabelDefault: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('initial render complete', async () => {
      await waitFor(() => {
        canvas.getByRole('button', {
          name: 'View more information: Title',
        })
      })
    })

    await step('Can focus to button', async () => {
      await waitFor(() => {
        const buttonWithInfoLabel = canvas.getByRole('button', {
          name: 'View more information: Title',
        })
        buttonWithInfoLabel.focus()
        expect(buttonWithInfoLabel).toHaveFocus()
      })
    })
  },
}

export const InfoButtonLabel: Story = {
  args: {
    infoButtonLabel: 'Test Label',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('initial render complete', async () => {
      await waitFor(() => {
        canvas.getByRole('button', {
          name: 'Test Label',
        })
      })
    })

    await step('Can focus to button', async () => {
      await waitFor(() => {
        const buttonWithInfoLabel = canvas.getByRole('button', {
          name: 'Test Label',
        })
        buttonWithInfoLabel.focus()
        expect(buttonWithInfoLabel).toHaveFocus()
      })
    })
  },
}

export const DoesNotStealFocusOnInitialRender: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('initial render complete', async () => {
      await waitFor(() => {
        canvas.getByRole('button', {
          name: 'View more information: Title',
        })
      })
    })

    await step('Can focus to button', async () => {
      await waitFor(() => {
        const buttonWithInfoLabel = canvas.getByRole('button', {
          name: 'View more information: Title',
        })
        expect(buttonWithInfoLabel).not.toHaveFocus()
      })
    })
  },
}

export const FocusOnFlip: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const buttonWithInfoLabel = await canvas.findByRole('button', {
      name: 'View more information: Title',
    })

    await step('initial render complete', async () => {
      expect(buttonWithInfoLabel).toBeInTheDocument()
    })

    await step('Can focus to button', async () => {
      await waitFor(() => {
        buttonWithInfoLabel.click()
      })
    })

    const returnButton = canvas.getByRole('button', {
      name: 'Hide information: Title',
    })

    await step('Can click on info button again', async () => {
      await waitFor(() => {
        returnButton.click()
      })
    })

    await step('Info button has focus again', async () => {
      await waitFor(() => {
        expect(buttonWithInfoLabel).toHaveFocus()
      })
    })
  },
}
