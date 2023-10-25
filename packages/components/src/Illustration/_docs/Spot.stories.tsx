import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Cautionary as SpotIllustration } from "../index"

const meta = {
  title: "Components/Illustration/Spot",
  component: SpotIllustration,
  args: {},
} satisfies Meta<typeof SpotIllustration>

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
