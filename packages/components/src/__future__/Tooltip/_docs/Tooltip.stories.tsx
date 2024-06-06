import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DialogTrigger, Button as RACButton } from "react-aria-components"
import { Button, IconButton } from "~components/Button"
import { AddIcon, InformationIcon } from "~components/Icon"
import { Tag } from "~components/__future__/Tag"
import {
  NonInteractiveTrigger,
  Popover,
  PopoverTrigger,
  ToggleTipTrigger,
  Tooltip,
  TooltipTrigger,
} from "../index"

const meta = {
  title: "Components/__Tooltip/v2",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placement: {
      options: ["top", "left", "right", "bottom"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const PlaygroundRACButton: Story = {
  render: args => (
    <TooltipTrigger>
      <RACButton>RAC button</RACButton>
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
  parameters: {
    docs: { canvas: { sourceState: "shown" } },
  },
}

export const OnCustomButton: Story = {
  render: args => (
    <TooltipTrigger>
      <Button
        label="Some very long button label to show tooltip in center"
        component={props => <span {...props} />}
      />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const OnDisabledButton: Story = {
  render: args => (
    <TooltipTrigger>
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
    <TooltipTrigger>
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
    <TooltipTrigger>
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
    <TooltipTrigger>
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

export const PlaygroundNonInteractiveTrigger: Story = {
  render: args => (
    <TooltipTrigger>
      <NonInteractiveTrigger>
        <Tag>Non-interactive element</Tag>
      </NonInteractiveTrigger>
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

// NOT FULLY WORKING
// - Should not show on hover; only on press
export const PlaygroundToggleTipTooltip: Story = {
  name: "Toggle Tip (Tooltip)",
  render: args => (
    <TooltipTrigger>
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
}

// NOT FULLY WORKING
// - Does not close when clicking outside
// - Does not close on Esc
export const PlaygroundToggleTipPopover: Story = {
  name: "Toggle Tip (Popover)",
  render: () => (
    <DialogTrigger>
      <PopoverTrigger>
        <InformationIcon role="img" aria-label="Information" />
      </PopoverTrigger>
      <Popover
        // This isn't working
        shouldCloseOnInteractOutside={() => true}
      >
        <InformationIcon role="presentation" />
        <div>
          <strong>Title here maybe</strong>
        </div>
        <div>Popover content</div>
      </Popover>
    </DialogTrigger>
  ),
}
