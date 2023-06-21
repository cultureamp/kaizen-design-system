import React, { useEffect, useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import Highlight from "react-highlight"
import { Paragraph } from "@kaizen/typography"
import { renderTriggerControls } from "~components/Filter/_docs/controls/renderTriggerControls"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/FilterButton"
import {
  DateValidationResponse,
  FilterDatePicker,
  ValidationMessage,
} from "../index"
import { FilterDatePickerField } from "../subcomponents/FilterDatePickerField"
import { defaultMonthControls } from "./controls/defaultMonthControls"
import { disabledDaysControls } from "./controls/disabledDaysControls"
import { validationControls } from "./controls/validationControls"

export default {
  title: "Components/Filter Date Picker",
  component: FilterDatePicker,
  args: {
    label: "Date",
    locale: "en-AU",
  },
  argTypes: {
    ...defaultMonthControls,
    ...validationControls,
    disabledDays: disabledDaysControls,
    renderTrigger: renderTriggerControls,
    locale: {
      options: ["en-US", "en-AU"],
      control: { type: "radio" },
    },
    isOpen: { control: "disabled" },
    selectedDate: {
      options: ["None", "Date"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
        },
      },
      mapping: {
        None: undefined,
        Date: new Date(),
      },
    },
    description: {
      control: "text",
    },
  },
} satisfies Meta<typeof FilterDatePicker>

const sampleCode = `
// This code is not connected to the controls of the attached component.
// @note: If you want a removable button, use the commented out code instead.

import {
  FilterButton,
  FilterButtonProps,
//  FilterButtonRemovable,
  FilterDatePicker,
} from "@kaizen/components"

const [isOpen, setIsOpen] = useState<boolean>(false)
const [date, setDate] = useState<Date | undefined>()

return (
  <FilterDatePicker
    id="filter-dp--default"
    label="Dates"
    locale="en-AU"
    renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
      <FilterButton {...triggerButtonProps} />
    )}
    // renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
    //   <FilterButtonRemovable
    //     triggerButtonProps={{ ...triggerButtonProps }}
    //     removeButtonProps={{
    //       onClick: (): void => undefined,
    //     }}
    //   />
    // )}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    selectedDate={date}
    onDateChange={setDate}
  />
)
`

export const Playground: StoryFn<typeof FilterDatePicker> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [date, setDate] = useState<Date | undefined>()

  useEffect(() => {
    setDate(args.selectedDate)
  }, [args.selectedDate])

  return (
    <FilterDatePicker
      {...args}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selectedDate={date}
      onDateChange={setDate}
    />
  )
}
Playground.parameters = {
  docs: {
    canvas: {
      sourceState: "shown",
    },
    source: {
      code: sampleCode,
    },
  },
}
Playground.args = {
  id: "filter-dp--default",
  /* @ts-expect-error: Storybook controls key; see argTypes in default export */
  renderTrigger: "Filter Button",
}

/**
 * Render function for the trigger button.
 *
 * Provides `selectedValue`, `label`, `isOpen`, `onClick` (calls `setIsOpen`).
 */
export const RenderTrigger: StoryFn = () => {
  const [isOpenButton, setIsOpenButton] = useState<boolean>(false)
  const [dateButton, setDateButton] = useState<Date | undefined>()
  const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false)
  const [rangeRemovable, setRangeRemovable] = useState<Date | undefined>()

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <FilterDatePicker
        id="filterdp--filter-button"
        label="FilterButton"
        locale="en-AU"
        renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
          <FilterButton {...triggerButtonProps} />
        )}
        isOpen={isOpenButton}
        setIsOpen={setIsOpenButton}
        selectedDate={dateButton}
        onDateChange={setDateButton}
      />
      <FilterDatePicker
        id="filterdp--filter-button-removable"
        label="FilterButtonRemovable"
        locale="en-AU"
        renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
          <FilterButtonRemovable
            triggerButtonProps={{ ...triggerButtonProps }}
            removeButtonProps={{
              onClick: (): void => undefined,
            }}
          />
        )}
        isOpen={isOpenRemovable}
        setIsOpen={setIsOpenRemovable}
        selectedDate={rangeRemovable}
        onDateChange={setRangeRemovable}
      />
    </div>
  )
}

