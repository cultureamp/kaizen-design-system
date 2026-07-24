import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { ReversedColors } from '~components/utils'
import { BrandLoader } from '../index'

const meta = {
  title: 'Components/Loading states/BrandLoader',
  component: BrandLoader,
  parameters: {
    layout: 'centered',
  },
  args: {
    accessibilityLabel: 'Loading',
  },
} satisfies Meta<typeof BrandLoader>

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

export const Sizes: Story = {
  render: (args) => (
    <>
      <BrandLoader {...args} size="sm" />
      <BrandLoader {...args} size="md" />
      <BrandLoader {...args} size="lg" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex items-center gap-24">
        <Story />
      </div>
    ),
  ],
}

export const Speeds: Story = {
  render: (args) => (
    <>
      <BrandLoader {...args} speed="slow" />
      <BrandLoader {...args} speed="normal" />
      <BrandLoader {...args} speed="fast" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex items-center gap-24">
        <Story />
      </div>
    ),
  ],
}

export const ReversedContext: Story = {
  name: 'Reversed Context',
  render: (args) => (
    <ReversedColors>
      <BrandLoader {...args} />
    </ReversedColors>
  ),
  decorators: [
    (Story) => (
      <div className="rounded-8 bg-purple-700 p-32">
        <Story />
      </div>
    ),
  ],
}
