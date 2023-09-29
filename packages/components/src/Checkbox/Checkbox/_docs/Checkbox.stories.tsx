import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../index"

const meta = {
  title: "KAIO-staging/Checkbox controls/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>

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
