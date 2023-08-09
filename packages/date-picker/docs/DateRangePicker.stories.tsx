import React, { useEffect, useState } from "react"
import { StoryFn } from "@storybook/react"
import { enAU } from "date-fns/locale"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  DateRangePicker,
  DateRangePickerProps,
  formatDateRangeValue,
} from "../src/DateRangePicker"
import { LegacyCalendarRange } from "../src/_subcomponents/Calendar"
import { DateRange } from "../src/types"

export default {
  tags: ["autodocs"],
  title: "Components/Date Selection/Date Range Picker",
  component: DateRangePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DateRangePicker } from "@kaizen/date-picker"',
      },
    },
  },
}

export const DateRangePickerStoryDefault: StoryFn<
  typeof DateRangePicker
> = props => <DateRangePickerTemplate {...props} />
DateRangePickerStoryDefault.storyName = "Date Range Picker"

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

const LegacyCalendarRangeTemplate: StoryFn = props => {
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

const DateRangePickerStickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const selectedDateRange = {
    from: new Date(2022, 2, 6),
    to: new Date(2022, 2, 16),
  }

  const modifiers: DateRange = {
    from: selectedDateRange?.from,
    to: selectedDateRange?.to,
  }

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Default", "Selected Value", "Disabled"]}
        />
        <StoryWrapper.Row rowTitle="Date Range Picker Input">
          <DateRangePickerTemplate />
          <DateRangePickerTemplate
            selectedDateRange={selectedDateRange}
            value="Mar 6 – Mar 2, 2022"
          />
          <DateRangePickerTemplate isDisabled />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Selected Range Dates", "Disabled Dates"]}
        />
        <StoryWrapper.Row rowTitle="Date Range Calendar (Legacy)">
          <LegacyCalendarRangeTemplate
            modifiers={modifiers}
            selectedRange={selectedDateRange}
          />
          <LegacyCalendarRangeTemplate
            disabledDays={[
              new Date(2022, 1, 15),
              { after: new Date(2022, 1, 17) },
            ]}
            id="calendar-dialog-disabled"
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

export const DateRangePickerStickerSheet =
  DateRangePickerStickerSheetTemplate.bind({})
DateRangePickerStickerSheet.storyName = "Sticker Sheet"
DateRangePickerStickerSheet.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
