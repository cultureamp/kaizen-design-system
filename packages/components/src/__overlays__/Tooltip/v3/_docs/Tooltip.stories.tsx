import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import isChromatic from "chromatic"
import { Button } from "~components/Button"
import { Tooltip, TooltipTrigger } from "../index"

const meta = {
  title: "Overlays/Tooltip/v3",
  component: Tooltip,
  parameters: {
    layout: "centered",
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

import * as spec from "./Tooltip.spec.stories"

export const Playground: Story = {
  render: ({ defaultOpen: _, isOpen, ...args }) => (
    <TooltipTrigger defaultOpen={true} isOpen={isOpen}>
      <Button label="Button" />
      <Tooltip {...args}>Tooltip content</Tooltip>
    </TooltipTrigger>
  ),
}
export const OnButton: Story = { ...spec.OnButton, play: undefined }
export const OnIconButton: Story = { ...spec.OnIconButton, play: undefined }
export const Placement: Story = {
  ...spec.OnButton,
  play: undefined,
  args: { placement: "start" },
}
