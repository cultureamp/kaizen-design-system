import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Item } from 'react-stately'
import { SingleSelect } from '../index'
import { singleMockItems } from './mockData'

const meta = {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  component: SingleSelect,
  args: {
    items: singleMockItems,
    children: (item: any) => <Item key={item.key}>{item.label}</Item>,
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
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
