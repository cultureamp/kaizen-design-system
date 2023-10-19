import React, { useEffect, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { DateRange } from "react-day-picker"
import { DateRangePicker, formatDateRangeValue } from "../index"

const meta = {
  title: "Components/Date controls/DateRangePicker",
  component: DateRangePicker,
  args: {
    labelText: "Label",
  },
} satisfies Meta<typeof DateRangePicker>

export default meta

type Story = StoryObj<typeof meta>

const DateRangePickerTemplate: Story = {
  render: args => {
    const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
      from: undefined,
      to: undefined,
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
