import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Card, CardWithUnstyledChildren } from "../index"

const meta = {
  title: "Components/CardRedo",
  component: Card,
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

export const WithClassnameOverride: Story = {
  render: () => (
    <ul className="flex list-none gap-16">
      <li>
        <Card>Default</Card>
      </li>
      <li>
        <Card classNameOverride=" bg-red-500">
          Should have override of `bg-red-500`
        </Card>
      </li>
      <li>
        <Card classNameOverride=" !bg-red-500">
          Uses important to have override of `!bg-red-500`
        </Card>
      </li>
    </ul>
  ),
}

export const TestingNarrowScope: Story = {
  render: () => (
    <ul className="flex list-none gap-16">
      <li>
        <CardWithUnstyledChildren>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            perspiciatis accusantium natus ratione dolor sapiente quis nesciunt
            alias quaerat sequi!
          </p>
        </CardWithUnstyledChildren>
      </li>
      <li>
        <CardWithUnstyledChildren>
          <h2>Child h2 should be default colour</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            perspiciatis accusantium natus ratione dolor sapiente quis nesciunt
            alias quaerat sequi!
          </p>
        </CardWithUnstyledChildren>
      </li>
    </ul>
  ),
}
