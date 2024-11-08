import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { AddIcon, TrashIcon, ChevronUpIcon } from "~components/Icon"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Button } from "../index"

const meta = {
  title: "Actions/Button/Button (v3)",
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
        Label
        <AddIcon role="presentation" />
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
        <TrashIcon role="presentation" />
        Label
      </>
    ),
  },
}

export const IconButton: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
  args: {
    children: (
      <>
        <TrashIcon role="img" aria-label="Remove" />
        <VisuallyHidden> Highlights: May 8, 2024</VisuallyHidden>
      </>
    ),
  },
}

export const OnReversed: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
  args: {
    children: (
      <>
        Label
        <ChevronUpIcon role="presentation" />
      </>
    ),
  },
  parameters: {
    reverseColors: true,
    docs: {
      source: {
        code: `
          <ReversedColors isReversed={true}>
            <Button {...otherArgs}>
              <>
                Label
                <ChevronUpIcon role="presentation" />
              </>
            </Button>
          </ReversedColors>
      `,
      },
    },
  },
}
