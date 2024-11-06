import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Tag } from '~components/__future__/Tag'
import { Focusable } from '../index'

const meta = {
  title: 'Overlays/Focusable/v3',
  component: Focusable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Focusable>

export default meta

type Story = StoryObj<typeof Focusable>

export const Playground: Story = {
  render: args => (
    <Focusable {...args}>
      <Tag>Name</Tag>
    </Focusable>
  ),
}
