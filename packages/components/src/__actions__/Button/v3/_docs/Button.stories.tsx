import React, { useEffect } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { AddIcon, TrashIcon, ChevronUpIcon } from "~components/Icon"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Icon } from "~components/__future__"
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
    const [asyncButtonContent, setAsyncButtonContent] = React.useState<
      string | undefined
    >(undefined)

    useEffect(() => {
      setTimeout(() => setAsyncButtonContent("Simulated button content"), 6000)
    }, [])

    // TODO: check if this content should only be announce while on focus on the button or if it should be announced on every render elsewhere
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
          isPending={isPending}
          pendingLabel="Adding"
          isPendingLabelHidden
          className="mr-12"
          onPress={() => {
            setIsPending(true)
            setTimeout(() => setIsPending(false), 3000)
          }}
        >
          <AddIcon role="img" aria-label="Add" />
        </Button>
        <Button
          {...otherArgs}
          isPending={isPending}
          pendingLabel="Adding"
          isPendingLabelHidden
          className="mr-12"
          onPress={() => {
            setIsPending(true)
            setTimeout(() => setIsPending(false), 3000)
          }}
        >
          <>
            lorem
            {asyncButtonContent}
          </>
        </Button>
        <Button></Button>
      </>
    )
  },
}

export const DisabledTest: Story = {
  render: ({ children }) => (
    <>
      <TooltipTrigger>
        <Button>{children}</Button>
        <Tooltip>Tooltip content</Tooltip>
      </TooltipTrigger>
    </>
  ),
}

export const IconTest: Story = {
  render: ({ children }) => (
    <>
      <Button
        iconPosition="end"
        icon={<Icon isPresentational name="thumb_up" />}
      >
        {children}
      </Button>
    </>
  ),
}
