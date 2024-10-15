import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { AddIcon, TrashIcon, ChevronUpIcon } from "~components/Icon"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { TooltipTrigger, Tooltip } from "~components/__overlays__/v3"
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

export const pending: Story = {
  render: ({ children, ...otherArgs }) => {
    const [isPending, setIsPending] = React.useState(false)
    return (
      <>
        <Button
          {...otherArgs}
          isPending={isPending}
          pendingLabel="I'm pending!"
          className="mr-12"
        >
          {children}
        </Button>
        <Button {...otherArgs} onPress={() => setIsPending(!isPending)}>
          update content
        </Button>
      </>
    )
  },
}

export const DisabledTest: Story = {
  render: ({ children, ...otherArgs }) => (
    <>
      <TooltipTrigger>
        <Button>{children}</Button>
        <Tooltip>Tooltip content</Tooltip>
      </TooltipTrigger>
    </>
  ),
}
