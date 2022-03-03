import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Select } from "@kaizen/draft-select"
import { CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"
import { Calendar } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/Date Picker`,
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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <DatePicker
      id="datepicker-default"
      labelText="Label"
      value={selectedDate}
      onChange={onDayChange}
      {...props}
    />
  )
}
DefaultStory.storyName = "Default (Kaizen Demo)"

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
        onKeyDown={() => undefined}
        initialMonth={new Date(2022, 1, 5)}
        {...props}
      />
    </div>
  )
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Default", "Selected Value", "Disabled"]}
        />
        <StoryWrapper.Row rowTitle="Input">
          <DatePicker
            id="make-me-unique-1"
            labelText="Label"
            value={selectedDate}
            onChange={onDayChange}
          />
          <DatePicker
            id="make-me-unique-1"
            labelText="Label"
            value={new Date(2022, 1, 5)}
            onChange={onDayChange}
          />
          <DatePicker
            isDisabled
            id="make-me-unique-1"
            labelText="Label"
            value={selectedDate}
            onChange={onDayChange}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Selected Date", "Focused Date", "Disabled Dates"]}
        />
        <StoryWrapper.Row rowTitle="Calendar">
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
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
StickerSheetDefault.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const focusedDate = canvas.getByLabelText("Wed Jan 19 2022")
  await userEvent.click(focusedDate, undefined, {
    skipPointerEventsCheck: true,
  })
}

export const FormExample = props => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const onDayChange = (day: Date) => {
    setSelectedDate(day)
  }
  const options = [
    { value: "Lloyd", label: "Lloyd" },
    { value: "Nat", label: "Nat", isDisabled: true },
    { value: "Rafa", label: "Rafa" },
    { value: "Elaine", label: "Elaine" },
    { value: "Julio", label: "Julio" },
    { value: "Priyanka", label: "Priyanka" },
    { value: "Prince", label: "Prince" },
    { value: "Charith", label: "Charith" },
    { value: "Nick", label: "Nick" },
  ]

  return (
    <>
      <p>
        This story is used to test the z-index in comparision to other pop up
        styles components. Note: this is not tested on chromatic
      </p>
      <DatePicker
        id="make-me-unique-1"
        labelText="Label"
        value={selectedDate}
        onChange={onDayChange}
        {...props}
      />
      <Select options={options} />
    </>
  )
}
