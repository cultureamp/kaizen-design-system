import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { IconButton } from "~components/Button"
import { FieldMessage } from "~components/FieldMessage"
import { AddIcon, QuestionIcon } from "~components/Icon"
import { Input } from "~components/Input"
import { Label } from "~components/Label"
import { Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Overlays/Tooltip/v3/Usage Guidelines",
  component: Tooltip,
  args: {
    defaultOpen: true,
  },
  parameters: {
    docs: {
      layout: "centered",
      subtitle:
        "Tooltips show contextual help or information about specific components when a user hovers or focuses on them.",
      argTypes: {
        include: ["defaultOpen", "placement"],
        sort: "requiredFirst",
      },
    },
  },
  // tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

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
