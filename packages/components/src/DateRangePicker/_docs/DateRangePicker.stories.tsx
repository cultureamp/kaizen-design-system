import React, { useEffect, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within, expect, fn } from "@storybook/test"
import { DateRange } from "react-day-picker"
import { DateRangePicker, formatDateRangeValue } from "../index"

const meta = {
  title: "Components/Date controls/DateRangePicker",
  component: DateRangePicker,
  args: {
    labelText: "Label",
    onChange: fn(),
  },
} satisfies Meta<typeof DateRangePicker>

export default meta

type Story = StoryObj<typeof meta>

const DateRangePickerTemplate: Story = {
  render: (args) => {
    const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
      from: args?.selectedDateRange?.from,
      to: args?.selectedDateRange?.to,
    })
    const [value, setValue] = useState(args.value)

    const onDateRangeChange = (dateRange: DateRange): void => {
      setSelectedDateRange(dateRange)
      args.onChange?.(dateRange)
    }

    // TODO: Make formating built in
    useEffect(() => {
      setValue(formatDateRangeValue(selectedDateRange))
    }, [selectedDateRange])

    return (
      <>
        <DateRangePicker
          {...args}
          value={value}
          selectedDateRange={selectedDateRange}
          onChange={onDateRangeChange}
        />
      </>
    )
  },
}

export const Playground: Story = {
  ...DateRangePickerTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

const selectedDateRange = {
  from: new Date(2022, 2, 6),
  to: new Date(2022, 2, 15),
}

export const AboveIfAvailable: Story = {
  ...DateRangePickerTemplate,
  name: "Limited viewport autoplacement above",
  args: {
    labelText: "Calendar with space above",
    selectedDateRange,
  },
  parameters: {
    viewport: {
      viewports: {
        LimitedViewportAutoPlace: {
          name: "Limited vertical space",
          styles: {
            width: "1024px",
            height: "500px",
          },
        },
      },
      defaultViewport: "LimitedViewportAutoPlace",
    },
  },
  decorators: [
    (Story) => (
      <div className="mt-[350px]">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button", { name: /Change date:/ }))
    await expect(canvas.getByRole("dialog")).toBeInTheDocument()
  },
}

export const LimitedViewportHeight: Story = {
  ...DateRangePickerTemplate,
  name: "Limited viewport height",
  args: {
    labelText: "Calendar with reduced space below",
    selectedDateRange,
  },
  parameters: {
    viewport: {
      viewports: {
        LimitedViewportHeight: {
          name: "Limited vertical space",
          styles: {
            width: "1024px",
            height: "300px",
          },
        },
      },
      defaultViewport: "LimitedViewportHeight",
    },
  },
  decorators: [
    (Story) => (
      <div className="mb-[150px]">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button", { name: /Change date:/ }))
    await expect(canvas.getByRole("dialog")).toBeInTheDocument()
  },
}

export const FullViewportHeight: Story = {
  ...DateRangePickerTemplate,
  name: "Full viewport height",
  args: {
    labelText: "Calendar with full space below",
    selectedDateRange,
  },
  decorators: [
    (Story) => (
      <div className="mb-[350px]">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button", { name: /Change date:/ }))
    await expect(canvas.getByRole("dialog")).toBeInTheDocument()
  },
}
