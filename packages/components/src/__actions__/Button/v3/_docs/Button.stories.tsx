import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { AddIcon, ArrowForwardIcon, TrashIcon } from "~components/Icon"
import { Button } from "../index"

const meta = {
  title: "Actions/Button/v3",
  component: Button,
  args: {
    children: "Label",
    onPress: action("Button onPress event"),
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
}

export const ButtonWithIcon: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
  args: {
    children: (
      <>
        Label <AddIcon role="presentation" />
      </>
    ),
  },
}

export const ButtonWithIconStart: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
  args: {
    children: (
      <>
        <TrashIcon role="presentation" /> Label
      </>
    ),
  },
}

export const IconButton: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
  args: {
    "aria-label": "Label",
    children: <TrashIcon role="presentation" />,
  },
}
