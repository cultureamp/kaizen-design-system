import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { FieldMessage } from "../index"

const meta = {
  title: "Components/FieldMessage",
  component: FieldMessage,
  args: {
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullasemper odio vitae sem gravida rutrum.",
  },
} satisfies Meta<typeof FieldMessage>

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

export const HelperText: Story = {
  args: {
    message:
      "Your email address will be used to send survey notifications and reports",
  },
}
export const DetailedHelperText: Story = {
  args: {
    message: (
      <div>
        Your email address will be used to send survey notifications and
        reports. Learn more about <a href="/">how your data will be used</a>
      </div>
    ),
  },
}

export const Warning: Story = {
  args: { variant: "warning", message: "Invalid email provided." },
}

export const Cautionary: Story = {
  args: {
    variant: "cautionary",
    message: "Do not share your password or account details.",
  },
}

export const Success: Story = {
  args: { variant: "success", message: "Your account has been created" },
}

export const Reversed: Story = {
  args: { reversed: true, variant: "warning" },
  parameters: { backgrounds: { default: "Purple 700" } },
  name: "reversed",
}

export const Position: Story = {
  args: { position: "bottom" },
  render: args => (
    <div className="flex gap-6">
      <FieldMessage
        {...args}
        variant="cautionary"
        message='Position "bottom" will apply margin to the top'
      />
      <FieldMessage
        {...args}
        variant="cautionary"
        position="top"
        message='Position "top" will apply margin to the bottom'
      />
    </div>
  ),
}
