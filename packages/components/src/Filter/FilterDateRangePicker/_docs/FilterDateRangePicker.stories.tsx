import React, { useEffect, useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import Highlight from "react-highlight"
import { Paragraph } from "@kaizen/typography"
import { DateRange } from "~components/Calendar"
import { defaultMonthControls } from "~components/Calendar/_docs/controls/defaultMonthControls"
import {
  FilterButton,
  FilterButtonProps,
  FilterButtonRemovable,
} from "~components/Filter/FilterButton"
import { DateValidationResponse } from "~components/Filter/FilterDatePicker"
import { renderTriggerControls } from "~components/Filter/_docs/controls/renderTriggerControls"
import {
  DateRangeFieldValidationMessage,
  FilterDateRangePicker,
} from "../index"
import { FilterDateRangePickerField } from "../subcomponents/FilterDateRangePickerField"
import { disabledDaysControls } from "./controls/disabledDaysControls"
import { validationControls } from "./controls/validationControls"

const meta = {
  title: "Components/Filter Date Range Picker",
  component: FilterDateRangePicker,
  argTypes: {
    classNameOverride: {
      control: "disabled",
      description:
        "Add extra classnames to the component. (This doesn't work - to be fixed)",
    },
    ...defaultMonthControls,
    ...validationControls,
    disabledDays: disabledDaysControls,
    renderTrigger: renderTriggerControls,
    locale: {
      options: ["en-US", "en-AU"],
      control: { type: "radio" },
    },
    inputStartDateProps: {
      table: { type: { summary: 'Omit<DateInputProps, "id">' } },
    },
    inputEndDateProps: {
      table: { type: { summary: 'Omit<DateInputProps, "id">' } },
    },
    isOpen: { control: "disabled" },
    selectedRange: {
      options: ["None", "Partial Range", "Complete Range"],
      control: {
        type: "select",
        labels: {
          None: "undefined",
          "Partial Range": "{ from: new Date() }",
          "Complete Range":
            '{ from: new Date("2022-05-01"), to: new Date("2022-05-12") }',
        },
      },
      mapping: {
        None: undefined,
        "Partial Range": { from: new Date() },
        "Complete Range": {
          from: new Date("2022-05-01"),
          to: new Date("2022-05-12"),
        },
      },
    },
    description: {
      control: "text",
    },
  },
  args: {
    label: "Dates",
    locale: "en-AU",
    isOpen: false,
    selectedRange: undefined,
    renderTrigger: (triggerButtonProps: FilterButtonProps): JSX.Element => (
      <FilterButton {...triggerButtonProps} />
    ),
  },
} satisfies Meta<typeof FilterDateRangePicker>

export default meta

type Story = StoryObj<typeof meta>

const FilterDateRangePickerTemplate: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)
    const [range, setRange] = useState<DateRange | undefined>()

    useEffect(() => {
      setRange(args.selectedRange)
    }, [args.selectedRange])

    return (
      <FilterDateRangePicker
        {...args}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedRange={range}
        onRangeChange={setRange}
      />
    )
  },
}

const sampleCode = `
// This code is not connected to the controls of the attached component.
// @note: If you want a removable button, use the commented out code instead.

import {
  FilterButton,
  FilterButtonProps,
//  FilterButtonRemovable,
  FilterDateRangePicker,
} from "@kaizen/components"

const [isOpen, setIsOpen] = useState<boolean>(false)
const [range, setRange] = useState<DateRange | undefined>()

return (
  <FilterDateRangePicker
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
    selectedRange={range}
    onRangeChange={setRange}
  />
)
`

export const Playground: Story = {
  ...FilterDateRangePickerTemplate,
  args: {
    id: "filter-drp--default",
    /* @ts-expect-error: Storybook controls key; see argTypes in default export */
    renderTrigger: "Filter Button",
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
      source: {
        code: sampleCode,
      },
    },
  },
}

/**
 * Render function for the trigger button.
 *
 * Provides `selectedValue`, `label`, `isOpen`, `onClick` (calls `setIsOpen`).
 */
export const RenderTrigger: Story = {
  render: () => {
    const [isOpenButton, setIsOpenButton] = useState<boolean>(false)
    const [rangeButton, setRangeButton] = useState<DateRange | undefined>()
    const [isOpenRemovable, setIsOpenRemovable] = useState<boolean>(false)
    const [rangeRemovable, setRangeRemovable] = useState<
      DateRange | undefined
    >()

    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <FilterDateRangePicker
          id="filterdrp--filter-button"
          label="FilterButton"
          locale="en-AU"
          renderTrigger={(
            triggerButtonProps: FilterButtonProps
          ): JSX.Element => <FilterButton {...triggerButtonProps} />}
          isOpen={isOpenButton}
          setIsOpen={setIsOpenButton}
          selectedRange={rangeButton}
          onRangeChange={setRangeButton}
        />
        <FilterDateRangePicker
          id="filterdrp--filter-button-removable"
          label="FilterButtonRemovable"
          locale="en-AU"
          renderTrigger={(
            triggerButtonProps: FilterButtonProps
          ): JSX.Element => (
            <FilterButtonRemovable
              triggerButtonProps={{ ...triggerButtonProps }}
              removeButtonProps={{
                onClick: (): void => undefined,
              }}
            />
          )}
          isOpen={isOpenRemovable}
          setIsOpen={setIsOpenRemovable}
          selectedRange={rangeRemovable}
          onRangeChange={setRangeRemovable}
        />
      </div>
    )
  },
}

