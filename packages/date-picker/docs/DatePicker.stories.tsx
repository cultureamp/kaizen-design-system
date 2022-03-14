import React, { useEffect, useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { RangeModifier } from "react-day-picker/types/Modifiers"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"
import { DateRangePicker } from "../src/DatePicker/DateRangePicker"
import { Calendar } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { formatDateRangeValue } from "../src/utils/formatDateRangeValue"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Date Picker`,
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { DatePicker } from "@kaizen/date-picker"',
      },
    },
  },
}

export const DatePickerStoryDefault = props => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <>
      <DatePicker
        id="datepicker-default"
        labelText="Label"
        value={selectedDate}
        onChange={onDayChange}
        {...props}
      />
      <ul>
        {Array(100)
          .fill(1)
          .map((_, index) => (
            <li>fill the page with something...</li>
          ))}
      </ul>
    </>
  )
}
DatePickerStoryDefault.storyName = "Date Picker"

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
        id="datepicker-range"
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

export const DateRangePickerStoryDefault = props => (
  <DateRangePickerTemplate {...props} />
)
DateRangePickerStoryDefault.storyName = "Date Range Picker"

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

const CalendarTemplate: Story = props => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

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
        onDayChange={() => undefined}
        initialMonth={new Date(2022, 1, 5)}
        {...props}
      />
    </div>
  )
}

const DatePickerStickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  const validationMessages = {
    success: "This is a success message",
    caution: "This is a cautionary message",
    error: "This is an error message",
  }

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Default", "Selected Value", "Disabled"]}
        />
        <StoryWrapper.Row rowTitle="Date Picker Input">
          <DatePicker
            id="datepicker-input-default"
            labelText="Label"
            value={selectedDate}
            onChange={onDayChange}
            validationMessages={validationMessages}
          />
          <DatePicker
            id="datepicker-input-selected"
            labelText="Label"
            value={new Date(2022, 1, 5)}
            onChange={onDayChange}
            validationMessages={validationMessages}
          />
          <DatePicker
            isDisabled
            id="datepicker-input-disabled"
            labelText="Label"
            value={selectedDate}
            onChange={onDayChange}
            validationMessages={validationMessages}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Selected Date", "Focused Date", "Disabled Dates"]}
        />
        <StoryWrapper.Row rowTitle="Date Picker Calendar">
          <CalendarTemplate value={new Date(2022, 1, 5)} />
          <CalendarTemplate
            value={new Date(2022, 0, 5)}
            initialMonth={new Date(2022, 0, 5)}
          />
          <CalendarTemplate
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

export const DatePickerStickerSheet = DatePickerStickerSheetTemplate.bind({})
DatePickerStickerSheet.storyName = "Sticker Sheet (Date Picker)"
DatePickerStickerSheet.parameters = { chromatic: { disable: false } }
DatePickerStickerSheet.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const focusedDate = canvas.getByLabelText("Wed Jan 19 2022")
  await userEvent.click(focusedDate, undefined, {
    skipPointerEventsCheck: true,
  })
}

export const DateRangePickerStickerSheet =
  DateRangePickerStickerSheetTemplate.bind({})
DateRangePickerStickerSheet.storyName = "Sticker Sheet (Date Range Picker)"
DateRangePickerStickerSheet.parameters = { chromatic: { disable: false } }
