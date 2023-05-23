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
import { ComponentDocsTemplate } from "../../../../../storybook/components/DocsContainer"
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
  tags: ["autodocs"],
  title: "Components/Filter Date Picker",
  component: FilterDatePicker,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    isInKaio: true,
    installation: [
      "yarn add @kaizen/components",
      'import { FilterDatePicker } from "@kaizen/components"',
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/components/src/FilterDatePicker",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=2349%3A110993&t=gzsKluk8LiOX3jCF-1",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093959/Filters",
    },
  },
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
const [range, setRange] = useState<Date | undefined>()

return (
  <FilterDatePicker
    id="filter-drp--default"
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
    selectedDate={range}
    onDateChange={setRange}
  />
)
`

/**
 * Date Range Picker to use for Filtering.
 */
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
  id: "filter-drp--default",
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
        id="filterdrp--filter-button"
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
        id="filterdrp--filter-button-removable"
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
 * Selected value will only be passed into the Filter Button when date range has both a Start and End date.
 */
export const SelectedRange: StoryFn = () => {
  const commonProps = {
    locale: "en-AU",
    renderTrigger: (triggerButtonProps: FilterButtonProps): JSX.Element => (
      <FilterButton {...triggerButtonProps} />
    ),
  }

  const [isOpenNotSelected, setIsOpenNotSelected] = useState<boolean>(false)
  const [isOpenPartial, setIsOpenPartial] = useState<boolean>(false)
  const [isOpenComplete, setIsOpenComplete] = useState<boolean>(false)
  const [rangeNotSelected, setRangeNotSelected] = useState<Date | undefined>()
  const [rangePartial, setRangePartial] = useState<Date | undefined>(new Date())
  const [rangeComplete, setRangeComplete] = useState<Date | undefined>(
    new Date("2022-05-01")
  )

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <FilterDatePicker
        {...commonProps}
        id="filterdrp--not-selected"
        label="Not selected"
        isOpen={isOpenNotSelected}
        setIsOpen={setIsOpenNotSelected}
        selectedDate={rangeNotSelected}
        onDateChange={setRangeNotSelected}
      />
      <FilterDatePicker
        {...commonProps}
        id="filterdrp--partial-range"
        label="Partial range"
        isOpen={isOpenPartial}
        setIsOpen={setIsOpenPartial}
        selectedDate={rangePartial}
        onDateChange={setRangePartial}
      />
      <FilterDatePicker
        {...commonProps}
        id="filterdrp--complete"
        label="Complete range"
        isOpen={isOpenComplete}
        setIsOpen={setIsOpenComplete}
        selectedDate={rangeComplete}
        onDateChange={setRangeComplete}
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
      id="filterdrp--description"
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
 * Add extra props (eg. data-attributes) to the Start or End date inputs
 * using `inputStartDateProps` and/or `inputEndDateProps`.
 */
export const ExtendInputProps: StoryFn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <FilterDatePicker
      id="filterdrp--extend-input-props"
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
  const [range, setRange] = useState<Date | undefined>()
  const [response, setResponse] = useState<DateValidationResponse | undefined>()
  const [validationMessage, setValidationMessage] = useState<
    ValidationMessage | undefined
  >()

  const handleValidate = (validationResponse: DateValidationResponse): void => {
    setResponse(validationResponse)
    // An example of additional validation
    if (validationResponse.isValidDate) {
      setValidationMessage({
        status: "caution",
        message: "Date is not this year",
      })
      return
    }

    setValidationMessage(validationResponse.validationMessage)
  }

  const handleDateStartValidate = (
    validationResponse: DateValidationResponse
  ): void => handleValidate(validationResponse)

  const submitRequest: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    setValidationMessage({ status: "error", message: "Error for start date" })
    return alert("Error")
  }

  return (
    <>
      <form onSubmit={submitRequest}>
        <FilterDatePickerField
          id="datepicker-default"
          label="Label"
          selectedDate={range}
          onDateChange={setRange}
          onValidate={handleDateStartValidate}
          validationMessage={validationMessage}
          disabledDays={new Date()}
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
