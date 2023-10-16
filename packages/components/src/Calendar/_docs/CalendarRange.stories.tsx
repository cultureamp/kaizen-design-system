import { Meta, StoryObj } from "@storybook/react"
import { CalendarRange } from "../index"

const meta = {
  title: "Components/Date controls/Calendars/CalendarRange",
  component: CalendarRange,
} satisfies Meta<typeof CalendarRange>

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