/**
 * Custom description to provide extra context (input format help text remains).
 */
export const Description: StoryFn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <FilterDatePicker
      id="filterdp--description"
      label="Open to see description"
      locale="en-AU"
      renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
        <FilterButton {...triggerButtonProps} />
      )}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selectedDate={undefined}
      onDateChange={(): void => undefined}
      description="This is a custom description"
    />
  )
}

/**
 * Add extra props (eg. data-attributes)
 */
export const ExtendInputProps: StoryFn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <FilterDatePicker
      id="filterdp--extend-input-props"
      label="Check the DOM for the inputs"
      locale="en-AU"
      renderTrigger={(triggerButtonProps: FilterButtonProps): JSX.Element => (
        <FilterButton {...triggerButtonProps} />
      )}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selectedDate={undefined}
      onDateChange={(): void => undefined}
      data-testid="filterdp--input-testid"
    />
  )
}

const ValidationHelpText = ({
  validationResponse,
}: {
  validationResponse: DateValidationResponse | undefined
}): JSX.Element => (
  <div>
    <Paragraph variant="body">
      NOTE: This story includes additional custom validation to provide some
      guidance when dealing with validation other than date isInvalid or
      isDisabled.
    </Paragraph>
    <ul>
      <li>
        There will be a caution when the selectedDay <strong>is valid</strong>{" "}
        but <strong>is not within this year</strong>.
      </li>
      <li>
        There will be an error when the{" "}
        <strong>submit button is clicked</strong> and there is a{" "}
        <strong>current error</strong>.
      </li>
    </ul>
    <Paragraph variant="body">
      The <code>onValidate</code> callback returns a{" "}
      <code>validationResponse</code> object which provides data such as a
      default validation message, and can be utilised for custom validation.
    </Paragraph>

    <Highlight className="json">
      {JSON.stringify(validationResponse, null, "\t")}
    </Highlight>

    <ul>
      <li>
        <code>isInvalid</code>: A date that cannot be parsed. e.g
        &quot;potato&quot;.
      </li>
      <li>
        <code>isDisabled</code>: A date that have been set as disabled through
        the <code>disabledDates</code> prop.
      </li>
      <li>
        <code>isEmpty</code>: Input is empty.
      </li>
      <li>
        <code>isValidDate</code>: Date input that is not <code>invalid</code>{" "}
        nor <code>disabled</code> nor <code>empty</code>.
      </li>
    </ul>
  </div>
)

/**
 * Contents extracted from within the Filter to showcase the validation.
 */
export const Validation: StoryFn = () => {
  const [value, setValue] = useState<Date | undefined>()
  const [response, setResponse] = useState<DateValidationResponse | undefined>()
  const [validationMessage, setValidationMessage] = useState<
    ValidationMessage | undefined
  >()

  const handleValidate = (validationResponse: DateValidationResponse): void => {
    setResponse(validationResponse)
    // An example of additional validation
    if (
      validationResponse.isValidDate &&
      validationResponse.date?.getFullYear() !== new Date().getFullYear()
    ) {
      setValidationMessage({
        status: "caution",
        message: "Date is not this year",
      })
      return
    }

    setValidationMessage(validationResponse.validationMessage)
  }

  const submitRequest: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    setValidationMessage({ status: "error", message: "Error for date" })
    return alert("Error")
  }

  return (
    <>
      <form onSubmit={submitRequest}>
        <FilterDatePickerField
          id="datepicker-default"
          inputProps={{ labelText: "Label" }}
          // selectedDate={value}
          onDateChange={setValue}
          onValidate={handleValidate}
          validationMessage={validationMessage}
          selectedDate={new Date("2022-05-15")}
          disabledDays={[new Date("2022-05-15")]}
          locale="en-AU"
        />
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <button type="submit">Submit</button>
        </div>
      </form>

      <ValidationHelpText validationResponse={response} />
    </>
  )
}
Validation.parameters = {
  docs: { source: { type: "code" } },
  controls: { disable: true },
}
