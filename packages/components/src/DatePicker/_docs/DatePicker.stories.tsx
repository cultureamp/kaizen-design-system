import React, { useEffect, useState } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryObj } from "@storybook/react"
import Highlight from "react-highlight"
import { Button } from "~components/Button"
import { defaultMonthControls } from "~components/Calendar/_docs/controls/defaultMonthControls"
import { weekStartsOnControls } from "~components/Calendar/_docs/controls/weekStartsOnControls"
import { FieldMessageStatus } from "~components/FieldMessage"
import { Text } from "~components/Text"
import { DatePicker, ValidationResponse } from "../index"
import { datePickerLocaleControls } from "./controls/datePickerLocaleControls"
import { disabledDayMatchersControls } from "./controls/disabledDayMatchersControls"

const meta = {
  title: "Components/Date controls/DatePicker",
  component: DatePicker,
  argTypes: {
    ...datePickerLocaleControls,
    ...defaultMonthControls,
    ...disabledDayMatchersControls,
    ...weekStartsOnControls,
    buttonRef: {
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
  args: {
    labelText: "Date",
    selectedDay: undefined,
    onDayChange: action("on day change"),
  },
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

const DatePickerTemplate: Story = {
  render: args => {
    const [selectedDate, setValueDate] = useState<Date | undefined>(
      args.selectedDay
    )

    useEffect(() => {
      setValueDate(args.selectedDay)
    }, [args.selectedDay])

    return (
      <DatePicker
        {...args}
        selectedDay={selectedDate}
        onDayChange={setValueDate}
      />
    )
  },
}

export const Playground: Story = {
  ...DatePickerTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const LabelText: Story = {
  ...DatePickerTemplate,
  args: { labelText: "Label text" },
}

const sourceCodeControlled = `
const [selectedDate, setValueDate] = useState<Date | undefined>()

return (
  <DatePicker
    selectedDay={selectedDate}
    onDayChange={setValueDate}
  />
)
`

export const Controlled: Story = {
  ...DatePickerTemplate,
  args: { selectedDay: new Date() },
  parameters: {
    docs: {
      source: {
        code: sourceCodeControlled,
      },
    },
  },
}

export const Locale: Story = {
  ...DatePickerTemplate,
  args: { locale: "en-US", selectedDay: new Date() },
}

export const Description: Story = {
  args: { description: "Custom description!" },
}

export const Validation: Story = {
  render: () => {
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
          <Text variant="body">
            NOTE: This story includes additional custom validation to provide
            some guidance when dealing with validation other than date isInvalid
            or isDisabled.
          </Text>
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
          <Text variant="body">
            The <code>onValidate</code> callback returns a{" "}
            <code>validationResponse</code> object which provides data such as a
            default validation message, and can be utilised for custom
            validation.
          </Text>
          <Highlight className="json">
            {JSON.stringify(response, null, 4)}
          </Highlight>
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
  },
  parameters: {
    docs: { source: { type: "code" } },
    controls: { disable: true },
  },
}

export const DisabledDays: Story = {
  parameters: { controls: { include: /^disabled/ } },
}
