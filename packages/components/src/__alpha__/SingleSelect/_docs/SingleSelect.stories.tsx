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
      <div
        style={{
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
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
