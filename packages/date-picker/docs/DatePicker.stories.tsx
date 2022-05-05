import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"
import { Calendar } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

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

export const DefaultStory = props => {
  const [valueDate, setValueDate] = useState<Date | undefined>()

  return (
    <DatePicker
      id="datepicker-default"
      labelText="Label"
      value={valueDate}
      onDayChange={setValueDate}
      {...props}
    />
  )
}
DefaultStory.storyName = "Date Picker"

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

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [selectedDate, setValueDate] = useState<Date | undefined>()

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Default", "Selected Value", "Disabled", "Error"]}
        />
        <StoryWrapper.Row rowTitle="Default">
          <DatePicker
            id="datepicker-default"
            labelText="Label"
            value={selectedDate}
            onDayChange={date => setValueDate(date)}
          />
          <DatePicker
            id="datepicker-selected"
            labelText="Label"
            value={new Date(2022, 1, 5)}
            onDayChange={date => setValueDate(date)}
          />
          <DatePicker
            isDisabled
            id="datepicker-disabled"
            labelText="Label"
            value={selectedDate}
            onDayChange={date => setValueDate(date)}
          />
          <DatePicker
            id="datepicker-error"
            labelText="Label"
            value={new Date("potato")}
            onDayChange={date => setValueDate(date)}
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

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
StickerSheetDefault.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const focusedDate = canvas.getByLabelText("Wed Jan 19 2022")
  userEvent.click(focusedDate, undefined, {
    skipPointerEventsCheck: true,
  })
}
