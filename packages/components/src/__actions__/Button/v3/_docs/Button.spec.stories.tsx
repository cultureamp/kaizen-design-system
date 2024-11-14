import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, waitFor, within, expect, fn } from "@storybook/test"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Icon } from "~components/__future__/Icon"
import { Button } from "../index"

const onPressEvent = fn()

const meta = {
  title: "Actions/Button/Button (v3)",
  component: Button,
  args: {
    children: "Label",
    onPress: onPressEvent,
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const PendingButton: Story = {
  render: ({ isPending = false, ...otherProps }) => {
    const [isPendingStatus, setIsPendingStatus] =
      React.useState<boolean>(isPending)
    const [isIconPendingStatus, setIsIconPendingStatus] =
      React.useState<boolean>(isPending)
    const [isIconOnlyPendingStatus, setIsIconOnlyPendingStatus] =
      React.useState<boolean>(isPending)

    return (
      <>
        <Button
          {...otherProps}
          isPending={isPendingStatus}
          pendingLabel="Loading"
          onPress={() => {
            setIsPendingStatus(true)
            setTimeout(() => {
              setIsPendingStatus(false)
            }, 1000)
          }}
        >
          Label
        </Button>
        <Button
          {...otherProps}
          isPending={isIconPendingStatus}
          icon={<Icon name="add" isPresentational />}
          pendingLabel="Loading"
          hasHiddenPendingLabel
          onPress={() => {
            setIsIconPendingStatus(true)
            setTimeout(() => {
              setIsIconPendingStatus(false)
            }, 1000)
          }}
        >
          Icon label
        </Button>
        <Button
          {...otherProps}
          isPending={isIconOnlyPendingStatus}
          icon={<Icon name="add" isPresentational />}
          pendingLabel="Loading"
          hasHiddenLabel
          onPress={() => {
            setIsIconOnlyPendingStatus(true)
            setTimeout(() => {
              setIsIconOnlyPendingStatus(false)
            }, 1000)
          }}
        >
          Icon label
        </Button>
      </>
    )
  },
  decorators: [
    Story => (
      <div className="flex gap-8">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button", { name: "Label" })
    // Simulates a delay that may occur when a button must wait for a response
    const timeToWait = 1000

    expect(button).toHaveAccessibleName("Label")

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
            className=" [--icon-size:16]"
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
