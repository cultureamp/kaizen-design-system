import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { SingleSelect } from '../index'
import { singleMockItems } from './mockData'

const meta = {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  component: SingleSelect,
  args: {
    items: singleMockItems,
    children: (
      <SingleSelect.List>
        {singleMockItems.map((item) => (
          <SingleSelect.ListItem key={item.value} id={item.value}>
            {item.label}
          </SingleSelect.ListItem>
        ))}
      </SingleSelect.List>
    ),
  },
  decorators: [
    (Story) => (
      <div className="h-200 justify-center items-center position-relative flex">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SingleSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    items: singleMockItems,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
