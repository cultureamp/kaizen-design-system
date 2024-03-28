import { Meta, StoryObj } from "@storybook/react"
import { LabelledMessage } from "../LabelledMessage"

const meta = {
  title: "Components/Utilities/Labelled Message",
  component: LabelledMessage,
  args: {
    label: "Label",
    message: "Custom message here",
  },
} satisfies Meta<typeof LabelledMessage>

export default meta

export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
