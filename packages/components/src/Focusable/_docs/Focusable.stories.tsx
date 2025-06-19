import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Tag } from '~components/__next__/Tag'
import { Focusable } from '../index'

const meta = {
  title: 'Components/Focusable',
  component: Focusable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Focusable>

export default meta

type Story = StoryObj<typeof Focusable>

export const Playground: Story = {
  render: (args) => (
    <Focusable {...args}>
      <Tag>Name</Tag>
    </Focusable>
  ),
}
