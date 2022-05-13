import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { Paragraph } from "@kaizen/typography"
import { Button } from "@kaizen/button"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { CodeBlock } from "@kaizen/design-tokens/docs/DocsComponents"
import { DateInput } from "../src/DatePicker/components/DateInput"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DatePicker, ValidationResponse } from "../src/DatePicker"
import { Calendar } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Date Picker`,
  component: DatePicker,
  subcomponents: { DateInput, Calendar },
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
  const [status, setStatus] = useState<FieldMessageStatus | undefined>()
  const [validationMessage, setValidationMessage] = useState<
    string | undefined
  >()

  const handleValidation = (validationResponse: ValidationResponse) => {
    setStatus(validationResponse.status)
    setValidationMessage(validationResponse.validationMessage)
  }

  return (
    <DatePicker
      id="datepicker-default"
      labelText="Label"
      selectedDay={selectedDate}
      onDayChange={setValueDate}
      onValidate={handleValidation}
      status={status}
      validationMessage={validationMessage}
      {...props}
    />
  )
}
DefaultStory.storyName = "Date Picker"

export const ValidationStory = props => {
  const [selectedDate, setValueDate] = useState<Date | undefined>()
  const [status, setStatus] = useState<FieldMessageStatus | undefined>()
  const [response, setResponse] = useState<ValidationResponse | undefined>()
  const [validationMessage, setValidationMessage] = useState<
    string | undefined
  >()

  const handleValidation = (validationResponse: ValidationResponse) => {
    setResponse(validationResponse)
    // An example of additional validation
    if (
      validationResponse.isValidDate &&
      validationResponse.date?.getFullYear() !== new Date().getFullYear()
    ) {
      setStatus("caution")
      setValidationMessage("Date is not this year.")
      return
    }
    setStatus(validationResponse.status)
    setValidationMessage(validationResponse.validationMessage)
  }

  const submitRequest = () => {
    // An example of a form submit request
    if (selectedDate === undefined) {
      setStatus("error")
      setValidationMessage("There is an error.")
      return
    }
  }

  const baseResponse = {
    inputValue: "",
    isInvalid: false,
    isDisabled: false,
    isEmpty: true,
    isValidDate: false,
  }

  return (
    <>
      <p>
        We have added additional validation to this DatePicker to provide some
        guidance when dealing with validation other than date isInvalid or
        isDisabled.
      </p>
      <ul>
        <li>
          There will be a caution when the selectedDay is not within this year.
        </li>
        <li>
          There will be an error when the submit button is clicked and there is
          an error status within the DatePicker.
        </li>
      </ul>
      <DatePicker
        id="datepicker-default"
        labelText="Label"
        selectedDay={selectedDate}
        onDayChange={day => {
          setValueDate(day)
        }}
        onValidate={handleValidation}
        status={status}
        validationMessage={validationMessage}
        disabledBefore={new Date()}
        {...props}
      />
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <Button onClick={submitRequest} label="Submit" />
      </div>
      <div>
        <p>
          The <code>onValidate</code> callback returns a
          <code>validationResponse</code> object which can be used to provide
          additional validation as well as update our default validation message
          if neccessary.
        </p>
        <CodeBlock
          language="json"
          code={
            response
              ? JSON.stringify(response, null, "\t")
              : JSON.stringify(baseResponse, null, "\t")
          }
        />
      </div>
    </>
  )
}
ValidationStory.storyName = "Validation"

ValidationStory.parameters = {
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
            onValidate={e => e}
            isReversed={isReversed}
          />
          <DatePicker
            id="datepicker-selected"
            labelText="Label"
            selectedDay={new Date(2022, 1, 5)}
            onDayChange={e => e}
            onValidate={e => e}
            isReversed={isReversed}
          />
          <DatePicker
            id="datepicker-description"
            labelText="Label"
            selectedDay={undefined}
            onDayChange={e => e}
            onValidate={e => e}
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
            onValidate={e => e}
            isReversed={isReversed}
            isDisabled
          />
          <DatePicker
            id="datepicker-error"
            labelText="Label"
            selectedDay={new Date("potato")}
            onDayChange={e => e}
            onValidate={e => e}
            isReversed={isReversed}
            status="error"
            validationMessage="Invalid Date."
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
