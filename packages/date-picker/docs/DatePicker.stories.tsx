import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { StoryFn } from "@storybook/react"
import { Button } from "@kaizen/button"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { Paragraph } from "@kaizen/typography"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CodeBlock } from "../../design-tokens/docs/DocsComponents"
import { DatePicker } from "../src/DatePicker"
import { ValidationResponse } from "../src/types"
import { defaultMonthControls } from "./controls/defaultMonthControls"
import { disabledDayMatchersControls } from "./controls/disabledDayMatchersControls"
import { datePickerLocaleControls } from "./controls/localeControls"
import { weekStartsOnControls } from "./controls/weekStartsOnControls"

export default {
  tags: ["autodocs"],
  title: "Components/Date Selection/Date Picker",
  component: DatePicker,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: 'import { DatePicker } from "@kaizen/date-picker"',
      },
    },
  },
  argTypes: {
    ...datePickerLocaleControls,
    ...defaultMonthControls,
    ...disabledDayMatchersControls,
    ...weekStartsOnControls,
    buttonRef: {
      control: "disabled",
    },
    inputRef: {
      control: "disabled",
    },
    selectedDay: {
      options: ["None", "Today", "May2022"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
          May2022: "1st May 2022",
        },
      },
      mapping: {
        None: undefined,
        Today: new Date(),
        May2022: new Date("2022-05-01"),
      },
    },
    validationMessage: {
      control: "text",
    },
    description: {
      control: "text",
    },
    onValidate: {
      options: [undefined, "Actions"],
      control: {
        type: "radio",
        labels: {
          Actions: "Log in Actions",
        },
      },
      mapping: {
        Actions: action("onValidate"),
      },
    },
  },
}

export const DefaultStory: StoryFn<typeof DatePicker> = props => {
  const [selectedDate, setValueDate] = useState<Date | undefined>()

  return (
    <DatePicker
      {...props}
      onDayChange={setValueDate}
      selectedDay={props.selectedDay || selectedDate}
    />
  )
}
DefaultStory.storyName = "Date Picker"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  id: "datepicker-default",
  labelText: "Label",
  locale: "en-AU",
  onValidate: undefined,
}

export const ValidationStory: StoryFn = () => {
  const [selectedDate, setValueDate] = useState<Date | undefined>(
    new Date("2022-05-05")
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
      setValidationMessage("Date is not this year")
      return
    }
    setStatus(validationResponse.status)
    setValidationMessage(validationResponse.validationMessage)
  }

  const submitRequest: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    if (status === "error" || status === "caution") {
      setValidationMessage("There is an error")
      setStatus("error")
      return alert("Error")
    }

    alert("Success")
  }

  return (
    <>
      <form onSubmit={submitRequest}>
        <DatePicker
          id="datepicker-default"
          labelText="Label"
          selectedDay={selectedDate}
          onDayChange={setValueDate}
          onValidate={handleValidation}
          status={status}
          validationMessage={validationMessage}
          disabledBefore={new Date()}
          locale="en-AU"
        />
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Button type="submit" label="Submit" />
        </div>
      </form>

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
            <code>isInvalid</code>: A date that cannot be parsed. e.g
            &quot;potato&quot;.
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
  controls: { disable: true },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [selectedDate, setValueDate] = useState<Date | undefined>()

  return (
    <>
      <StickerSheet isReversed={isReversed} heading="Input">
        <StickerSheet.Header
          headings={[
            "Default",
            "Selected Value",
            "Custom Description",
            "Disabled",
            "Error",
          ]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row style={{ verticalAlign: "top" }}>
            <DatePicker
              id="datepicker-default"
              labelText="Label"
              selectedDay={selectedDate}
              onDayChange={setValueDate}
              isReversed={isReversed}
              locale="en-AU"
            />
            <DatePicker
              id="datepicker-selected"
              labelText="Label"
              selectedDay={new Date(2022, 1, 5)}
              onDayChange={(): void => undefined}
              isReversed={isReversed}
              locale="en-AU"
            />
            <DatePicker
              id="datepicker-description"
              labelText="Label"
              selectedDay={undefined}
              onDayChange={(): void => undefined}
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
              locale="en-AU"
            />
            <DatePicker
              id="datepicker-disabled"
              labelText="Label"
              selectedDay={undefined}
              onDayChange={(): void => undefined}
              isReversed={isReversed}
              locale="en-AU"
              disabled
            />
            <DatePicker
              id="datepicker-error"
              labelText="Label"
              selectedDay={new Date("potato")}
              onDayChange={(): void => undefined}
              isReversed={isReversed}
              locale="en-AU"
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="Localisation">
        <StickerSheet.Header headings={["en-AU", "en-US"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <DatePicker
              id="datepicker-enAU"
              labelText="Label"
              selectedDay={new Date("2022, 1, 5")}
              onDayChange={(): void => undefined}
              isReversed={isReversed}
              locale="en-AU"
            />
            <DatePicker
              id="datepicker-enUS"
              labelText="Label"
              selectedDay={new Date("2022, 1, 5")}
              onDayChange={(): void => undefined}
              isReversed={isReversed}
              locale="en-US"
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
