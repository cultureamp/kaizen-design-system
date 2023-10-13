import { Meta, StoryObj } from "@storybook/react"
import { CalendarSingle } from "../index"

const meta = {
  title: "Components/Calendars/CalendarSingle",
  component: CalendarSingle,
} satisfies Meta<typeof CalendarSingle>

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
