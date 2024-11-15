import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, waitFor, within, expect, fn } from "@storybook/test"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Icon } from "~components/__future__/Icon"
import { Button } from "../index"

const onPressEvent = fn()

const meta = {
  title: "Actions/Button/Button (v3)/Button (v3) tests",
  component: Button,
  args: {
    children: "Label",
    onPress: onPressEvent,
  },
  parameters: {
    chromatic: { disable: false },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// stress testing the accessible name being derive from the nested children
export const IconButtonWithHiddenLabel: Story = {
  args: {
    hasHiddenLabel: true,
    icon: <Icon name="add" isPresentational />,
    children: (
      <span>
        Hidden label <span>is</span> <span>accessible</span>
      </span>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")

    expect(button).toHaveAccessibleName("Hidden label is accessible")
  },
}

export const PendingButton: Story = {
  render: ({ isPending = false, pendingLabel = "Loading", ...otherProps }) => {
    const [isPendingStatus, setIsPendingStatus] =
      React.useState<boolean>(isPending)

    return (
      <Button
        {...otherProps}
        isPending={isPendingStatus}
        pendingLabel={pendingLabel}
        onPress={() => {
          setIsPendingStatus(true)
          setTimeout(() => {
            setIsPendingStatus(false)
          }, 900)
        }}
      />
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button", { name: "Label" })
    // Simulates a delay that may occur when a button must wait for a response
    const timeToWait = 1000

    await step("Button has accessible label", async () =>
      expect(button).toHaveAccessibleName("Label")
    )

    await step("Accessible label updates on press", async () => {
      await button.focus()
      await userEvent.click(button)
      await waitFor(() => expect(button).toHaveAccessibleName("Loading"))
    })

    await step("Accessible label reverts once isPending is false", async () => {
      await waitFor(() =>
        setTimeout(() => {
          expect(button).toHaveAccessibleName("Label")
        }, timeToWait)
      )
    })
  },
}

export const PendingButtonWithHiddenPendingLabel: Story = {
  ...PendingButton,
  args: {
    hasHiddenPendingLabel: true,
    isPending: false,
    pendingLabel: "Loading",
  },
}

export const PendingIconButton: Story = {
  ...PendingButton,
  args: {
    hasHiddenLabel: true,
    isPending: false,
    pendingLabel: "Loading",
    icon: <Icon name="add" isPresentational />,
  },
}

export const RACRenderPropsWithChildren: Story = {
  render: ({ children: _, ...otherArgs }) => (
    <Button {...otherArgs}>
      {({ isFocusVisible }) => (
        <>
          Label
          <VisuallyHidden>
            {isFocusVisible ? " is focused" : " is unfocused"}
          </VisuallyHidden>
          <Icon
            name={isFocusVisible ? "thumb_up" : "thumb_down"}
            isPresentational
            isFilled={true}
            className="ms-8 [--icon-size:16]"
          />
        </>
      )}
    </Button>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")

    await step("button icon reflects unfocused state", async () => {
      await waitFor(() =>
        expect(button).toHaveAccessibleName("Label is unfocused")
      )
    })

    await step("focus on button and update icon", async () => {
      await userEvent.tab()
      await waitFor(() =>
        expect(button).toHaveAccessibleName("Label is focused")
      )
    })
  },
}

export const RACRenderPropsWithClassName: Story = {
  args: {
    className: ({ isFocusVisible }) => (isFocusVisible ? "!bg-gray-300" : ""),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")
    await button.focus()
  },
}
