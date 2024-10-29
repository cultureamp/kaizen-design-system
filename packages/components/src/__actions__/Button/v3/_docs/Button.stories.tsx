import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { Badge } from "~components/Badge"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Icon } from "~components/__future__"
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
  render: ({ children, ...otherProps }) => (
    <Button {...otherProps}>{children}</Button>
  ),
}

export const ButtonWithIcon: Story = {
  render: ({ children, ...otherProps }) => (
    <Button {...otherProps}>{children}</Button>
  ),
  args: {
    children: <>Label</>,
    icon: <Icon isPresentational name="thumb_up" />,
    iconPosition: "end",
  },
}

export const ButtonWithIconStart: Story = {
  render: ({ children, ...otherProps }) => (
    <Button {...otherProps}>{children}</Button>
  ),
  args: {
    children: <>Label</>,
    icon: <Icon isPresentational name="delete" />,
  },
}

export const IconButton: Story = {
  render: ({ children, ...otherProps }) => (
    <Button {...otherProps}>{children}</Button>
  ),
  args: {
    children: (
      <>
        <VisuallyHidden>Remove highlights from: May 8, 2024</VisuallyHidden>
      </>
    ),
    icon: <Icon isPresentational name="delete" />,
  },
}

// TODO: check the expect user behaviour of using a pending button and the a11y need to announce the content after pending
export const Pending: Story = {
  render: ({ children, isPending = false, ...otherProps }) => {
    const [isPendingStatus, setIsPendingStatus] =
      React.useState<boolean>(isPending)

    return (
      <>
        <Button
          {...otherProps}
          isPending={isPendingStatus}
          pendingLabel="loading"
          onPress={() => {
            setIsPendingStatus(true)
            setTimeout(() => setIsPendingStatus(false), 3000)
          }}
        >
          {children}
        </Button>
      </>
    )
  },
}

export const PendingLongLabel: Story = {
  render: ({ children, isPending = false, ...otherProps }) => {
    const [isPendingStatus, setIsPendingStatus] =
      React.useState<boolean>(isPending)

    return (
      <>
        <Button
          {...otherProps}
          isPending={isPendingStatus}
          pendingLabel="loading"
          isPendingLabelHidden
          onPress={() => {
            setIsPendingStatus(true)
            setTimeout(() => setIsPendingStatus(false), 3000)
          }}
        >
          {children}
        </Button>
        <Button>something else</Button>
      </>
    )
  },
  args: {
    children: "Hidden labels don't shrink",
  },
}

export const ButtonWithBadge: Story = {
  render: ({ children, ...otherProps }) => (
    <Button {...otherProps}>
      <>
        {children}
        <Badge size="small">3</Badge>
      </>
    </Button>
  ),
  args: {
    children: "Label",
  },
}
