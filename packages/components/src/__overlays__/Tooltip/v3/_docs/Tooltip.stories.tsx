import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Tooltip } from "../"

const meta = {
  title: "Overlays/Tooltip/v3",
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
  render: args => <Tooltip {...args}>{args.children}</Tooltip>,
}
