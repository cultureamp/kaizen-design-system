import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, waitFor, within, expect, fn } from "@storybook/test"
import { VisuallyHidden } from "react-aria"
import { Icon } from "~components/__future__/Icon"
import { Tooltip, TooltipTrigger } from "~components/__overlays__/v3"
import { Button } from "../index"

const onPressEvent = fn()

const meta = {
  title: "Actions/Button/Button (v3)/Tests",
  component: Button,
  args: {
    children: "Label",
    onPress: onPressEvent,
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const ButtonDefault: Story = {
  render: ({ children, ...otherArgs }) => (
    <Button
      {...otherArgs}
      icon={<Icon name="arrow_forward" isPresentational />}
      iconPosition="end"
    >
      <>{children}</>
    </Button>
  ),
}

export const IsHovered: Story = {
  ...ButtonDefault,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")

    await step("Hover shows", async () => {
      await userEvent.hover(button)
      await expect(button).toHaveAttribute("data-hovered", "true")
    })
  },
}
export const IsHoveredReversed: Story = {
  ...IsHovered,
  parameters: {
    reverseColors: true,
  },
}

export const IsFocused: Story = {
  ...ButtonDefault,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")

    await step("Focus shows", async () => {
      await userEvent.tab()

      await waitFor(() => expect(document.activeElement).toBe(button))
      await expect(button).toHaveAttribute("data-focused", "true")
    })
  },
}

export const IsFocusedReversed: Story = {
  ...IsFocused,
  parameters: {
    reverseColors: true,
  },
}

export const IsPressed: Story = {
  ...ButtonDefault,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")

    await step("onPress is called", async () => {
      await userEvent.click(button)

      await expect(onPressEvent).toHaveBeenCalledTimes(1)
    })
  },
}

export const IconButtonWithAccessibleLabel: Story = {
  render: ({ children: _, ...otherArgs }) => (
    <Button {...otherArgs}>
      <>
        <Icon name="delete" isPresentational />
        <VisuallyHidden> Highlight: 18, June, 2024</VisuallyHidden>
      </>
    </Button>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")

    await step("has accessible labels", async () => {
      await userEvent.tab()

      await expect(button).toHaveAccessibleName(
        "Remove Highlight: 18, June, 2024"
      )
    })
  },
}

export const ButtonWithRACRenderPropsAsChildren: Story = {
  render: ({ children: _, ...otherArgs }) => (
    <Button {...otherArgs}>
      {({ isFocusVisible }) => (
        <>
          Label
          <Icon
            name={isFocusVisible ? "thumb_up" : "thumb_down"}
            alt="is focused"
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

// While this is a less likely use case, but as it is possible to use render props to apply a class name to the button so we should test that it works with our Button implementation
export const ButtonWithRACRenderPropsAsClassname: Story = {
  render: ({ children: _, ...otherArgs }) => (
    <Button
      className={({ isFocused }) =>
        isFocused ? "!bg-blue-500 !text-white !border-transparent" : ""
      }
      {...otherArgs}
    >
      Label
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")
    await button.focus()
  },
}

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

// A compatibility check since when we develop tooltip the v1 button was an issue
export const ButtonWithTooltip: Story = {
  render: ({ children: _, ...otherArgs }) => (
    <TooltipTrigger>
      <Button {...otherArgs}>Label</Button>
      <Tooltip>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const button = canvas.getByRole("button")

    await step("Focus shows", async () => {
      await userEvent.tab()

      await waitFor(() => expect(document.activeElement).toBe(button))
    })

    await step("Tooltip content show", async () => {
      await waitFor(() => expect(canvas.getByRole("tooltip")).toBeVisible())
    })
  },
}
