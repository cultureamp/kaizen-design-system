import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { LoadingSpinner } from '../index'

const meta = {
  title: 'Components/Loading states/LoadingSpinner',
  component: LoadingSpinner,
  args: {
    accessibilityLabel: 'Loading',
  },
} satisfies Meta<typeof LoadingSpinner>

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

export const ClassNameOverride: Story = {
  args: { classNameOverride: 'text-green-300' },
}

export const Colors: Story = {
  render: (args) => (
    <>
      <LoadingSpinner {...args} classNameOverride="text-green-300" />
      <LoadingSpinner {...args} classNameOverride="text-purple-950" />
      <LoadingSpinner {...args} classNameOverride="text-blue-600" />
      <LoadingSpinner {...args} classNameOverride="text-red-600" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-24">
        <Story />
      </div>
    ),
  ],
}

export const Size: Story = {
  render: (args) => (
    <>
      <LoadingSpinner {...args} size="xs" />
      <LoadingSpinner {...args} size="sm" />
      <LoadingSpinner {...args} size="md" />
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-24">
        <Story />
      </div>
    ),
  ],
}
