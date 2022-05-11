import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { Paragraph } from "@kaizen/typography"
import { Button } from "@kaizen/button"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DatePicker, DatePickerValidation } from "../src/DatePicker"
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
  const [selectedDate, setValueDate] = useState<Date | undefined>()

  return (
    <DatePicker
      id="datepicker-default"
      labelText="Label"
      selectedDay={selectedDate}
      onDayChange={setValueDate}
      {...props}
    />
  )
}
DefaultStory.storyName = "Date Picker"

export const ValidationStory = props => {
  const [selectedDate, setValueDate] = useState<Date | undefined>()
  const [status, setStatus] = useState<"default" | "error">("default")
  const [validationMessage, setValidationMessage] = useState<
    string | undefined
  >(undefined)

  const [validation, setValidation] = useState<DatePickerValidation>({
    status: "default",
    validationMessage: undefined,
  })

  const submitRequest = () => {
    console.log("VALUE ON SUBMIT ", selectedDate)

    if (selectedDate === undefined) {
      setValidation({
        status: "error",
        validationMessage: "Please enter a valid date.",
      })
      return
    } else if (validation.status === "error") {
      alert("There is an error within form")
    }
  }

  return (
    <>
      <DatePicker
        id="datepicker-default"
        labelText="Label"
        selectedDay={selectedDate}
        onDayChange={day => {
          setValueDate(day)
          if (day?.getFullYear() !== new Date().getFullYear()) {
            setValidation({
              status: "error",
              validationMessage: "Date is not this year.",
            })
          } else {
            setValidation({
              status: "default",
              validationMessage: undefined,
            })
          }
          console.log("VALUE ", selectedDate)
        }}
        onValidation={setValidation}
        status={validation.status}
        validationMessage={validation.validationMessage}
        disabledBefore={new Date()}
        disabledValidationMessage="Custom Disabled Date message."
        invalidDateValidationMessage="Custom invalid Date message."
        {...props}
      />
      <Button onClick={submitRequest} label="Submit" />
    </>
  )
}

ValidationStory.storyName = "Validation Story"

DefaultStory.parameters = {
  docs: { source: { type: "code" } },
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
        id="calendar-dialog"
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
          headings={[
            "Default",
            "Selected Value",
            "Custom Description",
            "Disabled",
            "Error",
          ]}
        />
        <StoryWrapper.Row rowTitle="Input">
          <DatePicker
            id="datepicker-default"
            labelText="Label"
            selectedDay={selectedDate}
            onDayChange={setValueDate}
            onValidation={e => e}
            isReversed={isReversed}
          />
          <DatePicker
            id="datepicker-selected"
            labelText="Label"
            selectedDay={new Date(2022, 1, 5)}
            onDayChange={e => e}
            onValidation={e => e}
            isReversed={isReversed}
          />
          <DatePicker
            id="datepicker-description"
            labelText="Label"
            selectedDay={undefined}
            onDayChange={e => e}
            onValidation={e => e}
            isReversed={isReversed}
            description={
              <>
                <Paragraph
                  variant="small"
                  color={isReversed ? "white" : "dark"}
                >
                  My <strong>Custom</strong> Description Paragraph
                </Paragraph>
              </>
            }
          />
          <DatePicker
            id="datepicker-disabled"
            labelText="Label"
            selectedDay={undefined}
            onDayChange={e => e}
            onValidation={e => e}
            isReversed={isReversed}
            isDisabled
          />
          <DatePicker
            id="datepicker-error"
            labelText="Label"
            selectedDay={new Date("potato")}
            onDayChange={e => e}
            onValidation={e => e}
            isReversed={isReversed}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Selected Date", "Disabled Dates"]}
        />
        <StoryWrapper.Row rowTitle="Calendar">
          <CalendarTemplate value={new Date(2022, 1, 5)} />
          <CalendarTemplate
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

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
