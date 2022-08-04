import React, { useState } from "react"
import { Paragraph } from "@kaizen/typography"
import { Button } from "@kaizen/button"
import { FieldMessageStatus } from "@kaizen/draft-form"
import { CodeBlock } from "@kaizen/design-tokens/docs/DocsComponents"
import { ComponentStory, Story } from "@storybook/react"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DatePicker, ValidationResponse } from "../src/DatePicker"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { DayOfWeek } from "../src/enums"

const SUPPORTED_LOCALES = ["en-US", "en-AU"]

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Date Picker`,
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
    buttonRef: {
      control: "disabled",
    },
    inputRef: {
      control: "disabled",
    },
    locale: {
      options: SUPPORTED_LOCALES,
      control: { type: "radio" },
    },
    weekStartsOn: {
      options: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      control: {
        type: "radio",
        labels: {
          Sun: "DayOfWeek.Sun",
          Mon: "DayOfWeek.Mon",
          Tue: "DayOfWeek.Tue",
          Wed: "DayOfWeek.Wed",
          Thu: "DayOfWeek.Thu",
          Fri: "DayOfWeek.Fri",
          Sat: "DayOfWeek.Sat",
        },
      },
      mapping: {
        Sun: DayOfWeek.Sun,
        Mon: DayOfWeek.Mon,
        Tue: DayOfWeek.Tue,
        Wed: DayOfWeek.Wed,
        Thu: DayOfWeek.Thu,
        Fri: DayOfWeek.Fri,
        Sat: DayOfWeek.Sat,
      },
    },
    defaultMonth: {
      options: ["Default", "May2022"],
      control: {
        type: "select",
        labels: {
          Default: "Default (undefined)",
          May2022: "May 2022",
        },
      },
      mapping: {
        Default: undefined,
        May2022: new Date("2022-05-01"),
      },
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
    disabledDates: {
      options: ["None", "Today", "May2022"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
          Today: "[new Date()]",
          May2022: '[new Date("2022-05-01"), new Date("2022-05-22")]',
        },
      },
      mapping: {
        None: undefined,
        Today: [new Date()],
        May2022: [new Date("2022-05-01"), new Date("2022-05-22")],
      },
    },
    disabledRange: {
      options: ["None", "May2022"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
          May2022:
            '{ from: new Date("2022-05-01"), to: new Date("2022-05-12") }',
        },
      },
      mapping: {
        None: undefined,
        May2022: { from: new Date("2022-05-01"), to: new Date("2022-05-12") },
      },
    },
    disabledBeforeAfter: {
      options: ["None", "May2022"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
          May2022:
            '{ before: new Date("2022-05-30"), after: new Date("2022-05-15") }',
        },
      },
      mapping: {
        None: undefined,
        May2022: {
          before: new Date("2022-05-30"),
          after: new Date("2022-05-15"),
        },
      },
    },
    disabledBefore: {
      options: ["None", "May2022"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
          May2022: 'new Date("2022-05-16")',
        },
      },
      mapping: {
        None: undefined,
        May2022: new Date("2022-05-16"),
      },
    },
    disabledAfter: {
      options: ["None", "May2022"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
          May2022: 'new Date("2022-05-21")',
        },
      },
      mapping: {
        None: undefined,
        May2022: new Date("2022-05-21"),
      },
    },
    disabledDaysOfWeek: {
      options: ["None", "Fridays", "Weekends"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
          Fridays: "[DayOfWeek.Fri]",
          Weekends: "[DayOfWeek.Sat, DayOfWeek.Sun]",
        },
      },
      mapping: {
        None: undefined,
        Fridays: [DayOfWeek.Fri],
        Weekends: [DayOfWeek.Sat, DayOfWeek.Sun],
      },
    },
  },
}

export const DefaultStory: ComponentStory<typeof DatePicker> = props => {
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
      {...props}
      onDayChange={setValueDate}
      onValidate={handleValidation}
      status={props.status || status}
      validationMessage={props.validationMessage || validationMessage}
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
}

export const ValidationStory: Story = () => {
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
      setValidationMessage("Date is not this year")
      return
    }
    setStatus(validationResponse.status)
    setValidationMessage(validationResponse.validationMessage)
  }

  const submitRequest = () => {
    // An example of a form submit request
    if (status === "error" || status === "caution") {
      setValidationMessage("There is an error")
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
  controls: { disable: true },
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
            validationMessage="Invalid Date"
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
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
