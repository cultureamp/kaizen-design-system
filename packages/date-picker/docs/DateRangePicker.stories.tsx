import React, { useEffect, useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { DateRange } from "react-day-picker"
import { enGB } from "date-fns/locale"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DateRangePicker } from "../src/DatePicker/DateRangePicker"
import { Calendar } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { formatDateRangeValue } from "../src/utils/formatDateRangeValue"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Date Range Picker`,
  component: DateRangePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DateRangePicker } from "@kaizen/date-picker"',
      },
    },
  },
}

export const DateRangePickerStoryDefault = props => (
  <DateRangePickerTemplate {...props} />
)
DateRangePickerStoryDefault.storyName = "Date Range Picker"

const DateRangePickerTemplate: Story = props => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  })
  const [value, setValue] = useState("")

  const onDateRangeChange = (dateRange: DateRange) => {
    setSelectedDateRange(dateRange)
  }

  useEffect(() => {
    setValue(formatDateRangeValue(selectedDateRange))
  }, [selectedDateRange])

  return (
    <>
      <DateRangePicker
        id="date-range"
        labelText="Label"
        onChange={onDateRangeChange}
        value={value}
        selectedDateRange={selectedDateRange}
        {...props}
      />
    </>
  )
}

const CalendarRangeTemplate: Story = props => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )
  const selectedDateRange = {
    from: undefined,
    to: undefined,
  }

  const modifiers: DateRange = {
    from: selectedDateRange?.from,
    to: selectedDateRange?.to,
  }

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 15],
        },
      },
    ],
    placement: "bottom-start",
  })
  return (
    <div ref={setReferenceElement}>
      <Calendar
        mode="range"
        id="calendar-dialog"
        setPopperElement={setPopperElement}
        popperStyles={styles}
        popperAttributes={attributes}
        onDayChange={() => undefined}
        weekStartsOn={0}
        defaultMonth={new Date(2022, 2)}
        selectedRange={selectedDateRange}
        modifiers={modifiers}
        locale={{
          localeObj: enGB,
          code: enGB.code,
          dir: "ltr",
        }}
        {...props}
      />
    </div>
  )
}

const DateRangePickerStickerSheetTemplate: Story<{ isReversed: boolean }> = ({
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
        <StoryWrapper.Row rowTitle="Date Range Calendar">
          <CalendarRangeTemplate
            modifiers={modifiers}
            selectedRange={selectedDateRange}
          />
          <CalendarRangeTemplate
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
DateRangePickerStickerSheet.parameters = { chromatic: { disable: false } }
