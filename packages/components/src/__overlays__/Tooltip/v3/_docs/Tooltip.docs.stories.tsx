import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Button, IconButton } from "~components/Button"
import { FieldMessage } from "~components/FieldMessage"
import { AddIcon, QuestionIcon } from "~components/Icon"
import { Input } from "~components/Input"
import { Label } from "~components/Label"
import { Focusable } from "~components/__utilities__/v3"
import { Tooltip, TooltipTrigger } from "../index"
import * as TestStories from "./Tooltip.spec.stories"

const meta = {
  title: "Overlays/Tooltip/v3/Docs Assets",
  component: Tooltip,
  parameters: {
    layout: "centered",
    a11y: { disable: true },
  },
  args: {
    defaultOpen: isChromatic(),
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

export const Playground: Story = {
  render: ({ defaultOpen: _, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={true} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}

export const Primary: Story = {
  render: () => (
    <TooltipTrigger>
      <IconButton
        label="Add something"
        icon={<AddIcon role="presentation" />}
        primary
        // Negate the aria description (added by RAC) as it should be the
        // same as the accessible name, therefore no need to duplicate it
        aria-describedby={null}
      />
      <Tooltip>Add something</Tooltip>
    </TooltipTrigger>
  ),
}

export const Placement: Story = {
  ...TestStories.Placement,
}

export const DoFieldTooltip: Story = {
  render: () => (
    <div>
      <Label>Password</Label>
      <Input type="text" />
      <FieldMessage message="Password must be at least 8 characters." />
    </div>
  ),
}

export const DontFieldTooltip: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <div>
      <TooltipTrigger>
        <Focusable>
          <Label>
            Password{" "}
            <span className="inline-flex align-middle">
              <QuestionIcon
                classNameOverride="w-[15px] m-auto"
                role="presentation"
              />
            </span>
          </Label>
        </Focusable>
        <Tooltip>Password must be at least 8 characters</Tooltip>
      </TooltipTrigger>
      <div className="flex gap-4">
        <Input type="text" />
      </div>
    </div>
  ),
}

export const DoConcise: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <div>
      <TooltipTrigger>
        <IconButton
          label="Add topic"
          icon={<AddIcon role="presentation" />}
          primary
          // Negate the aria description (added by RAC) as it should be the
          // same as the accessible name, therefore no need to duplicate it
          aria-describedby={null}
        />
        <Tooltip>Add topic to agenda</Tooltip>
      </TooltipTrigger>
    </div>
  ),
}

export const DontConcise: Story = {
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
  render: () => (
    <div>
      <TooltipTrigger>
        <IconButton
          label="Add something"
          icon={<AddIcon role="presentation" />}
          primary
          // Negate the aria description (added by RAC) as it should be the
          // same as the accessible name, therefore no need to duplicate it
          aria-describedby={null}
        />
        <Tooltip>
          Add Topic to agenda. This will create a new topic where you can
          discuss recent work with your manager.{" "}
        </Tooltip>
      </TooltipTrigger>
    </div>
  ),
}
