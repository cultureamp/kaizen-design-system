import { Meta, StoryObj } from "@storybook/react"
import { Radio } from "../index"

const meta = {
  title: "Components/Radio controls/Radio",
  component: Radio,
  args: {
    id: "radio",
    name: "name",
    value: "value",
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `RadioField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
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
