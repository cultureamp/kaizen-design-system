import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Card } from "../index"

const meta = {
  title: "Components/Card",
  component: Card,
  args: {
    children: "This is a default container",
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
        sourceState: "shown",
      },
    },
  },
}
export const Colors: Story = {
  render: () => (
    <ul className="flex list-none gap-16">
      <li>
        <Card color="blue">Blue</Card>
      </li>
      <li>
        <Card color="green">Green</Card>
      </li>
      <li>
        <Card color="grey">Grey</Card>
      </li>
      <li>
        <Card color="orange">Orange</Card>
      </li>
      <li>
        <Card color="purple">Purple</Card>
      </li>
      <li>
        <Card color="red">Red</Card>
      </li>
      <li>
        <Card color="white">White</Card>
      </li>
      <li>
        <Card color="yellow">Yellow</Card>
      </li>
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
