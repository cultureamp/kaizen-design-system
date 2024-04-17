import { Meta, StoryObj } from "@storybook/react"

import { BrandMomentPositiveOutro } from "../index"

const meta = {
  title: "Tier 1/Illustrations/Scene",
  component: BrandMomentPositiveOutro,
} satisfies Meta<typeof BrandMomentPositiveOutro>

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
