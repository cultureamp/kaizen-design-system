import { Meta, StoryObj } from "@storybook/react"
import { MultiSelect } from "../index"

const meta = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  args: {
    label: "Jalapeno",
  },
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
