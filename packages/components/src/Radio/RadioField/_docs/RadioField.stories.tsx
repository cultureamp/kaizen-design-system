import { Meta, StoryObj } from "@storybook/react"
import { RadioField } from "../index"

const meta = {
  title: "KAIO-staging/Radio controls/RadioField",
  component: RadioField,
  args: {
    labelText: "Radio label",
  },
} satisfies Meta<typeof RadioField>

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
