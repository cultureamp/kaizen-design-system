import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { CalendarSingle } from "../index"

const meta = {
  title: "Components/Date controls/Calendars/CalendarSingle",
  component: CalendarSingle,
} satisfies Meta<typeof CalendarSingle>

export default meta

type Story = StoryObj<typeof meta>

const CalendarSingleTemplate: Story = {
  render: args => {
    const [selected, setSelected] = useState<Date | undefined>(args.selected)
    return (
      <CalendarSingle {...args} selected={selected} onSelect={setSelected} />
    )
  },
}

export const Playground: Story = {
  ...CalendarSingleTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
