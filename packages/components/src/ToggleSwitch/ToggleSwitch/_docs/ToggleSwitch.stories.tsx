import { Meta, StoryObj } from "@storybook/react"
import { ToggleSwitch } from "../index"

const meta = {
  title: "Components/Toggle Switch controls/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `ToggleSwitchField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof ToggleSwitch>

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
  args: { reversed: true },
}
