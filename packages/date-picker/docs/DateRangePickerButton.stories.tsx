import React, { useEffect, useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { RangeModifier } from "react-day-picker/types/Modifiers"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"
import { DateRangePicker } from "../src/DatePicker/DateRangePicker"
import { Calendar } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { formatDateRangeValue } from "../src/utils/formatDateRangeValue"

export default {
  title: `${CATEGORIES.components}/DatePicker/Date Range Picker - Button`,
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DatePicker } from "@kaizen/date-picker"',
      },
    },
  },
}

export const DateRangePickerStoryDefault = props => (
  <DateRangePickerTemplate {...props} />
)
DateRangePickerStoryDefault.storyName = "Date Range Picker"

const DateRangePickerTemplate: Story = props => {
  const [selectedDateRange, setSelectedDateRange] = useState<RangeModifier>({
    from: undefined,
    to: undefined,
  })
  const [value, setValue] = useState("")

  const onDateRangeChange = (dateRange: RangeModifier) => {
    setSelectedDateRange(dateRange)
  }

  useEffect(() => {
    setValue(formatDateRangeValue(selectedDateRange))
  }, [selectedDateRange])

  return (
    <>
      <DateRangePicker
        labelText="Label"
        disabledBefore={new Date(2022, 2, 4)}
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

  const modifiers: RangeModifier = {
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
        setPopperElement={setPopperElement}
        styles={styles}
        attributes={attributes}
        firstDayOfWeek={0}
        onDayChange={e => e}
        initialMonth={new Date(2022, 2)}
        range
        selectedRange={selectedDateRange}
        modifiers={modifiers}
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

  const modifiers: RangeModifier = {
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
