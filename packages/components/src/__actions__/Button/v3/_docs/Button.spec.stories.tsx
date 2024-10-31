import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, waitFor, within, expect, fn } from "@storybook/test"
import { VisuallyHidden } from "react-aria"
import { Icon } from "~components/__future__/Icon"
import { Tooltip, TooltipTrigger } from "~components/__overlays__/v3"
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

export const TriggerPending: Story = {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")
    expect(button).toHaveAccessibleName("Label")
    await button.focus()
    await userEvent.click(button)
    expect(button).toHaveAccessibleName("loading")
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
  render: ({ children, ...otherArgs }) => (
    <Button
      {...otherArgs}
      className={({ isFocusVisible }) => (isFocusVisible ? "!bg-gray-300" : "")}
    >
      {children}
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")
    await button.focus()
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Button
            {...otherArgs}
            className={({ isFocusVisible }) => (isFocusVisible ? "!bg-gray-300" : "")}
          >
            {children}
          </Button>
      `,
      },
    },
  },
}
