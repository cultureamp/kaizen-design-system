import { Meta, StoryObj } from "@storybook/react"
import { Radio } from "../index"

const meta = {
  title: "KAIO-staging/Radio controls/Radio",
  component: Radio,
  args: {
    id: "radio",
    name: "Radio",
    value: "Radio",
  },
} satisfies Meta<typeof Radio>

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
