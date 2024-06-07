import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within, expect } from "@storybook/test"
import { Button, IconButton } from "~components/Button"
import { AddIcon, InformationIcon } from "~components/Icon"
import { Tag } from "~components/__future__/Tag"
import { Focusable, ToggleTipTrigger, Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {
    defaultOpen: true,
  },
  argTypes: {
    // eslint-disable-next-line camelcase
    UNSTABLE_portalContainer: {
      control: false,
      table: { disable: true },
    },
    triggerRef: { control: false },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const OnButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button label="Button with tooltip" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnLink: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button label="Button with tooltip" href="#" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnIconButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <IconButton
        label="IconButton with tooltip"
        icon={<AddIcon role="presentation" />}
        primary
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button label="Button with tooltip" disabled />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButtonAnchor: Story = {
  name: "On Button with custom <a>",
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Button with tooltip"
        component={props => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a {...props} href="#" style={{ padding: "0 1rem" }}>
            Custom Link with tooltip
          </a>
        )}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButton: Story = {
  name: "On Button with custom <button>",
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Button with tooltip"
        component={props => <button type="button" {...props} />}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomFocusableElement: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Focusable>
        <Tag>Non-interactive element</Tag>
      </Focusable>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const PlacementLeft: Story = {
  ...OnButton,
  args: { placement: "left" },
}

export const PlacementRight: Story = {
  ...OnButton,
  args: { placement: "right" },
}

export const PlacementTop: Story = {
  ...OnButton,
  args: { placement: "top" },
}

export const PlacementBottom: Story = {
  ...OnButton,
  args: { placement: "bottom" },
}

export const ReversedColors: Story = {
  ...OnButton,
  args: { isReversed: true },
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
}

export const ToggleTip: Story = {
  args: { defaultOpen: false },
  render: args => (
    <TooltipTrigger {...args}>
      <ToggleTipTrigger>
        <InformationIcon role="img" aria-label="Information" />
      </ToggleTipTrigger>
      <Tooltip
        {...args}
        style={{ display: "flex", textAlign: "left", alignItems: "center" }}
      >
        <InformationIcon
          role="presentation"
          style={{ marginRight: "0.25rem" }}
        />
        With rich content
      </Tooltip>
    </TooltipTrigger>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!)
    // focus
    await userEvent.tab()
    await expect(canvas.queryByRole("tooltip")).toBeNull()

    await step("Enter toggles", async () => {
      await userEvent.keyboard("{enter}")
      await expect(canvas.getByRole("tooltip")).toBeVisible()
      await userEvent.keyboard("{enter}")
      await expect(canvas.queryByRole("tooltip")).toBeNull()
    })
    await step("Space toggles", async () => {
      await userEvent.keyboard(" ")
      await expect(canvas.getByRole("tooltip")).toBeVisible()
      await userEvent.keyboard(" ")
      await expect(canvas.queryByRole("tooltip")).toBeNull()
    })
    await step("Pointer toggles", async () => {
      const button = canvasElement.getElementsByTagName("button")[0]
      await userEvent.click(button)
      await expect(canvas.getByRole("tooltip")).toBeVisible()
      await userEvent.click(button)
      await expect(canvas.queryByRole("tooltip")).toBeNull()
    })
    await step("Escape closes", async () => {
      await userEvent.keyboard("{enter}")
      await userEvent.keyboard("{Escape}")
      await expect(canvas.queryByRole("tooltip")).toBeNull()
    })

    // leave open for screenshot
    await userEvent.keyboard("{enter}")
  },
}
