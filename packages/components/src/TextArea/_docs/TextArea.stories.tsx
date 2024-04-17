import { Meta, StoryObj } from "@storybook/react"
import { TextArea } from "../index"

const meta = {
  title: "Tier 1/TextArea",
  component: TextArea,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `TextAreaField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof TextArea>

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