/**
 * Selected value will only be passed into the Filter Button when date range has both a Start and End date.
 */
export const SelectedRange: Story = {
  render: args => {
    const [isOpenNotSelected, setIsOpenNotSelected] = useState<boolean>(false)
    const [isOpenPartial, setIsOpenPartial] = useState<boolean>(false)
    const [isOpenComplete, setIsOpenComplete] = useState<boolean>(false)
    const [rangeNotSelected, setRangeNotSelected] = useState<
      DateRange | undefined
    >()
    const [rangePartial, setRangePartial] = useState<DateRange | undefined>({
      from: new Date(),
    })
    const [rangeComplete, setRangeComplete] = useState<DateRange | undefined>({
      from: new Date("2022-05-01"),
      to: new Date("2022-05-12"),
    })

    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <FilterDateRangePicker
          {...args}
          id="filterdrp--not-selected"
          label="Not selected"
          isOpen={isOpenNotSelected}
          setIsOpen={setIsOpenNotSelected}
          selectedRange={rangeNotSelected}
          onRangeChange={setRangeNotSelected}
        />
        <FilterDateRangePicker
          {...args}
          id="filterdrp--partial-range"
          label="Partial range"
          isOpen={isOpenPartial}
          setIsOpen={setIsOpenPartial}
          selectedRange={rangePartial}
          onRangeChange={setRangePartial}
        />
        <FilterDateRangePicker
          {...args}
          id="filterdrp--complete"
          label="Complete range"
          isOpen={isOpenComplete}
          setIsOpen={setIsOpenComplete}
          selectedRange={rangeComplete}
          onRangeChange={setRangeComplete}
        />
      </div>
    )
  },
}

/**
 * Custom description to provide extra context (input format help text remains).
 */
export const Description: Story = {
  ...FilterDateRangePickerTemplate,
  args: {
    id: "filterdrp--description",
    label: "Open to see description",
    description: "This is a custom description",
  },
}

/**
 * Add extra props (eg. data-attributes) to the Start or End date inputs
 * using `inputStartDateProps` and/or `inputEndDateProps`.
 */
export const ExtendInputProps: Story = {
  ...FilterDateRangePickerTemplate,
  args: {
    id: "filterdrp--extend-input-props",
    label: "Check the DOM for the inputs",
    inputStartDateProps: { "data-testid": "filterdrp--input-start-testid" },
    inputEndDateProps: { "data-testid": "filterdrp--input-end-testid" },
  },
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
export const Validation: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>()
    const [response, setResponse] = useState<
      DateValidationResponse | undefined
    >()
    const [validationMessage, setValidationMessage] = useState<
      DateRangeFieldValidationMessage | undefined
    >()

    const handleValidate = (
      validationResponse: DateValidationResponse,
      input: "dateStart" | "dateEnd"
    ): void => {
      setResponse(validationResponse)
      // An example of additional validation
      if (
        validationResponse.isValidDate &&
        validationResponse.date?.getFullYear() !== new Date().getFullYear()
      ) {
        setValidationMessage(currentValue => ({
          ...currentValue,
          [input]: {
            status: "caution",
            message: `(${input}) Date is not this year`,
          },
        }))
        return
      }

      setValidationMessage(currentValue => ({
        ...currentValue,
        [input]: validationResponse.validationMessage,
      }))
    }

    const handleDateStartValidate = (
      validationResponse: DateValidationResponse
    ): void => handleValidate(validationResponse, "dateStart")

    const handleDateEndValidate = (
      validationResponse: DateValidationResponse
    ): void => handleValidate(validationResponse, "dateEnd")

    const submitRequest: React.FormEventHandler<HTMLFormElement> = e => {
      e.preventDefault()

      let errors: DateRangeFieldValidationMessage | undefined

      if (validationMessage?.dateStart) {
        errors = {
          dateStart: { status: "error", message: "Error for start date" },
        }
      }

      if (validationMessage?.dateEnd) {
        errors = {
          ...errors,
          dateEnd: { status: "error", message: "Error for end date" },
        }
      }

      if (errors) {
        setValidationMessage(errors)
        return alert("Error")
      }

      alert("Success")
    }

    return (
      <>
        <form onSubmit={submitRequest}>
          <FilterDateRangePickerField
            id="datepicker-default"
            label="Label"
            selectedRange={range}
            onRangeChange={setRange}
            onValidate={{
              dateStart: handleDateStartValidate,
              dateEnd: handleDateEndValidate,
            }}
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
  },
  parameters: {
    docs: { source: { type: "code" } },
    controls: { disable: true },
  },
}
