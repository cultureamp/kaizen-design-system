import React, { useEffect, useState } from "react"
import { Meta } from "@storybook/react"
import { enAU } from "date-fns/locale"
import { DateRange } from "react-day-picker"
import {
  LegacyCalendarRange,
  LegacyCalendarRangeProps,
} from "~components/Calendar/LegacyCalendarRange"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import {
  DateRangePicker,
  DateRangePickerProps,
  formatDateRangeValue,
} from "../index"

export default {
  title: "Components/Date controls/DateRangePicker",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const DateRangePickerTemplate = (
  props: Partial<DateRangePickerProps>
): JSX.Element => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  })
  const [value, setValue] = useState("")

  const onDateRangeChange = (dateRange: DateRange): void => {
    setSelectedDateRange(dateRange)
  }

  // TODO: Make formating built in
  useEffect(() => {
    setValue(formatDateRangeValue(selectedDateRange))
  }, [selectedDateRange])

  return (
    <>
      <DateRangePicker
        labelText="Label"
        onChange={onDateRangeChange}
        value={value}
        selectedDateRange={selectedDateRange}
        {...props}
      />
    </>
  )
}

const LegacyCalendarRangeTemplate = (
  props: Partial<LegacyCalendarRangeProps>
): JSX.Element => {
  const selectedDateRange = {
    from: undefined,
    to: undefined,
  }

  return (
    <LegacyCalendarRange
      onDayChange={(): void => undefined}
      weekStartsOn={0}
      defaultMonth={new Date(2022, 2)}
      selectedRange={selectedDateRange}
      locale={enAU}
      {...props}
    />
  )
}

const selectedDateRange = {
  from: new Date(2022, 2, 6),
  to: new Date(2022, 2, 16),
}

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet>
        <StickerSheet.Header
          headings={["Default", "Selected Value", "Disabled"]}
          hasVerticalHeadings
          headingsWidth={250}
        />
        <StickerSheet.Row rowTitle="Date Range Picker Input">
          <DateRangePickerTemplate />
          <DateRangePickerTemplate
            selectedDateRange={selectedDateRange}
            value="Mar 6 – Mar 2, 2022"
          />
          <DateRangePickerTemplate isDisabled />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet>
        <StickerSheet.Header
          headings={["Selected Range Dates", "Disabled Dates"]}
          hasVerticalHeadings
        />
        <StickerSheet.Row rowTitle="Date Range Calendar (Legacy)">
          <LegacyCalendarRangeTemplate selectedRange={selectedDateRange} />
          <LegacyCalendarRangeTemplate
            disabledDays={[
              new Date(2022, 1, 15),
              { after: new Date(2022, 1, 17) },
            ]}
          />
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
