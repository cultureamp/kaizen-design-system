import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
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
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
}

export const ButtonWithIcon: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
  args: {
    children: <>Label</>,
    icon: <Icon isPresentational name="thumb_up" />,
    iconPosition: "end",
  },
}

export const ButtonWithIconStart: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
  ),
  args: {
    children: <>Label</>,
    icon: <Icon isPresentational name="delete" />,
  },
}

export const IconButton: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button {...otherArgs}>{children}</Button>
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

export const ShouldFail: Story = {
  render: () => <Button>thing</Button>,
}

export const Pending: Story = {
  render: ({ children, ...otherArgs }) => {
    const [isPending, setIsPending] = React.useState(false)
    const [isPending2, setIsPending2] = React.useState(false)

    return (
      <>
        <Button
          {...otherArgs}
          isPending={isPending}
          pendingLabel="loading"
          className="mr-12"
          onPress={() => {
            setIsPending(true)
            setTimeout(() => setIsPending(false), 3000)
          }}
        >
          {children}
        </Button>
        <Button
          {...otherArgs}
          isPending={isPending2}
          pendingLabel="loading"
          isPendingLabelHidden
          className="mr-12"
          onPress={() => {
            setIsPending2(true)
            setTimeout(() => setIsPending2(false), 3000)
          }}
        >
          Hidden labels don&apos;t shrink
        </Button>
      </>
    )
  },
}
