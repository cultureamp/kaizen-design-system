import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Button, IconButton } from "~components/Button"
import { FieldMessage } from "~components/FieldMessage"
import { AddIcon, QuestionIcon } from "~components/Icon"
import { Input } from "~components/Input"
import { Label } from "~components/Label"
import { Tooltip, TooltipTrigger } from "../index"
import * as TestStories from "./Tooltip.spec.stories"

const meta = {
  title: "Overlays/Tooltip/v3/Docs Assets",
  component: Tooltip,
  parameters: {
    layout: "centered",
    a11y: { manual: true },
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
      <div className="flex gap-4">
        <Input type="text" />
        <TooltipTrigger>
          <IconButton
            label="Help"
            icon={<QuestionIcon role="presentation" />}
            // Negate the aria description (added by RAC) as it should be the
            // same as the accessible name, therefore no need to duplicate it
            aria-describedby={null}
          />
          <Tooltip>Contact customer support for help</Tooltip>
        </TooltipTrigger>
      </div>
      <FieldMessage message="Password must be at least 8 characters" />
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
      <Label>Password</Label>
      <div className="flex gap-4">
        <Input type="text" />
        <TooltipTrigger>
          <IconButton
            label="Help"
            icon={<QuestionIcon role="presentation" />}
          />
          <Tooltip>Password must be at least 8 characters</Tooltip>
        </TooltipTrigger>
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
      <Label>Email</Label>
      <div className="flex gap-4">
        <Input type="text" />
        <TooltipTrigger>
          <IconButton
            label="Help"
            icon={<QuestionIcon role="presentation" />}
          />
          <Tooltip>Enter your email to help us find your account</Tooltip>
        </TooltipTrigger>
      </div>
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
      <Label>Email</Label>
      <div className="flex gap-4">
        <Input type="text" />
        <TooltipTrigger>
          <IconButton
            label="Help"
            icon={<QuestionIcon role="presentation" />}
          />
          <Tooltip>
            The email field is required. Your email address will be used as an
            identifier when we search for your account and we will also use it
            to send you confirmation numbers via email.
          </Tooltip>
        </TooltipTrigger>
      </div>
    </div>
  ),
}
