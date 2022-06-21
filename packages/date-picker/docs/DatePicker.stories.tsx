import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { Paragraph } from "@kaizen/typography"
import { Button } from "@kaizen/button"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { CodeBlock } from "@kaizen/design-tokens/docs/DocsComponents"
import { DateInput } from "../src/DatePicker/components/DateInput"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import {
  DatePicker,
  DayOfWeek,
  ValidationResponse,
  LanguageLocale,
} from "../src/DatePicker"
import { Calendar, CalendarProps } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { locales } from "../src/DatePicker/supportedLanguages"

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
      {...props}
    />
  )
}
DefaultStory.storyName = "Date Picker"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}

export const LocaleStory = props => {
  const [selectedDate, setValueDate] = useState<Date | undefined>(
    new Date(2022, 4, 5)
  )
  const [status, setStatus] = useState<FieldMessageStatus | undefined>()
  const [locale, setLocale] = useState<Locale | undefined>()
  const [validationMessage, setValidationMessage] = useState<
    string | undefined
  >()

  const handleValidation = (validationResponse: ValidationResponse) => {
    setStatus(validationResponse.status)
    setValidationMessage(validationResponse.validationMessage)
  }

  const handleLocalisation = e => {
    setLocale(locales[e.target.value])
  }

  return (
    <>
      <DatePicker
        id="datepicker-default"
        labelText="Label"
        selectedDay={selectedDate}
        onDayChange={setValueDate}
        onValidate={handleValidation}
        status={status}
        validationMessage={validationMessage}
        locale={locale}
        {...props}
      />
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <label htmlFor="languages">Select language: </label>
        <select
          name="languages"
          id="languages"
          onChange={e => handleLocalisation(e)}
          defaultValue={"englishUS"}
        >
          {Object.keys(locales).map(language => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
LocaleStory.storyName = "Localisation"

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
        {...props}
      />
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <Button onClick={submitRequest} label="Submit" />
      </div>
      <div>
        <p>
          This story includes additional custom validation to provide some
          guidance when dealing with validation other than date isInvalid or
          isDisabled.
        </p>
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
        <p>
          The <code>onValidate</code> callback returns a{" "}
          <code>validationResponse</code> object which provides data such as a
          default validation message, and can be utilised for custom validation.
        </p>
        <CodeBlock
          language="json"
          code={JSON.stringify(response, null, "\t")}
        />
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
        locale={locales.englishUS as LanguageLocale}
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
StickerSheetDefault.parameters = { chromatic: { disable: false } }
