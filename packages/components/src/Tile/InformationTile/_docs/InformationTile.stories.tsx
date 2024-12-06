import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { InformationTile } from '../index'

const meta = {
  title: 'Components/Tiles/InformationTile',
  component: InformationTile,
  args: {
    title: 'Title',
    metadata: 'Side A',
    footer: <>Example Footer</>,
  },
  argTypes: {
    mood: { control: false },
  },
} satisfies Meta<typeof InformationTile>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const Variants: Story = {
  render: (args) => (
    <>
      <InformationTile {...args} variant="default" title="default" />
      <InformationTile {...args} variant="expert-advice" title="expert-advice" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-16 flex-wrap">
        <Story />
      </div>
    ),
  ],
}

export const Information: Story = {
  args: {
    information: 'Side B',
  },
}

export const TileWithCustomInfoLabel: Story = {
  args: {
    infoButtonLabel: 'Test',
    information: 'Side B',
  },
}
