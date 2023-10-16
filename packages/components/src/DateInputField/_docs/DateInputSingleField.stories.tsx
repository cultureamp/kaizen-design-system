import React from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import { DateInputSingleField } from "../index"

const meta = {
  title: "Components/Date controls/DateInputSingleField",
  component: DateInputSingleField,
  args: {
    labelText: "Date",
    onButtonClick: action("Icon button clicked"),
  },
} satisfies Meta<typeof DateInputSingleField>

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
  args: { isReversed: true },
  decorators: [
    Story => (
      <div className="bg-purple-700 p-16">
        <Story />
      </div>
    ),
  ],
}
