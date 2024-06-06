import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Tooltip as StankyTooltip } from "../../v1"
import { Tooltip } from "../index"

const meta = {
  title: "Overlays/Tooltip/V2",
  component: Tooltip,
  decorators: [
    Story => (
      <div className="flex mt-[60px] gap-12">
        <Story />
      </div>
    ),
  ],
  args: {
    children: "Hello World!",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: args => (
    <div>
      <StankyTooltip isInitiallyVisible text={`${args.children}`}>
        <button type="button" onClick={(): void => undefined}>
          click
        </button>
      </StankyTooltip>
      <Tooltip {...args}>{args.children}</Tooltip>
    </div>
  ),
}
