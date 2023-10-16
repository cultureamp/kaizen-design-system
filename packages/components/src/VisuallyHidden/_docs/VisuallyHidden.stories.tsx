import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { VisuallyHidden } from "../index"

const meta = {
  title: "Components/Visually Hidden",
  component: VisuallyHidden,
  args: {
    children: "👋 Hello!",
  },
} satisfies Meta<typeof VisuallyHidden>

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
      There is visually hidden text between the two brackets (click &quot;Show
      code&quot; to see more): [<VisuallyHidden {...args} />]
    </div>
  ),
}
