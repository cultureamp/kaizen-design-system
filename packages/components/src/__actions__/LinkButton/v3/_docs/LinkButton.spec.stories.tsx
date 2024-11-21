import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, waitFor, within, expect } from "@storybook/test"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { Icon } from "~components/__future__/Icon"
import { LinkButton } from "../index"

const meta = {
  title: "Actions/LinkButton/LinkButton (v3)/LinkButton (v3) tests",
  component: LinkButton,
  args: {
    children: "Label",
  },
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const IconLinkButtonWithHiddenLabel: Story = {
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
    const linkButton = canvas.getByRole("link")

    expect(linkButton).toHaveAccessibleName("Hidden label is accessible")
  },
}

export const RACRenderPropsWithChildren: Story = {
  render: ({ children: _, ...otherArgs }) => (
    <LinkButton {...otherArgs}>
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
    </LinkButton>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    const linkButton = canvas.getByRole("link")

    await step("link icon reflects unfocused state", async () => {
      await waitFor(() =>
        expect(linkButton).toHaveAccessibleName("Label is unfocused")
      )
    })

    await step("focus on link and update icon", async () => {
      await userEvent.tab()
      await waitFor(() =>
        expect(linkButton).toHaveAccessibleName("Label is focused")
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
    const linkButton = canvas.getByRole("link")
    await linkButton.focus()
  },
}

// Test cases:

/**
 * Can route to a new page when clicked
 *
 * has accepts routing options from a client side router (will have to mock this)
 *
 * can have href and onPress at the same item
 *
 * can have href, onPress and download
 *
 * ping will send a post request with body ping to URL
 *
 */
