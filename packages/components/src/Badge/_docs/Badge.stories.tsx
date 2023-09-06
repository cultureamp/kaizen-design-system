import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { Badge } from "../index"

const meta = {
  title: "KAIO-staging/Badge",
  component: Badge,
  argTypes: { ...classNameOverrideArgType },
  args: {
    children: "3",
  },
} satisfies Meta<typeof Badge>

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
