import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { VideoPlayer } from './index'

const meta = {
  title: 'Components/Illustrations/VideoPlayer',
  component: VideoPlayer,
  args: {
    autoplay: false,
    fallback: 'illustrations/heart/scene/brand-moments-positive-outro',
    source: 'illustrations/heart/scene/brand-moments-positive-outro',
  },
} satisfies Meta<typeof VideoPlayer>

export default meta

type Story = StoryObj<typeof meta>

export const PausePlay: Story = {
  render: (args) => <VideoPlayer {...args} />,
  name: 'VideoPlayer: Pause/Play',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByRole('button')

    waitFor(() => {
      userEvent.click(element)
      expect(element).toHaveAttribute('aria-label', 'Pause animation')
    })

    waitFor(() => {
      userEvent.click(element)
      expect(element).toHaveAttribute('aria-label', 'Play animation')
    })
  },
}
