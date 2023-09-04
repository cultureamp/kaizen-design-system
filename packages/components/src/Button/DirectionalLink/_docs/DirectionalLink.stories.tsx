import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { DirectionalLink } from "../index"

const meta = {
  title: "Components/Buttons/DirectionalLink",
  component: DirectionalLink,
  argTypes: { ...classNameOverrideArgType },
  args: {
    label: "Back",
    direction: "prev"
  }
} satisfies Meta<typeof DirectionalLink>

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
