import React from 'react'
import { Item, Section } from '@react-stately/collections'
import { type Meta, type StoryObj } from '@storybook/react'
import { SingleSelect } from '../index'
import { singleMockItems } from './mockData'

const meta = {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  component: SingleSelect,
  args: {
    label: 'Choose a coffee',
    children: singleMockItems.map((item) => <Item key={item.key}>{item.label}</Item>),
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

export const TestingListBoxGrouping: Story = {
  args: {
    label: 'Choose a coffee',
    children: (
      <>
        <Section title="Warm Colours">
          <Item key="red">Red</Item>
        </Section>
        <Section title="Cool Colours">
          <Item key="blue">Blue</Item>
          <Item key="gray">Gray</Item>
          <Item key="orange">Orange</Item>
        </Section>
      </>
    ),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
