import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { TimeField } from "../index"
import { ValueType } from "../types"

const meta = {
  title: "Components/TimeField",
  component: TimeField,
  argTypes: {
    locale: {
      options: ["en-US", "en-AU", "en-GB", "fr-CA", "zh-Hant"],
      control: { type: "radio" },
    },
    status: { control: { type: "radio" }, options: ["default", "error"] },
    validationMessage: { control: "text" },
  },
  args: {
    label: "Time",
    locale: "en-US",
    value: null,
  },
} satisfies Meta<typeof TimeField>

export default meta

type Story = StoryObj<typeof meta>

const TimeFieldTemplate: Story = {
  render: args => {
    const [value, setValue] = useState<ValueType | null>(args.value)
    return <TimeField {...args} value={value} onChange={setValue} />
  },
}

export const Playground: Story = {
  ...TimeFieldTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
