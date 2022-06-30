import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { Paragraph } from "@kaizen/typography"
import { Button } from "@kaizen/button"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { CodeBlock } from "@kaizen/design-tokens/docs/DocsComponents"
import { enAU } from "date-fns/locale"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DatePicker, DayOfWeek, ValidationResponse } from "../src/DatePicker"
import { Calendar, CalendarProps } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const SUPPORTED_LOCALES = ["en-US", "en-AU"]

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
  argTypes: {
    locale: {
      options: SUPPORTED_LOCALES,
      control: { type: "radio" },
    },
  },
}

export const DefaultStory = props => {
  const [selectedDate, setValueDate] = useState<Date | undefined>()
  const [status, setStatus] = useState<FieldMessageStatus | undefined>()
  const [validationMessage, setValidationMessage] = useState<
    string | undefined
  >()

  const handleValidation = (validationResponse: ValidationResponse): void => {
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
      locale="en-AU"
      {...props}
    />
  )
}
DefaultStory.storyName = "Date Picker"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}

export const ValidationStory = props => {
  const [selectedDate, setValueDate] = useState<Date | undefined>(
    new Date(2022, 4, 5)
  )
  const [status, setStatus] = useState<FieldMessageStatus | undefined>()
  const [response, setResponse] = useState<ValidationResponse | undefined>()
  const [validationMessage, setValidationMessage] = useState<
    string | undefined
  >()

  const handleValidation = (validationResponse: ValidationResponse): void => {
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
    if (status === "error" || status === "caution") {
      setValidationMessage("There is an error.")
      setStatus("error")
      alert("Error")
    } else {
      alert("Success")
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
        }}
        onValidate={handleValidation}
        status={status}
        validationMessage={validationMessage}
        disabledBefore={new Date()}
        locale="en-AU"
        {...props}
      />
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <Button onClick={submitRequest} label="Submit" />
      </div>
      <div>
        <Paragraph variant="body">
          NOTE: This story includes additional custom validation to provide some
          guidance when dealing with validation other than date isInvalid or
          isDisabled.
        </Paragraph>
        <ul>
          <li>
            There will be a caution when the selectedDay{" "}
            <strong>is valid</strong> but{" "}
            <strong>is not within this year</strong>.
          </li>
          <li>
            There will be an error when the{" "}
            <strong>submit button is clicked</strong> and there is a{" "}
            <strong>current error</strong> within the DatePicker.
          </li>
        </ul>
        <Paragraph variant="body">
          The <code>onValidate</code> callback returns a{" "}
          <code>validationResponse</code> object which provides data such as a
          default validation message, and can be utilised for custom validation.
        </Paragraph>
        <CodeBlock
          language="json"
          code={JSON.stringify(response, null, "\t")}
        />
        <ul>
          <li>
            <code>isInvalid</code>: A date that cannot be parsed. e.g "potato".
          </li>
          <li>
            <code>isDisabled</code>: A date that have been set as disabled
            through the <code>disabledDates</code> prop.
          </li>
          <li>
            <code>isEmpty</code>: Input is empty.
          </li>
          <li>
            <code>isValidDate</code>: Date input that is not{" "}
            <code>invalid</code> nor <code>disabled</code> nor{" "}
            <code>empty</code>.
          </li>
        </ul>
      </div>
    </>
  )
}
ValidationStory.storyName = "Validation"
ValidationStory.parameters = {
  docs: { source: { type: "code" } },
}

const CalendarExample = (props: Partial<CalendarProps>): JSX.Element => {
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
        mode="single"
        id="calendar-dialog"
        setPopperElement={setPopperElement}
        popperStyles={styles}
        popperAttributes={attributes}
        weekStartsOn={DayOfWeek.Sun}
        onDayChange={() => undefined}
        defaultMonth={new Date(2022, 1, 5)}
        locale={enAU}
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
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-AU"
          />
          <DatePicker
            id="datepicker-selected"
            labelText="Label"
            selectedDay={new Date(2022, 1, 5)}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-AU"
          />
          <DatePicker
            id="datepicker-description"
            labelText="Label"
            selectedDay={undefined}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            description={
              <>
                <Paragraph
                  tag="span"
                  variant="small"
                  color={isReversed ? "white" : "dark"}
                >
                  My <strong>Custom</strong> Description Paragraph
                </Paragraph>
              </>
            }
            status="default"
            validationMessage={undefined}
            locale="en-AU"
          />
          <DatePicker
            id="datepicker-disabled"
            labelText="Label"
            selectedDay={undefined}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-AU"
            disabled
          />
          <DatePicker
            id="datepicker-error"
            labelText="Label"
            selectedDay={new Date("potato")}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="error"
            validationMessage="Invalid Date."
            locale="en-AU"
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader headings={["en-AU", "en-US"]} />
        <StoryWrapper.Row rowTitle="Localisation">
          <DatePicker
            id="datepicker-enAU"
            labelText="Label"
            selectedDay={new Date("2022, 1, 5")}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-AU"
          />
          <DatePicker
            id="datepicker-enUS"
            labelText="Label"
            selectedDay={new Date("2022, 1, 5")}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-US"
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Selected Date", "Disabled Dates"]}
        />
        <StoryWrapper.Row rowTitle="Calendar">
          <CalendarExample value={new Date(2022, 1, 5)} />
          <CalendarExample
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
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
