import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent } from "@storybook/test"
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

export const OnCustomButtonAnchor: Story = {
  name: "Button custom <a>",
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        component={props => (
          <a {...props} href="/">
            Click me
          </a>
        )}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnCustomButton: Story = {
  name: "Button custom <button>",
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        component={props => <button type="button" {...props} />}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        disabled
      />
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Tooltip content</div>
      </Tooltip>
    </TooltipTrigger>
  ),
}

export const OnButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button label="Some very long button label to show tooltip in center" />
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Tooltip content</div>
      </Tooltip>
    </TooltipTrigger>
  ),
}

export const OnLink: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Button
        label="Some very long button label to show tooltip in center"
        href="#"
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnIconButton: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <IconButton
        label="(TESTING) Add label"
        icon={<AddIcon role="presentation" />}
        primary
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const PlacementLeft: Story = {
  ...OnButton,
  args: { isOpen: true, placement: "left" },
}

export const PlacementRight: Story = {
  ...OnButton,
  args: { isOpen: true, placement: "right" },
}

export const PlacementTop: Story = {
  ...OnButton,
  args: { isOpen: true, placement: "top" },
}

export const PlacementBottom: Story = {
  ...OnButton,
  args: { isOpen: true, placement: "bottom" },
}

export const WithCustomFocusableElement: Story = {
  render: args => (
    <TooltipTrigger {...args}>
      <Focusable>
        <Tag>Non-interactive element</Tag>
      </Focusable>
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Tooltip content</div>
      </Tooltip>
    </TooltipTrigger>
  ),
}

export const ToggleTip: Story = {
  name: "Toggle Tip (Tooltip)",
  render: args => (
    <TooltipTrigger {...args}>
      <ToggleTipTrigger>
        <InformationIcon role="img" aria-label="Information" />
      </ToggleTipTrigger>
      <Tooltip {...args}>
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Tooltip content</div>
      </Tooltip>
    </TooltipTrigger>
  ),
  play: async ({}) => {
    await userEvent.tab()
    await userEvent.keyboard("{enter}")
  },
}
