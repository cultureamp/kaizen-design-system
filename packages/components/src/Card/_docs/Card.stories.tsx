import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { Card } from "../index"

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: { ...classNameOverrideArgType, isElevated: { control: "boolean" } },
  args: {
    children: "This is a default container",
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

export const Variants: Story = {
  render: () => (
    <ul className="flex list-none gap-16">
      <li>
        <Card variant="default">Default</Card>
      </li>
      <li>
        <Card variant="informative">Informative</Card>
      </li>
      <li>
        <Card variant="positive">Positive</Card>
      </li>
      <li>
        <Card variant="cautionary">Cautionary</Card>
      </li>
      <li>
        <Card variant="destructive">Destructive</Card>
      </li>
      <li>
        <Card variant="assertive">Assertive</Card>
      </li>
      <li>
        <Card variant="highlight">Highlight</Card>
      </li>
    </ul>
  ),
}

export const Elevated: Story = {
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
