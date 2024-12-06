import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '../index'

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    children: 'This is a default container',
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
} satisfies Meta<typeof Card>

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

const colors = [
  'blue',
  'green',
  'gray',
  'orange',
  'purple',
  'red',
  'white',
  'yellow',
] satisfies CardProps['color'][]

export const Colors: Story = {
  render: () => (
    <ul className="flex list-none gap-16">
      {colors.map((color) => (
        <li key={color}>
          <Card color={color}>This is a default container</Card>
        </li>
      ))}
    </ul>
  ),
}

export const Elevation: Story = {
  render: () => (
    <ul className="flex list-none gap-16">
      <li>
        <Card>Default</Card>
      </li>
      <li>
        <Card isElevated>isElevated</Card>
      </li>
    </ul>
  ),
}
