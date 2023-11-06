import { Meta, StoryObj } from "@storybook/react"
import { ToggleSwitchField } from "../ToggleSwitchField"

const meta = {
  title: "Components/Toggle Switch controls/ToggleSwitchField",
  component: ToggleSwitchField,
  args: {
    labelText: "Toggle me"
  }
} satisfies Meta<typeof ToggleSwitchField>

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

export const Reversed: Story = {
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { reversed: true }
}
