import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { MultiSelect } from "../index"

const meta = {
  title: "Components/MultiSelect/Future",
  component: MultiSelect,
  args: {},
} satisfies Meta<typeof MultiSelect>

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
}

// export const Reversed: Story = {
//   parameters: { backgrounds: { default: "Purple 700" } },
//   args: { isReversed: true },
// }
