import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { SingleSelect } from '../index'
import { singleMockItems } from './mockData'

const meta = {
  title: 'Components/SingleSelect/SingleSelect (alpha)',
  component: SingleSelect,
  args: {
    label: 'Choose a coffee',
    children: singleMockItems.map((item) => (
      <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>
    )),
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
        <SingleSelect.Section title="Warm Colours">
          <SingleSelect.Item key="red">Red</SingleSelect.Item>
        </SingleSelect.Section>
        <SingleSelect.Section title="Cool Colours">
          <SingleSelect.Item key="blue">Blue</SingleSelect.Item>
          <SingleSelect.Item key="gray">Gray</SingleSelect.Item>
          <SingleSelect.Item key="orange">Orange</SingleSelect.Item>
        </SingleSelect.Section>
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
